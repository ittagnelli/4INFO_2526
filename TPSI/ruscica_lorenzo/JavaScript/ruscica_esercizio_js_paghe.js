function salva() {
    console.log("salva");
    let cognome = document.getElementById("cognome");
    let nome = document.getElementById("nome");
    let mese = document.getElementById("mese");
    let importo = document.getElementById("importo");
    let dipartimento = document.getElementById("dipartimento");
    let tabella = document.getElementById("paghe");
    console.log(cognome)
    console.log(nome)
    console.log(mese)
    console.log(importo)
    console.log(dipartimento)

    if (cognome.value !== "" && nome.value !== "" && mese.value !== "" && importo.value !== "" && dipartimento.value !== "") {
        console.log("procedi");
        const tr = document.createElement("tr");
        const tdcognome = document.createElement("td");
        const tdnome = document.createElement("td");
        const tdmese = document.createElement("td");    
        const tdimporto = document.createElement("td");
        const tddipartimento = document.createElement("td");

        tdcognome.innerText = cognome.value;
        tdnome.innerText = nome.value;
        tdmese.innerText = mese.value;
        tdimporto.innerText = importo.value;
        tddipartimento.innerText = dipartimento.value;

        tr.append(tddipartimento);
        tr.append(tdcognome);
        tr.append(tdnome);
        tr.append(tdmese);
        tr.append(tdimporto);

        tabella.append(tr);

        // cognome.value = "";
        // nome.value = "";
        // mese.value = "";
        // importo.value = "";
        // dipartimento.value = "";
        const righe = tabella.getElementsByTagName("tr").length;
        const righeiniziali = 2;
        const righenuove = righe - righeiniziali;   
        console.log("Righe aggiunte", righenuove)
    } else {
        alert("Inserisci tutti i campi");
    }   
}

function totale() {

}
