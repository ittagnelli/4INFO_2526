document.addEventListener("DOMContentLoaded", init, false)

function init(){
    console.log("DOM caricato.")
}

let primaPressioneTotale = true
let primaPressioneMedia = true

let tabellaObj = document.getElementById("paghe")

function nuovaPaga(){
    let dipartimentiObj = document.getElementById("dipartimento")
    let dipartimentiValue = dipartimentiObj.value
    let cognomeObj = document.getElementById("cognome")
    let cognomeValue = cognomeObj.value
    let nomeObj = document.getElementById("nome")
    let nomeValue = nomeObj.value
    let dataObj = document.getElementById("mese")
    let dataValue = dataObj.value
    let importoObj = document.getElementById("importo")
    let importoValue = importoObj.value
    let tabellaObj = document.getElementById("paghe")

    if(dipartimentiValue != "" && cognomeValue != "" && nomeValue != "" && dataValue != "" && importoValue != ""){
        const tr = document.createElement("tr")
        const tdDipartimento = document.createElement("td")
        const tdCognome = document.createElement("td")
        const tdNome = document.createElement("td")
        const tdMese = document.createElement("td")
        const tdImporto = document.createElement("td")
        const tdVuoto = document.createElement("td")

        tdImporto.classList.add("importo")

        tdDipartimento.innerText = dipartimentiValue
        tdCognome.innerText = cognomeValue
        tdNome.innerText = nomeValue
        tdMese.innerText = dataValue
        tdImporto.innerText = importoValue
        
        tdVuoto.colSpan = 3

        tr.append(tdDipartimento)
        tr.append(tdCognome)
        tr.append(tdNome)
        tr.append(tdMese)
        tr.append(tdImporto)
        tr.append(tdVuoto)
        tabellaObj.append(tr)

        dipartimentiObj.value = ""
        cognomeObj.value = ""
        nomeObj.value = ""
        dataObj.value = ""
        importoObj.value = ""
    }
    else{
        alert("Compilare tutti i campi")
    }
}

function mostraTot(){
    let tabellaObj = document.getElementById("paghe")
    if(primaPressioneTotale == true && tabellaObj.children.length >= 3){
        let body = document.getElementById("body")
        let tabellaSomma = document.createElement("table")
        let rigaLineaSup = document.createElement("tr")
        let rigaPrezzo = document.createElement("tr")
        let rigaLineaInf = document.createElement("tr")
        let tdRigaSup = document.createElement("td")
        let tdCentrTotale = document.createElement("td")
        let tdCentrPrezzo = document.createElement("td")
        let tdRigaInf = document.createElement("td")
        let hrRigaSup = document.createElement("hr")
        let hrRigaInf = document.createElement("hr")
        
        tdCentrPrezzo.id = "sommaTdValPrezzo"

        tdRigaSup.colSpan = 5
        tdCentrTotale.colSpan = 4
        tdRigaInf.colSpan = 5
        tdCentrPrezzo.classList.add("importo")
        
        let somma = 0
        for (let i = 1; i < tabellaObj.children.length; i++) {
            somma = somma + Number(tabellaObj.children[i].children[4].innerText)
        }

        tdCentrTotale.innerHTML = "TOTALE"
        tdCentrPrezzo.innerHTML = `${somma} €`

        tabellaSomma.append(rigaLineaSup)
        tabellaSomma.append(rigaPrezzo)
        tabellaSomma.append(rigaLineaInf)
        rigaLineaSup.append(tdRigaSup)
        rigaPrezzo.append(tdCentrTotale)
        rigaPrezzo.append(tdCentrPrezzo)
        rigaLineaInf.append(tdRigaInf)
        tdRigaSup.append(hrRigaSup)
        tdRigaInf.append(hrRigaInf)
        body.append(tabellaSomma)

        primaPressioneTotale = false
    }
    else if(primaPressioneTotale == false && tabellaObj.children.length >= 3){
        let tdCentrPrezzo = document.getElementById("sommaTdValPrezzo")
        
        let somma = 0
        for (let i = 1; i < tabellaObj.children.length; i++) {
            somma = somma + Number(tabellaObj.children[i].children[4].innerText)
        }

        tdCentrPrezzo.innerHTML = `${somma} €`
    }
    else{
        alert("Per poter usare la funzione somma è necessario avere almeno due entry nelle paghe.")
    }
}

function mostraMed(){
    let tabellaObj = document.getElementById("paghe")
    if(primaPressioneMedia == true && tabellaObj.children.length >= 3){
        let body = document.getElementById("body")
        let tabellaMedia = document.createElement("table")
        let rigaLineaSup = document.createElement("tr")
        let rigaPrezzo = document.createElement("tr")
        let rigaLineaInf = document.createElement("tr")
        let tdRigaSup = document.createElement("td")
        let tdCentrTotale = document.createElement("td")
        let tdCentrPrezzo = document.createElement("td")
        let tdRigaInf = document.createElement("td")
        let hrRigaSup = document.createElement("hr")
        let hrRigaInf = document.createElement("hr")
        
        tdCentrPrezzo.id = "mediaTdValPrezzo"

        tdRigaSup.colSpan = 5
        tdCentrTotale.colSpan = 4
        tdRigaInf.colSpan = 5
        tdCentrPrezzo.classList.add("importo")
        
        let somma = 0
        for (let i = 1; i < tabellaObj.children.length; i++) {
            somma = somma + Number(tabellaObj.children[i].children[4].innerText)
        }
        let media = somma / (tabellaObj.children.length - 1)

        tdCentrTotale.innerHTML = "TOTALE"
        tdCentrPrezzo.innerHTML = `${media} €`

        tabellaMedia.append(rigaLineaSup)
        tabellaMedia.append(rigaPrezzo)
        tabellaMedia.append(rigaLineaInf)
        rigaLineaSup.append(tdRigaSup)
        rigaPrezzo.append(tdCentrTotale)
        rigaPrezzo.append(tdCentrPrezzo)
        rigaLineaInf.append(tdRigaInf)
        tdRigaSup.append(hrRigaSup)
        tdRigaInf.append(hrRigaInf)
        body.append(tabellaMedia)

        primaPressioneMedia = false
    }
    else if(primaPressioneMedia == false && tabellaObj.children.length >= 3){
        let tdCentrPrezzo = document.getElementById("mediaTdValPrezzo")
        
        let somma = 0
        for (let i = 1; i < tabellaObj.children.length; i++) {
            somma = somma + Number(tabellaObj.children[i].children[4].innerText)
        }
        let media = somma / (tabellaObj.children.length - 1)

        tdCentrPrezzo.innerHTML = `${media} €`
    }
    else{
        alert("Per poter usare la funzione media è necessario avere almeno due entry nelle paghe.")
    }
}