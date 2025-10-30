const btnAdd = document.getElementById("add");
const btnTotal = document.getElementById("total");
const btnAvg = document.getElementById("avg");
const table = document.getElementById("paghe");

btnAdd.addEventListener("click", () => {
    const dip = document.getElementById("dipartimento").value.trim();
    const cog = document.getElementById("cognome").value.trim();
    const nom = document.getElementById("nome").value.trim();
    const mes = document.getElementById("mese").value;
    const imp = document.getElementById("importo").value.trim();

    if (!dip || !cog || !nom || !mes || !imp) {
        alert("⚠️ Inserisci tutti i campi prima di aggiungere una paga!");
        return;
    }

    const row = table.insertRow(-1);
    row.insertCell(0).textContent = dip;
    row.insertCell(1).textContent = cog;
    row.insertCell(2).textContent = nom;
    row.insertCell(3).textContent = mes;
    row.insertCell(4).innerHTML = `<span class="importo">${imp} €</span>`;
});

btnTotal.addEventListener("click", () => {
    const importi = [...document.querySelectorAll(".importo")].map(el => parseFloat(el.textContent));
    if (importi.length < 2) {
        alert("Servono almeno 2 paghe per calcolare il totale!");
        return;
    }

    const totale = importi.reduce((a, b) => a + b, 0);
    let totRow = document.getElementById("totaleRow");
    if (!totRow) {
        totRow = table.insertRow(-1);
        totRow.id = "totaleRow";
        totRow.insertCell(0).colSpan = 4;
        totRow.cells[0].textContent = "TOTALE";
        totRow.insertCell(1).className = "importo";
    }
    totRow.cells[1].textContent = totale.toFixed(2) + " €";
});

btnAvg.addEventListener("click", () => {
    const importi = [...document.querySelectorAll(".importo")].map(el => parseFloat(el.textContent));
    if (importi.length < 2) {
        alert("Servono almeno 2 paghe per calcolare la media!");
        return;
    }

    const media = importi.reduce((a, b) => a + b, 0) / importi.length;
    let mediaRow = document.getElementById("mediaRow");
    if (!mediaRow) {
        mediaRow = table.insertRow(-1);
        mediaRow.id = "mediaRow";
        mediaRow.insertCell(0).colSpan = 4;
        mediaRow.cells[0].textContent = "MEDIA";
        mediaRow.insertCell(1).className = "importo";
    }
    mediaRow.cells[1].textContent = media.toFixed(2) + " €";
});
