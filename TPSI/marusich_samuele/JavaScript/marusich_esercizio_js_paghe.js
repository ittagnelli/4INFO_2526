
function addClass(oggetto, classe){
    oggetto.classList.add(classe);
    return;
}

function getElement(tipo, selector, returnValue){
    if(tipo === "classe"){
        return document.getElementsByClassName(selector);
    }else if(tipo === "id"){
        if(returnValue != null){
            return document.getElementById(selector).value;
        }else{
            return document.getElementById(selector);
        }
    }
}

function createObject(oggetto){
    return document.createElement(oggetto)
}

function checkFields(){
    return !getElement("id","dipartimento","si") || !getElement("id","cognome","si") || !getElement("id","nome","si") || !getElement("id","mese","si") || !getElement("id","importo","si");
}

function addUtente(){
    if(!checkFields()){
        let ultimaRiga = getElement("id","ultima");

        let riga = createObject("tr");
        let tdDipartimento = createObject("td");
        let tdCogonome = createObject("td");
        let tdNome = createObject("td");
        let tdMese = createObject("td");
        let tdImporto = createObject("td");

        tdDipartimento.innerText =  getElement("id","dipartimento","si");
        tdCogonome.innerText = getElement("id","cognome","si");
        tdNome.innerText = getElement("id","nome","si");
        tdMese.innerText = getElement("id","mese","si");
        tdImporto.innerText = getElement("id","importo","si");
        
        addClass(tdImporto, "importo");


        riga.append(tdDipartimento,tdCogonome,tdNome,tdMese,tdImporto);
        ultimaRiga.after(riga);
    }
}

function getImporti(){
    let importi = document.querySelectorAll(".importo");
    return importi;
}

function somma(){
    let importi = getImporti();
    let sum = 0;
    for(let i = 0; i < importi.length; i++){
        sum += parseFloat(importi[i].innerText);
    }

    return sum;
}

function makeVisible(classe){
    let arrayObject = getElement("classe", classe);
    for(let i = 0; i < arrayObject.length; i++){
        arrayObject[i].classList.remove("hidden");
    }
}

function addTotale(){
    makeVisible("totale");

    let importo = getElement("id","total");

    if(importo){
        importo.innerText = somma() + " €";
    }else{
        alert("problema");
    }
}

function media(){
    return somma()/getImporti().length;
}

function addMedia(){
    makeVisible("media");

    let mediaElement = getElement("id","media");

    if(mediaElement){
        mediaElement.innerText = media() + " €";
    }else{
        alert("problema");
    }
}