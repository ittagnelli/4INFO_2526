function aggiungi() {
    let nome = document.getElementById("nome").value;
    let media = document.getElementById("media").value;
    let tabella = document.getElementById("tabella");
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    td1.innerText = nome;
    td2.innerText = media;
    tr.append(td1, td2);
    tabella.append(tr);
}


function colora() {
    let tabella = document.getElementById("tabella");
        let rows = tabella.querySelectorAll("tr");
        for (let i = 0; i < rows.length; i++) {
            if (i % 2 === 0) {
                rows[i].style.backgroundColor = "blue";
            } else {
                rows[i].style.backgroundColor = "red";
            }
        }
    }