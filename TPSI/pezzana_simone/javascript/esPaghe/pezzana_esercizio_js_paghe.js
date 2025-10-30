document.addEventListener("DOMContentLoaded",init,false);

function addEvento(id,funz){
    let obj = document.getElementById(id);
    obj.addEventListener("click",funz);
}

function init(){
    addEvento("addPuls",addF);
    addEvento("mediaPuls",mediaF);
    addEvento("totalePuls",totaleF);
}

function getObj(id){
    return document.getElementById(id);
}

function getObjClass(classe){
    return document.getElementsByClassName(classe);
}

function crea(tag,val){
    let obj = document.createElement(tag);
    obj.innerText = val;
    return obj;
}

function addF(){
    let ids = ["dipartimento","cognome","nome","mese","importo"];
    let objs = [null,null,null,null,null];
    for(let i = 0;i<ids.length;i++){
        objs[i] = getObj(ids[i]);
        if(objs[i].value == ""){
            alert("Inserire tutti i campi");
            return;
        }
    }
    let nuoviObj = [null,null,null,null,null,null];
    let tags = ["tr","td","td","td","td","td"];
    for(let i = 0 ; i < nuoviObj.length;i++){
        if(i == 0){
            nuoviObj[i] = document.createElement("tr");
            nuoviObj[i].classList.add("Riga");
        }else{
            nuoviObj[i] = crea(tags[i],objs[i-1].value);
        }
        if(i == 5){
            nuoviObj[i].innerText += " €"
            nuoviObj[i].classList.add("importo");
        }
    }
    for(let i = 1;i < nuoviObj.length;i++){
        nuoviObj[0].append(nuoviObj[i]);
    }

    let table = getObj("paghe");
    let riga = getObj("RigaSep");
    riga.parentNode.insertBefore(nuoviObj[0],riga);

    for(let i = 0;i<objs.length;i++){
        objs[i].value="";
    }



}

function calcoloMedia(righe){
    let media = calcoloSomma(righe) / righe.length;
    return media;
}

function calcoloSomma(righe){
    let somma = 0;
    for(let i = 0;i<righe.length;i++){
        let valore = righe[i].children[4].innerText;
        somma += Number(valore.slice(0,-2));
    }
    return somma;
}

function mediaF(){
    let righe = getObjClass("Riga");
    let mediaDaAgg = getObj("media");
    if(righe.length >= 2){
        mediaDaAgg.innerText = calcoloMedia(righe).toFixed(2) + " €";
    }else{
        alert("Hai inserito troppe poche paghe");
    }
}

function totaleF(){
    let righe = getObjClass("Riga");
    let totaleDaAgg = getObj("totale");
    if(righe.length >= 2){
        totaleDaAgg.innerText = calcoloSomma(righe).toFixed(2) + " €";
    }else{
        alert("Hai inserito troppe poche paghe");
    }
}