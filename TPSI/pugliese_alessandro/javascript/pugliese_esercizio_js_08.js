document.addEventListener("DOMContentLoaded", () => {
    const campoTesto = document.getElementById("testo");
    const livello = document.getElementById("livello");
    const lista = document.getElementById("lista");
    const addBtn = document.getElementById("addBtn");

    addBtn.addEventListener("click", aggiungiVoce);

    function aggiungiVoce() {
        if (campoTesto.value.trim() === "") {
            alert("Inserisci un testo prima!");
            return;
        }

        const tr = document.createElement("tr");
        const tdTesto = document.createElement("td");
        const tdLivello = document.createElement("td");
        const tdSegna = document.createElement("td");
        const tdCanc = document.createElement("td");

        tdTesto.textContent = campoTesto.value;

        let simbolo = "";
        let colore = "";

        switch (livello.value) {
            case "bassa":
                simbolo = "🔻";
                colore = "red";
                break;
            case "media":
                simbolo = "➡️";
                colore = "orange";
                break;
            case "alta":
                simbolo = "🔺";
                colore = "green";
                break;
        }

        tdLivello.textContent = simbolo;
        tdLivello.style.color = colore;

        const btnSegna = document.createElement("button");
        btnSegna.textContent = "Flag";
        btnSegna.addEventListener("click", segna);

        const btnCanc = document.createElement("button");
        btnCanc.textContent = "Rimuovi";
        btnCanc.addEventListener("click", cancella);

        tdSegna.appendChild(btnSegna);
        tdCanc.appendChild(btnCanc);

        tr.append(tdTesto, tdLivello, tdSegna, tdCanc);
        lista.appendChild(tr);

        campoTesto.value = "";
    }

    function segna(e) {
        const riga = e.target.closest("tr");
        const testo = riga.children[0];
        if (testo.style.textDecoration === "line-through") {
            testo.style.textDecoration = "none";
            e.target.style.backgroundColor = "";
        } else {
            testo.style.textDecoration = "line-through";
            e.target.style.backgroundColor = "lightgreen";
        }
    }

    function cancella(e) {
        const riga = e.target.closest("tr");
        riga.remove();
    }
});
