function getElement(tipo, selector, returnValue){
    if(tipo === "classe"){
        return document.getElementsByClassName(selector);
    }else if(tipo === "id"){
        if(returnValue != false){
            return document.getElementById(selector).value;
        }else{
            return document.getElementById(selector);
        }
    }
}
function createRemoveIconObject(){
    let spanIcon = createObject("span");

    spanIcon.classList.add("material-icons","icon-remove");
    return spanIcon;
}
function createNumberInput(){
    numInput = createObject("input");
    numInput.classList.add("qty_input");
    numInput.type = "number";
    numInput.min = "1";
    numInput.value = getElement("id","qty",true);

    return numInput;
}

function createObject(oggetto){
    return document.createElement(oggetto);
}

function checkFields(){
    return !getElement("id","prodotto",true) || 
    !getElement("id","qty",true) || 
    !getElement("id","costo",true);
}

function getTableRows(){
    return document.querySelectorAll("tr");
}

function addProdotto(){
    if(!checkFields()){
        let ultimaRiga = getElement("id","ultima",false);
        let newRiga = createObject("tr");
        let tdProdotto = createObject("td");
        let tdQuantita = createObject("td");
        let tdCosto = createObject("td");
        let tdImporto = createObject("td");
        let tdRemove = createObject("td");
        let spanRemove = createRemoveIconObject();
        let inputQuantita = createNumberInput();

        tdProdotto.innerText = getElement("id","prodotto",true);
        inputQuantita.innerText = getElement("id","qty",true);
        tdCosto.innerText = getElement("id","costo",true);
        spanRemove.innerText = "remove_shopping_cart";

        tdImporto.classList.add("importo");
        tdImporto.innerText = parseFloat(inputQuantita.value) * parseFloat(tdCosto.innerText) + "€";

        tdQuantita.addEventListener("input", function(){
            tdImporto.innerText = parseFloat(inputQuantita.value) * parseFloat(tdCosto.innerText) + "€";
        });

        tdQuantita.append(inputQuantita);
        tdRemove.append(spanRemove);
        newRiga.append(tdProdotto,tdQuantita,tdCosto,tdImporto,tdRemove);
        ultimaRiga.after(newRiga);

        tdRemove.addEventListener("click", function (){
            newRiga.remove();
        });
    }
}

function showTot(){
    if (!getElement("class", "hidden", true)){
        doShowTot();
    }

    let rows = getTableRows();
    let s = 0;
    for(let i = 2; i < rows.length - 2; i++){
        let tr = rows[i];
        let tds = tr.children;
        let importo = parseFloat(tds[3].innerText.replace("€", ""));
        s += importo;
    }
    
    let imp = getElement("id","import",false);
    imp.innerText = s + "€";
}

function doShowTot(){
    let totaleNascosto = document.getElementsByClassName("hidden");
    for(let i = 0;i < totaleNascosto.length;i++){
        console.log(totaleNascosto[i].classList);
        console.log(totaleNascosto[i]);
        console.log("-----------------")
        totaleNascosto[i].classList.remove("hidden");
    }
}