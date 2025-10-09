function aggiungiVoto() {
    let nome = document.getElementById("nome").value;
    let media = document.getElementById("media").value;
    let tabella = document.getElementById("tabella");
    let linea = document.createElement('tr');
    let colnome = document.createElement('td');
    let colmedia = document.createElement('td');
    colnome.innerText = nome;
    colmedia.innerText = media; 
    linea.append(colnome);
    linea.append(colmedia);
    tabella.append(linea);
}

function coloraRighe() {
    let righe = document.querySelectorAll("#tabella tr");
    for (let i = 1; i < righe.length; i++) {
        if (i % 2 === 0) {
            righe[i].style.backgroundColor = "blue";
        } else {
            righe[i].style.backgroundColor = "red";
        }
    }
}

function grassetto() {
    let tabella = document.getElementById("tabella");
    if (tabella.style.fontWeight === "bold") {
        tabella.style.fontWeight = "normal";
    } else {
        tabella.style.fontWeight = "bold";
    }
}

function blu() {
    let tabella = document.getElementById("tabella");
    if (tabella.style.color === "blue") {
        tabella.style.color = "black";
    } else {
        tabella.style.color = "blue";
    }
}

function bordo() {
    let tabella = document.getElementById("tabella");
    if (tabella.style.border === "2px solid black") {
        tabella.style.border = "none";
    } else {
        tabella.style.border = "2px solid black";
    }
}
