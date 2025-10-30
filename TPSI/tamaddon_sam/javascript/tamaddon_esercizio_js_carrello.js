function aggiungi() {
    let prodotto = document.getElementById("prodoo").value;
    let quantita = document.getElementById("qty").value;
    let costo = document.getElementById("costo").value;

    if (prodotto == "" || quantita == "" || costo == "" || quantita < 1) {
        alert("Compila tutti i campi correttamente!");
        return;
    }

    let tabella = document.getElementById("carrello");
    let nuovaRiga = tabella.insertRow(tabella.rows.length - 2);

    let cellaProdotto = nuovaRiga.insertCell(0);
    let cellaQuantita = nuovaRiga.insertCell(1);
    let cellaCosto = nuovaRiga.insertCell(2);
    let cellaImporto = nuovaRiga.insertCell(3);
    let cellaRimuovi = nuovaRiga.insertCell(4);

    cellaProdotto.innerText = prodotto;

    let inputQuantita = document.createElement("input");
    inputQuantita.type = "number";
    inputQuantita.min = 1;
    inputQuantita.value = quantita;
    inputQuantita.onchange = function () {
        if (inputQuantita.value < 1) inputQuantita.value = 1;
        let nuovoImporto = inputQuantita.value * costo;
        cellaImporto.innerText = nuovoImporto.toFixed(2) + " €";
        aggiornaTotale();
    };
    cellaQuantita.appendChild(inputQuantita);

    cellaCosto.innerText = parseFloat(costo).toFixed(2) + " €";

    let importoTotale = quantita * costo;
    cellaImporto.innerText = importoTotale.toFixed(2) + " €";
    cellaImporto.className = "importo";

    let bottoneRimuovi = document.createElement("span");
    bottoneRimuovi.innerText = "🗑️";
    bottoneRimuovi.style.cursor = "pointer";
    bottoneRimuovi.onclick = function () {
        nuovaRiga.remove();
        aggiornaTotale();
    };
    cellaRimuovi.appendChild(bottoneRimuovi);

    aggiornaTotale();
}

function aggiornaTotale() {
    let importi = document.getElementsByClassName("importo");
    let somma = 0;
    for (let i = 0; i < importi.length; i++) {
        somma += parseFloat(importi[i].innerText);
    }

    let tabella = document.getElementById("carrello");
    let rigaTotale = tabella.rows[tabella.rows.length - 1];
    rigaTotale.cells[3].innerText = somma.toFixed(2) + " €";
}

function totale() {
    aggiornaTotale();
    alert("Totale carrello aggiornato!");
}