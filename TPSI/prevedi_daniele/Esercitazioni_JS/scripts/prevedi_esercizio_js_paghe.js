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
    if(primaPressioneTotale == true && tabellaObj.children.length >= 3){
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
        
        tdRigaSup.colSpan = 5
        tdCentrTotale.colSpan = 4
        tdRigaInf.colSpan = 5
        tdCentrPrezzo.classList.add("importo")
        
        let somma = 0
        for (let i = 1; i < tabellaObj.children.length; i++) {
            somma = somma + Number(tabellaObj.children[i].children[4])
        }

        tdCentrTotale.innerText("TOTALE")
        tdCentrPrezzo.innerText(somma, " €")
    }
}