console.log("iniziamo")

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

        const iconaPriorità = document.createElement("i");
        if (priorita === "bassa") {
            iconaPriorità.className = "fas fa-arrow-down";
            iconaPriorità.style.color = "red";
        } else if (priorita === "media") {
            iconaPriorità.className = "fas fa-arrow-right"; 
            iconaPriorità.style.color = "orange";
        } else if (priorita === "alta") {
            iconaPriorità.className = "fas fa-arrow-up";
            iconaPriorità.style.color = "green";
        }

        tdPriorita.append(iconaPriorità);
        
       
        const buttonFlag = document.createElement("button");
        const iconaFlag = document.createElement("i");
        iconaFlag.className = "fas fa-flag";
        iconaFlag.style.color = "gray";
        buttonFlag.append(iconaFlag);
        buttonFlag.addEventListener('click', flag);

        const buttonRimuovi = document.createElement("button");
        const iconaRimuovi = document.createElement("i");
        iconaRimuovi.className = "fas fa-trash";
        iconaRimuovi.style.color = "gray";
        buttonRimuovi.append(iconaRimuovi);
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
    const button = event.currentTarget;
    const riga = button.parentNode.parentNode;
    const tdtodo = riga.children[0];

  
    const iconaFlag = button.querySelector("i");

    if (tdtodo.style.textDecoration === "line-through") {
        tdtodo.style.textDecoration = "none";
        iconaFlag.style.color = "gray";
    } else {
        tdtodo.style.textDecoration = "line-through";
        iconaFlag.style.color = "green";
    }
}


function rimuovi(event) {
    const button = event.currentTarget;      
    const riga = button.parentNode.parentNode;  
    riga.remove();                   
}
