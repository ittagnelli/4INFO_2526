function salva() {
    console.log("salva");
    let cognome = document.getElementById("cognome");
    let nome = document.getElementById("nome");
    let indirizzo = document.getElementById("indirizzo");
    let telefono = document.getElementById("telefono");
    let tabella = document.getElementById("tabella");

    if (cognome.value !== "" && nome.value !== "" && indirizzo.value !== "" && telefono.value !== "") {
        console.log("procedi");
        const tr = document.createElement("tr");
        const tdcognome = document.createElement("td");
        const tdnome = document.createElement("td");
        const tdindirizzo = document.createElement("td");
        const tdtelefono = document.createElement("td");
        const tdrimuovi = document.createElement("td");
        const buttonRimuovi = document.createElement("button");

        buttonRimuovi.innerText = "Rimuovi";
        buttonRimuovi.addEventListener('click', rimuovi);

        tdcognome.innerText = cognome.value;
        tdnome.innerText = nome.value;
        tdindirizzo.innerText = indirizzo.value;
        tdtelefono.innerText = telefono.value;
        tdrimuovi.append(buttonRimuovi);

        tr.append(tdcognome);
        tr.append(tdnome);
        tr.append(tdindirizzo);
        tr.append(tdtelefono);
        tr.append(tdrimuovi);

        tabella.append(tr);

        cognome.value = "";
        nome.value = "";
        indirizzo.value = "";
        telefono.value = "";
    } else {
        alert("Inserisci tutti i campi");
    }
}

function rimuovi(event) {
    const button = event.target;
    button.closest('tr').remove();
    console.log('Riga rimossa');
}

function cerca() {
    console.log("cerca");
    let cognomeForm = document.getElementById("cognome").value;
    let telefonoForm = document.getElementById("telefono").value;

    const tabella = document.getElementById('tabella');
    const linee = tabella.getElementsByTagName('tr');

    for (let i = 0; i < linee.length; i++) {
        const celle = linee[i].children;
        if (celle.length < 4) continue;

        const tdcognome = celle[0].innerText;
        const tdtelefono = celle[3].innerText;

        if (tdcognome === cognomeForm || tdtelefono === telefonoForm) {
            console.log("Linea trovata:", linee[i]);

            document.getElementById("cognome").value = celle[0].innerText;
            document.getElementById("nome").value = celle[1].innerText;
            document.getElementById("indirizzo").value = celle[2].innerText;
            document.getElementById("telefono").value = celle[3].innerText;
            return;
        }
    }
    console.log("Utente non presente");
}
