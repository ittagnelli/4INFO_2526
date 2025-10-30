document.addEventListener("DOMContentLoaded",init,false);

function init(){
    let addP = document.getElementById("add");
    addP.addEventListener("click",addItem);
    let aggP = document.getElementById("aggiornaTotale");
    aggP.addEventListener("click",aggiornaTotale);
}

function getObj(id){
    return document.getElementById(id);
}

function getValuesByIds(idList){
    let vals = [null,null,null];
    for(let i = 0;i<idList.length;i++){
        vals[i] = getObj(idList[i]).value;
        if(vals[i] == ""){
            alert("Riempire tutti i campi");
            return null;
        }else if(i != 0){
            if(Number(vals[i]) < 1 && i == 1){
                alert("Impossibile avere numeri negativi");
                return null;
            }else if(Number(vals[i] < 0 && i == 2)){
                alert("Impossibile avere un costo negativo");
                return null;
            }
        }
    }
    return vals;
}

function clearCampi(idList){
    for(let i = 0;i<idList.length;i++){
        let a = getObj(idList[i]);
        a.value="";
    }
}

function crea(tag){
    return document.createElement(tag);
}

function creaRiga(valoriInput){
    let id = Date.now();
    let riga = crea("tr");
    let nomePr = crea("td");
    let quantitaPr = crea("td");
    let quantitaPrInput = crea("input");
    let costoPrUnit = crea("td");
    let costoPrTot = crea("td");
    let removePr = crea("td");
    let removePrSp = crea("span");

    riga.id=id;
    nomePr.innerText=valoriInput[0];
    quantitaPrInput.type="number";
    quantitaPrInput.min="1";
    quantitaPrInput.value=valoriInput[1];
    quantitaPrInput.addEventListener("change",aggiorna);
    quantitaPrInput.id=id;
    costoPrUnit.innerText= String(valoriInput[2]) + " €";
    costoPrTot.innerText= String((Number(valoriInput[2]) * Number(valoriInput[1])).toFixed(2)) + " €";
    costoPrTot.classList.add("importo");
    removePrSp.classList.add("material-icons");
    removePrSp.classList.add("icon-remove")
    removePrSp.innerText="remove_shopping_cart";
    removePrSp.id=id;
    removePrSp.addEventListener("click",removeItem);

    quantitaPr.append(quantitaPrInput);
    removePr.append(removePrSp);
    riga.append(nomePr);
    riga.append(quantitaPr);
    riga.append(costoPrUnit);
    riga.append(costoPrTot);
    riga.append(removePr);

    return riga;
}

function addItem(){
    let table = getObj("carrello");
    let ids = ["prodotto","qty","costo"];
    let valoriInput = getValuesByIds(ids);
    if(valoriInput == null){
        return;
    }
    //console.log(valoriInput);
    
    let riga = creaRiga(valoriInput);
    let rigaSep = getObj("TrSep");
    rigaSep.parentNode.insertBefore(riga,rigaSep);

    clearCampi(ids);
    aggiornaTotale();
}

function aggiorna(el){
    let tds = getObj(el.srcElement.id).children;
    let qt = Number(tds[1].children[0].value);
    let cost = Number(tds[2].innerText.slice(0,-1));
    if(qt < 1){
        alert("Impossibile avere quantità negative");
        return;
    }
    tds[3].innerText = String((qt * cost).toFixed(2)) + " €";
    aggiornaTotale();
}

function removeItem(el){
    let riga = getObj(el.srcElement.id)
    riga.remove();
    aggiornaTotale();
}

function aggiornaTotale(){
    let righe = document.getElementsByTagName("tr");
    let totale = 0;
    for(let i = 2;i < righe.length - 2;i++){
        totale += Number(righe[i].children[3].innerText.slice(0,-2));
    }
    let totaleTd = getObj("totale");
    totaleTd.innerText = String(totale.toFixed(2)) + " €";
}