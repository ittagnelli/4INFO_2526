function salva() {
    let tbody = document.getElementById("tabella");
    let cognome = document.getElementById("cognome");
    let nome = document.getElementById("nome");
    let indirizzo = document.getElementById("indirizzo");
    let telefono = document.getElementById("telefono");
    let bottone = document.createElement("button");
    let tr = document.createElement("tr");
    let td_cognome = document.createElement("td");
    let td_nome = document.createElement("td");
    let td_indirizzo = document.createElement("td");
    let td_telefono = document.createElement("td");
    let td_bottone = document.createElement("td");
    bottone.innerText = "Rimuovi";
    td_cognome.innerText = cognome.value;
    td_nome.innerText = nome.value;
    td_indirizzo.innerText = indirizzo.value;
    td_telefono.innerText = telefono.value;
    bottone.addEventListener("click", function () {
        tr.remove()
    });
    td_bottone.append(bottone)
    tr.append(td_cognome, td_nome, td_indirizzo, td_telefono, td_bottone);
    tbody.append(tr);
    cognome.value = "";
    nome.value = "";
    indirizzo.value = "";
    telefono.value = "";
}

function cerca() {
    let tabella = document.getElementById("tabella");
    let lista_tr = tabella.querySelectorAll("tr");
    let lista_td;
    let cognome = document.getElementById("cognome")
    let nome = document.getElementById("nome");
    let indirizzo = document.getElementById("indirizzo");
    let telefono = document.getElementById("telefono");
    for (let i = 2; i < lista_tr.length; i++) {
        lista_td = lista_tr[i].querySelectorAll("td");
        if (cognome.value == lista_td[0].innerText || telefono.value == lista_td[3].innerText) {
            cognome.value = lista_td[0].innerText;
            nome.value = lista_td[1].innerText;
            indirizzo.value = lista_td[2].innerText;
            telefono.value = lista_td[3].innerText;
            lista_tr[i].remove();
        }
    }

}

