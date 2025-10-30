console.log("inizio")

let somma_importo = 0;

let counterTot = 0;

let counterMed = 0;

let righeAggiunte = 0;

function salva() {
    console.log("salva");
    let dipartimento = document.getElementById("dipartimento");
    let cognome = document.getElementById("cognome");
    let nome = document.getElementById("nome");
    let mese = document.getElementById("mese");
    let importo = document.getElementById("importo");
    let tabella = document.getElementById("paghe");


    console.log(dipartimento.value)
    console.log(cognome.value)
    console.log(nome.value)
    console.log(mese.value)
    console.log(importo.value)
    
    if (dipartimento.value != "" &&
        cognome.value != "" &&
        nome.value != "" &&
        mese.value != "" &&
        importo.value != ""
    ){
        console.log("procedi");
        const tr = document.createElement("tr");
        const tddipartimento = document.createElement("td");
        const tdcognome = document.createElement("td");
        const tdnome = document.createElement("td");
        const tdmese = document.createElement("td");
        const tdimporto = document.createElement("td");
        console.log("const");

        tddipartimento.innerText = dipartimento.value;
        tdcognome.innerText = cognome.value;
        tdnome.innerText = nome.value;
        tdmese.innerText = mese.value;
        tdimporto.innerText = importo.value;

        tr.append(tddipartimento, tdcognome, tdnome, tdmese, tdimporto);
        console.log("append");

        tabella.append(tr);
        console.log("tab");

        // dipartimento.value = "";
        // cognome.value = "";
        // nome.value = "";
        // mese.value = "";
        // importo.value = "";

        const numeroRighe = tabella.getElementsByTagName("tr").length;
        const righeBase = 2;
        righeAggiunte = numeroRighe - righeBase;

        console.log("Righe aggiunte:", righeAggiunte);

        somma_importo += Number(importo.value);
        console.log("Somma attuale:", somma_importo);

    }
    else{ let dipartimento = document.getElementById("dipartimento");
        alert("inserisci tutti i campi")
    }

}


function totale() {
    
    counterTot += 1;
    console.log("counter totale:", counterTot);

    let totaleNascosto = document.getElementsByClassName("totale-nascosto");

    if (counterTot == 1){
        for (let el of totaleNascosto) {
            el.style.visibility = "visible";
        }
    }
    
    let tdTotale = document.querySelector(".importo");
    if (tdTotale) {
        tdTotale.innerHTML = somma_importo.toFixed(2) + " €";
    }
}


function media() {
    let mediaNascosta = document.getElementsByClassName("media-nascosta");
    for (let el of mediaNascosta) {
        el.style.visibility = "visible";
    }

    let tdMedia = document.querySelector(".media");
    if (tdMedia) {
        if (righeAggiunte > 0) {
            let valoremedia = somma_importo / righeAggiunte;
            tdMedia.innerHTML = valoremedia.toFixed(2) + " €";
        } 
    }
}

