function salva() {
    console.log("salva");
    let cognome = document.getElementById("cognome");
    let nome = document.getElementById("nome");
    let mese = document.getElementById("mese");
    let importo = document.getElementById("importo");
    let dipartimento = document.getElementById("dipartimento");
    let tabella = document.getElementById("paghe");

    if (cognome.value !== "" && nome.value !== "" && mese.value !== "" && importo.value !== "" && dipartimento.value !== "") {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${dipartimento.value}</td>
            <td>${cognome.value}</td>
            <td>${nome.value}</td>
            <td>${mese.value}</td>
            <td class="importo">${parseFloat(importo.value)}</td>
        `;
        tabella.append(tr);

        cognome.value = "";
        nome.value = "";
        mese.value = "";
        importo.value = "";
        dipartimento.value = "";
    } else {
        alert("Inserisci tutti i campi!");
    }
}

function totale() {
    let tabella = document.getElementById("paghe");
    let importi = tabella.getElementsByClassName("importo");
    if (importi.length < 2) {
        alert("Servono almeno 2 paghe per calcolare il totale!");
        return;
    }
    let somma = 0;
    for (let i = 0; i < importi.length; i++) {
        somma += parseFloat(importi[i].innerText);
    }

    let rigaTotale = document.getElementById("rigaTotale");
    if (!rigaTotale) {
        rigaTotale = document.createElement("tr");
        rigaTotale.id = "rigaTotale";
        rigaTotale.innerHTML = `
            <td colspan="4">TOTALE</td>
            <td class="importo">${somma} €</td>
        `;
        tabella.append(rigaTotale);
    } else {
        rigaTotale.querySelector(".importo").innerText = somma + " €";
    }
}

function media() {
    let tabella = document.getElementById("paghe");
    let importi = tabella.getElementsByClassName("importo");
    if (importi.length < 2) {
        alert("Servono almeno 2 paghe per calcolare la media!");
        return;
    }
    let somma = 0;
    for (let i = 0; i < importi.length; i++) {
        somma += parseFloat(importi[i].innerText);
    }
    let media = somma / importi.length;

    let rigaMedia = document.getElementById("rigaMedia");
    if (!rigaMedia) {
        rigaMedia = document.createElement("tr");
        rigaMedia.id = "rigaMedia";
        rigaMedia.innerHTML = `
            <td colspan="4">MEDIA</td>
            <td class="importo">${media.toFixed(2)} €</td>
        `;
        tabella.append(rigaMedia);
    } else {
        rigaMedia.querySelector(".importo").innerText = media.toFixed(2) + " €";
    }
}
