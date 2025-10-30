function aggiungiRiga() {
    let nome = prompt("Inserisci il nome dello studente:");
    let media = prompt("Inserisci la media dei voti:");
  
    if (nome && media) {
      let tabella = document.getElementById("tabellaStudenti");
      let nuovaRiga = tabella.insertRow(-1); 
      
  
      let cellaNome = nuovaRiga.insertCell(0);
      let cellaMedia = nuovaRiga.insertCell(1);
  
      cellaNome.innerText = nome;
      cellaMedia.innerText = media;
    } else {
      alert("Inserisci entrambi i campi!");
    }
  }
  
  function coloraRighe() {
    let righe = document.querySelectorAll("#tabellaStudenti tr");
    for (let i = 1; i < righe.length; i++) { 
      if (i % 2 === 0) {
        righe[i].style.backgroundColor = "blue";
        righe[i].style.color = "white";
      } else {
        righe[i].style.backgroundColor = "red";
        righe[i].style.color = "white";
      }
    }
  }
  