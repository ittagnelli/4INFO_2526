window.onload = function () {
    const icons = document.querySelectorAll(".material-icons.icon");
    const addIcon = icons[0];
    const totalIcon = icons[1];
    const avgIcon = icons[2];
    const table = document.getElementById("paghe");

    addIcon.addEventListener("click", aggiungiPaga);
    totalIcon.addEventListener("click", mostraTotale);
    avgIcon.addEventListener("click", mostraMedia);

    function aggiungiPaga() {
        const dip = document.getElementById("dipartimento").value.trim();
        const cog = document.getElementById("cognome").value.trim();
        const nom = document.getElementById("nome").value.trim();
        const mes = document.getElementById("mese").value;
        const imp = parseFloat(document.getElementById("importo").value.trim());

        if (!dip || !cog || !nom || !mes || isNaN(imp)) {
            alert("⚠️ Compila tutti i campi prima di aggiungere una paga!");
            return;
        }

        rimuoviRigheFinali();

        const newRow = table.insertRow(table.rows.length - 1);
        newRow.classList.add("new-row");
        newRow.innerHTML = `
            <td>${dip}</td>
            <td>${cog}</td>
            <td>${nom}</td>
            <td>${formattaMese(mes)}</td>
            <td class="importo">${imp.toFixed(2)} €</td>
            <td colspan="2">
                <span class="material-icons icon delete">delete</span>
            </td>
        `;

        newRow.querySelector(".delete").addEventListener("click", () => {
            newRow.style.opacity = "0";
            setTimeout(() => {
                newRow.remove();
                aggiornaTotaleEMedia();
            }, 200);
        });

        aggiornaTotaleEMedia();
        pulisciCampi();
    }

    function formattaMese(mese) {
        const data = new Date(mese);
        const opzioni = { month: "long", year: "numeric" };
        return data.toLocaleDateString("it-IT", opzioni).replace(/^\w/, c => c.toUpperCase());
    }

    function rimuoviRigheFinali() {
        let righe = Array.from(table.rows);
        while (righe.length > 0 && (righe[righe.length - 1].cells[0].textContent === "TOTALE" || righe[righe.length - 1].cells[0].textContent === "MEDIA" || righe[righe.length - 1].cells.length === 1)) {
            table.deleteRow(righe.length - 1);
            righe.pop();
        }
    }

    function aggiornaTotaleEMedia() {
        rimuoviRigheFinali();
        const importi = Array.from(document.querySelectorAll(".importo")).map(el => parseFloat(el.textContent)).filter(v => !isNaN(v));
        const somma = importi.reduce((a, b) => a + b, 0);
        const media = importi.length ? somma / importi.length : 0;

        // separatore
        table.insertRow().innerHTML = `<td colspan="7"><hr></td>`;
        // totale
        table.insertRow().innerHTML = `<td colspan="4">TOTALE</td><td class="importo">${somma.toFixed(2)} €</td><td colspan="2"></td>`;
        // separatore
        table.insertRow().innerHTML = `<td colspan="7"><hr></td>`;
        // media
        table.insertRow().innerHTML = `<td colspan="4">MEDIA</td><td class="importo">${media.toFixed(2)} €</td><td colspan="2"></td>`;
        // separatore finale
        table.insertRow().innerHTML = `<td colspan="7"><hr></td>`;
    }

    function mostraTotale() {
        const importi = Array.from(document.querySelectorAll(".importo")).map(el => parseFloat(el.textContent)).filter(v => !isNaN(v));
        const somma = importi.reduce((a, b) => a + b, 0);
        alert(`💰 Totale paghe: ${somma.toFixed(2)} €`);
    }

    function mostraMedia() {
        const importi = Array.from(document.querySelectorAll(".importo")).map(el => parseFloat(el.textContent)).filter(v => !isNaN(v));
        if (importi.length === 0) return alert("❌ Nessuna paga presente!");
        const media = importi.reduce((a, b) => a + b, 0) / importi.length;
        alert(`📊 Media paghe: ${media.toFixed(2)} €`);
    }

    function pulisciCampi() {
        document.getElementById("dipartimento").value = "";
        document.getElementById("cognome").value = "";
        document.getElementById("nome").value = "";
        document.getElementById("mese").value = "";
        document.getElementById("importo").value = "";
    }
};
