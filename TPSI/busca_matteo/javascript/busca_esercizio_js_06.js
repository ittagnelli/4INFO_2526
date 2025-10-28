function Aggiungi_studente() {
    const Nome_str = document.getElementById("Nome").value; 
    const Media = document.getElementById("Media").value; 
    const tabella = document.getElementById("tabella");
    const td_n = document.createElement("td");
    const td_m = document.createElement("td");
    const linea= document.createElement("tr");

    td_n.innerText = Nome_str; 
    td_m.innerText = Media;

    linea.append(td_n);
    linea.append(td_m);
    tabella.append(linea);
}

function cambia_colore() {
    const tabella = document.getElementById("tabella");
    const linee = tabella.children;

    for (let i = 0; i < linee.length; i++) {
        if( i % 2 == 0){
            linee[i].style.backgroundColor = "blue";
        }
        else{
            linee[i].style.backgroundColor = "red";
        }        
    }
  }
  function grassetto() {
    const tabella = document.getElementById("tabella");
    const linee = tabella.children;
        for(var i = 0; i < linee.length; i++) { 
           linee[i].style.fontweight = 'grassetto'
        }
}
