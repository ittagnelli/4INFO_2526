function aggiungiStudente() {
  let nome = document.getElementById("nome").value;
  let media = document.getElementById("media").value;
  if (nome && media) {
    let tabella = document
      .getElementById("tabellaStudenti")
      .getElementsByTagName("tbody")[0];
    let riga = tabella.insertRow();
    let cellaNome = riga.insertCell(0);
    let cellaMedia = riga.insertCell(1);
    cellaNome.innerText = nome;
    cellaMedia.innerText = media;
    document.getElementById("nome").value = "";
    document.getElementById("media").value = "";
  } else {
    alert("Inserisci nome e media.");
  }
}

const righe = document
  .getElementById("tabellaStudenti")
  .getElementsByTagName("tbody")[0].rows;

function coloraRigheRosso() {
  for (let i = 0; i < righe.length; i++) {
    righe[i].style.color = "#fff";
    if (i % 2 === 0) {
      righe[i].style.backgroundColor = "blue";
    } else {
      righe[i].style.backgroundColor = "red";
    }
  }
}

function coloraRigheBlu() {
  for (let i = 0; i < righe.length; i++) {
    righe[i].style.color = "#fff";
    righe[i].style.backgroundColor = "blue";
  }
}

function Grassetto() {
    for (let i = 0; i < righe.length; i++) {
        righe[i].classList.add("Grassetto");
    }
}

function coloraRighe(){
    let tabella = document.getElementById("tabellaStudenti");
    tabella.classList.add("Bordo");
}
