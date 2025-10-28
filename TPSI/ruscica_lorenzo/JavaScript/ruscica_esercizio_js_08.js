function salva() {
    console.log("salva");
    let toDo = document.getElementById("todo");
    const priorita = document.getElementById("priorità").value;



    console.log(toDo.value)
    
    if (toDo.value != "" 
    ){
        console.log("procedi");
        const tr = document.createElement("tr");
        const tdtodo = document.createElement("td");
        const tdPriorita = document.createElement("td");
        const tdflag = document.createElement("td");
        const tdrimuovi = document.createElement("td");


        tdtodo.innerText = toDo.value;

        let freccia = "";
        let colore = "";
        if (priorita === "bassa") {
            freccia = "🔻";
            colore = "red";
        } else if (priorita === "media") {
            freccia = "➡️";
            colore = "orange";
        } else if (priorita === "alta") {
            freccia = "🔺";
            colore = "green";
        }
        tdPriorita.innerText = freccia;
        tdPriorita.style.color = colore;
        
       
        const buttonFlag = document.createElement("button");
        buttonFlag.innerText = "flag"
        buttonFlag.addEventListener('click', flag);

        const buttonRimuovi = document.createElement("button");
        buttonRimuovi.innerText = "Rimuovi"
        buttonRimuovi.addEventListener('click', rimuovi);
        
        
        tdtodo.innerText = toDo.value;
        tdflag.append(buttonFlag)
        tdrimuovi.append(buttonRimuovi);

        tr.append(tdtodo);
        tr.append(tdPriorita);
        tr.append(tdflag);
        tr.append(tdrimuovi);

        tabella.append(tr);

        tdtodo.value = "";
    }
    else{
        alert("inserisci tutti i campi")
    }
}

function flag(event) {
    const button = event.target;
    const riga = button.parentNode.parentNode;
    const tdtodo = riga.children[0]; 

    if (tdtodo.style.textDecoration === "line-through") {
        tdtodo.style.textDecoration = "none";
        button.style.backgroundColor = ""; 
    } else {
        tdtodo.style.textDecoration = "line-through";
        button.style.backgroundColor = "lightgreen"; 
    }

}


function rimuovi(event) {
    const button = event.target;      
    const riga = button.parentNode.parentNode;  
    riga.remove();                   
}