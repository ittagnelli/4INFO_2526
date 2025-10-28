let click = 0;

function aggiungi() {
    let tabella = document.getElementById("tabella");
    let last_tr = document.getElementById("ultimo_elemento")
    let dipartimento = document.getElementById("dipartimento");
    let cognome = document.getElementById("cognome");
    let nome = document.getElementById("nome");
    let mese = document.getElementById("mese");
    let importo = document.getElementById("importo");

    if (dipartimento.value == "" || cognome.value == "" || nome.value == "" || importo.value == "") {
        alert("Compilare tutti i campi!!!");
    }
    else {

        let tr = document.createElement("tr");

        let td_dipartimento = document.createElement("td");
        td_dipartimento.innerText = dipartimento.value;

        let td_cognome = document.createElement("td");
        td_cognome.innerText = cognome.value;

        let td_nome = document.createElement("td");
        td_nome.innerText = nome.value;

        let td_mese = document.createElement("td");
        td_mese.innerText = mese.value;

        let td_importo = document.createElement("td");
        td_importo.innerText = importo.value + " €";
        td_importo.classList.add("importo");

        tr.append(td_dipartimento, td_cognome, td_nome, td_mese, td_importo);
        last_tr.after(last_tr, tr)

        dipartimento.value = "";
        cognome.value = "";
        nome.value = "";
        mese.value = "";
        importo.value = "";
    }


}

function sommatoria() {
    let somma = 0;
    let tabella = document.getElementById("tabella");
    let lista_tr = tabella.querySelectorAll("tr");

    if (click == 0) {

        for (i = 2; i < lista_tr.length; i++) {
            let lista_td = lista_tr[i].querySelectorAll("td");
            let importo_stringa = lista_td[4].innerText;
            importo_stringa = importo_stringa.replace(" €", "");
            let importo = parseFloat(importo_stringa);
            somma += importo;

        }

        let tr_colspan1 = document.createElement("tr");
        let tr_totale = document.createElement("tr");
        let tr_colspan2 = document.createElement("tr");

        let td_colspan1 = document.createElement("td");
        let riga1 = document.createElement("hr")
        td_colspan1.colSpan = 5;

        td_colspan1.append(riga1);
        tr_colspan1.append(td_colspan1);
        tabella.append(tr_colspan1);

        let td_totale = document.createElement("td");
        let td_importo_totale = document.createElement("td");
        td_totale.colSpan = 4;
        td_importo_totale.innerText = somma + " €";
        td_importo_totale.classList.add("importo");
        td_totale.innerText = "TOTALE";

        tr_totale.append(td_totale, td_importo_totale);
        tabella.append(tr_totale);

        let td_colspan2 = document.createElement("td");
        let riga2 = document.createElement("hr");
        td_colspan2.colSpan = 5;

        td_colspan2.append(riga2);
        tr_colspan2.append(td_colspan2);
        tabella.append(tr_colspan2);

    }
    else {
        for (i = 2; i < lista_tr.length; i++) {
            if (lista_tr[i] == tr_colspan1) {
                lista_tr[i].remove();
            }
            if (lista_tr[i] == tr_totale) {
                lista_tr[i].remove();
            }
            if (lista_tr[i] == tr_colspan2) {
                lista_tr[i].remove();
            }

        }
        let tr_colspan1 = document.createElement("tr");
        let tr_totale = document.createElement("tr");
        let tr_colspan2 = document.createElement("tr");


        for (i = 2; i < lista_tr.length; i++) {
            let lista_td = lista_tr[i].querySelectorAll("td");
            let importo_stringa = lista_td[4].innerText;
            importo_stringa = importo_stringa.replace(" €", "");
            let importo = parseFloat(importo_stringa);
            somma += importo;

        }


        let td_colspan1 = document.createElement("td");
        let riga1 = document.createElement("hr")
        td_colspan1.colSpan = 5;

        td_colspan1.append(riga1);
        tr_colspan1.append(td_colspan1);
        tabella.append(tr_colspan1);

        let td_totale = document.createElement("td");
        let td_importo_totale = document.createElement("td");
        td_totale.colSpan = 4;
        td_importo_totale.innerText = somma + " €"
        td_importo_totale.classList.add("importo");
        td_totale.innerText = "TOTALE";

        tr_totale.append(td_totale, td_importo_totale);
        tabella.append(tr_totale);

        let td_colspan2 = document.createElement("td");
        let riga2 = document.createElement("hr");
        td_colspan2.colSpan = 5;

        td_colspan2.append(riga2);
        tr_colspan2.append(td_colspan2);
        tabella.append(tr_colspan2);



    }
    click += 1;



}

function media(){
    somma = 0;
    divisore = 0;
    let media = 0
    let tabella = document.getElementById("tabella");
    let lista_tr = tabella.querySelectorAll("tr");

    for (i = 2; i < lista_tr.length; i++) {
        let lista_td = lista_tr[i].querySelectorAll("td");
        let importo_stringa = lista_td[4].innerText;
        importo_stringa = importo_stringa.replace(" €", "");
        let importo = parseFloat(importo_stringa);
        somma += importo;

    }
    for(i=2; i <lista_tr.length -3; i++){
        divisore +=1
    }
    media = somma/divisore

    let tr_media = document.createElement("tr");
    let tr_colspan3 = document.createElement("tr");
    let tr_colspan4 = document.createElement("tr");

    let td_colspan3 = document.createElement("td");
    let riga3 = document.createElement("hr")
    td_colspan3.colSpan = 5;

    td_colspan3.append(riga3);
    tr_colspan3.append(td_colspan3);
    tabella.append(tr_colspan3);

    let td_media = document.createElement("td");
    let td_importo_media = document.createElement("td");
    td_importo_media.innerText = media + " €";
    td_importo_media.classList.add("importo");
    td_media.colSpan = 4;
    td_media.innerText = "MEDIA";

    tr_media.append(td_media, td_importo_media);
    tabella.append(tr_media);

    let td_colspan4 = document.createElement("td");
    let riga4 = document.createElement("hr");
    td_colspan4.colSpan = 5;

    td_colspan4.append(riga4);
    tr_colspan4.append(td_colspan4);
    tabella.append(tr_colspan4);


}