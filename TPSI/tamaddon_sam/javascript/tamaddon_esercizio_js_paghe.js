

function paga(){
    let dipartimentoObj = document.getElementById("dipartimento")
    let dipartimentoValue = dipartimentoObj.value
    let cognomeObj = document.getElementById("cognome")
    let cognomeValue = cognomeObj.value
    let nomeObj = document.getElementById("nome")
    let nomeValue = nomeObj.value
    let meseObj = document.getElementById("mese")
    let meseValue = meseObj.value
    let importoObj = document.getElementById("importo")
    let importoValue = importoObj.value
    let tabellaObj = document.getElementById("tabella")

   /*  console.log(dipartimentoValue,cognomeValue,nomeValue,meseValue,importoValue) */
    if(dipartimentoValue != "" && cognomeValue != "" && nomeValue != "" && meseValue != "" && importoValue != ""){
        
        const linea = document.createElement("tr")
        const tddipartimento = document.createElement("td")
        const tdCognome = document.createElement("td")
        const tdNome = document.createElement("td")
        const tdmese = document.createElement("td")
        const tdimporto = document.createElement("td")
        
        tddipartimento.innerText = dipartimentoValue
        tdCognome.innerText = cognomeValue
        tdNome.innerText = nomeValue
        tdmese.innerText = meseValue
        tdimporto.innerText = importoValue
        linea.append(tddipartimento)
        linea.append(tdCognome)
        linea.append(tdNome)
        linea.append(tdmese)
        linea.append(tdimporto)
        tabellaObj.append(linea)

    }
else{
    alert("completa tutti i campi")
} 
    
}

function somma() {
    let tabella = document.getElementById("tabella");
    let righe = tabella.children;
    if (righe.length <= 1) {
        alert("Niente da sommare!");
        return;
    }
    let totale = 0;
    for (let i = 1; i < righe.length; i++) {
        let riga = righe[i];
        let importo = riga.children[4].innerText;
        let numero = parseFloat(importo);
        totale = totale + numero;
    }
    
    alert("Totale: " + totale);
}
function media() {
    let tabella = document.getElementById("tabella");
    let righe = tabella.children;
    if (righe.length <= 1) {
        alert("Niente da mediare!");
        return;
    }
    let totale = 0;
    let count = 0;
    for (let i = 1; i < righe.length; i++) {
        let riga = righe[i];
        let importo = riga.children[4].innerText;
        let numero = parseFloat(importo)
        count = count + count
        totale = (totale + numero)/count;
    }
    
    alert("Totale: " + totale);
}

