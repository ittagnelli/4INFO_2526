console.log("funziona")

let sommaimporto = 0;
let cTot = 0;
let cMedia = 0;
let righeAggiunte = 0;

function salva() {
    console.log("funziona_salva");
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

        tr.append(tddipartimento);
        tr.append(tdcognome);
        tr.append(tdnome);
        tr.append(tdmese);
        tr.append(tdimporto);
        tabella.append(tr);

        const numeroRighe = tabella.getElementsByTagName("tr").length;
        const righeBase = 2;
        righeAggiunte = numeroRighe - righeBase;

        console.log("Righe aggiunte:", righeAggiunte);

        sommaimporto += Number(importo.value);
        console.log("Somma attuale:", sommaimporto);
        
        dipartimento.value = "";
        cognome.value = "";
        nome.value = "";
        mese.value = "";
        importo.value = "";

    }
    else{ let dipartimento = document.getElementById("dipartimento");
        alert("inserisci tutti i campi")
    }

}


function totale() {
    console.log("funziona_tot");
    
    cTot += 1;
    console.log("counter totale:", cTot);

    let totNascosto = document.getElementsByClassName("tothidden");

    if (cTot == 1){
        for (let el of totNascosto) {
            el.style.visibility = "visible";
        }
    }
    
    let tdTotale = document.querySelector(".importo");
    if (tdTotale) {
        tdTotale.innerHTML = sommaimporto.toFixed(2) + " €";
    }
}


function media() {
    console.log("funziona_media");

    let mediaNascosta = document.getElementsByClassName("mediahidden");
    for (let el of mediaNascosta) {
        el.style.visibility = "visible";
    }

    let tdMedia = document.querySelector(".media");
    if (tdMedia) {
        if (righeAggiunte > 0) {
            let valoremedia = sommaimporto / righeAggiunte;
            tdMedia.innerHTML = valoremedia.toFixed(2) + " €";
        } 
    }
}
