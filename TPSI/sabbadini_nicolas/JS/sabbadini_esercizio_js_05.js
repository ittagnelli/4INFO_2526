function add_studente() {
    const tabella  = document.getElementById("tabella"); 
    const nome_str = document.getElementById("nome").value; 
    const td1 = document.createElement("td"); 
    const media_str = document.getElementById("media").value;
    const td2 = document.createElement("td");
    const tr = document.createElement("tr");
    td1.innerText = nome_str; 
    tr.append(td1); 
    td2.innerText = media_str;
    tr.append(td2);
    tabella.append(tr);
  }

  function cambia_colore(){
    const tabella = document.getElementById("tabella");
    const tr = tabella.children;
    for(let i = 0; i < tr.length; i++) { 
        if(i % 2 == 0){
            tr[i].style.backgroundColor =  "blue";
        }
        else{
            tr[i].style.backgroundColor = "red";
        }

        
  
    }
  }