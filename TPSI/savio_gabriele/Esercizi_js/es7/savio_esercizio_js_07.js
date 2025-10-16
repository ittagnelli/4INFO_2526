function salva() {
  let cognome = document.getElementById("cognome").value;
  let nome = document.getElementById("nome").value;
  let indirizzo = document.getElementById("indirizzo").value;
  let telefono = document.getElementById("telefono").value;
  if (cognome && nome && indirizzo && telefono) {
    let tbody = document.getElementById("rubricaBody");
    let riga = tbody.insertRow();
    riga.insertCell(0).innerText = cognome;
    riga.insertCell(1).innerText = nome;
    riga.insertCell(2).innerText = indirizzo;
    riga.insertCell(3).innerText = telefono;
    let cellaRimuovi = riga.insertCell(4);
    let btnRimuovi = document.createElement("button");
    btnRimuovi.innerText = "Rimuovi";
    btnRimuovi.addEventListener("click", function () {
      tbody.removeChild(riga);
    });
    cellaRimuovi.appendChild(btnRimuovi);
    document.getElementById("cognome").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("indirizzo").value = "";
    document.getElementById("telefono").value = "";
  } else {
    alert("Inserisci tutti i campi.");
  }
}

function cerca() {
  let cognome = document.getElementById("cognome").value.toLowerCase();
  let nome = document.getElementById("nome").value.toLowerCase();
  let indirizzo = document.getElementById("indirizzo").value.toLowerCase();
  let telefono = document.getElementById("telefono").value.toLowerCase();
  let righe = document.getElementById("rubricaBody").rows;
  for (let i = 0; i < righe.length; i++) {
    let cells = righe[i].cells;
    let match = true;
    if (cognome && !cells[0].innerText.toLowerCase().includes(cognome))
      match = false;
    if (nome && !cells[1].innerText.toLowerCase().includes(nome)) match = false;
    if (indirizzo && !cells[2].innerText.toLowerCase().includes(indirizzo))
      match = false;
    if (telefono && !cells[3].innerText.toLowerCase().includes(telefono))
      match = false;
    righe[i].style.display = match ? "" : "none";
  }
}
function modifica() {
  let cognome = document.getElementById("cognome").value;
  let nome = document.getElementById("nome").value;
  let indirizzo = document.getElementById("indirizzo").value;
  let telefono = document.getElementById("telefono").value;
  if (cognome && nome && indirizzo && telefono) {
    let tbody = document.getElementById("rubricaBody");
    let righe = tbody.rows;
    for (let i = 0; i < righe.length; i++) {
      if (righe[i].style.display !== "none") {
        righe[i].cells[0].innerText = cognome;
        righe[i].cells[1].innerText = nome;
        righe[i].cells[2].innerText = indirizzo;
        righe[i].cells[3].innerText = telefono;
        break;
      }
    }
    document.getElementById("cognome").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("indirizzo").value = "";
    document.getElementById("telefono").value = "";
  } else {
    alert("Inserisci tutti i campi");
  }
}
