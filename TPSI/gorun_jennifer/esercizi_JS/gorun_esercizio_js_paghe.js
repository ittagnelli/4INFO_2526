//inserire una nuova paga compilando tutti i campi del form


function add(){
   console.log("add")
   let dipartimentoOB = document.getElementById("dipartimento").value;
   let cognomeOB = document.getElementById("cognome").value;
   let nomeOB = document.getElementById("nome").value;
   let meseOB = document.getElementById("mese").value;
   let importoOB = document.getElementById("importo").value;
   let paghe = document.getElementById("paghe")


   //controlla campi mancanti
   if(dipartimentoOB != "" && cognomeOB != "" && nomeOB != "" && meseOB != "" && importoOB ){
       const tr = document.createElement("tr")
       const dipartimentotd = document.createElement("td")
       const cognometd = document.createElement("td")
       const nometd = document.createElement("td")
       const mesetd = document.createElement("td")
       const importotd = document.createElement("td")


       dipartimentotd.innerText = dipartimentoOB
       cognometd.innerText = cognomeOB
       nometd.innerText = nomeOB
       mesetd.innerText = meseOB
       importotd.innerText = importoOB


       paghe.append(tr)
       tr.append(dipartimentotd)
       tr.append(cognometd)
       tr.append(nometd)
       tr.append(mesetd)
       tr.append(importotd)      
   } else{
       alert("compilare tutti i campi")
   }
}


function somma(){
  
  
}
