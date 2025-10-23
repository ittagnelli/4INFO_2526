function aggiungi() {
    const table = document.getElementById("table");

    let activity = document.getElementById("attivita").value; 
    let select = document.getElementById("priority").value;

    let tr = document.createElement("tr");

    if(activity != ""){
   let tdActivityName = document.createElement("td");
    tdActivityName.innerText = activity; 
    const cellaImportanza = document.createElement("td");
    const iconaImportanza = document.createElement("i");

    switch (select) {
        case "media":
            iconaImportanza.className = "fas fa-arrow-right"; 
            iconaImportanza.style.color = "yellow";
            break;
        case "bassa":
            iconaImportanza.className = "fas fa-arrow-down"; 
            iconaImportanza.style.color = "green";
            break;
        case "alta":
            iconaImportanza.className = "fas fa-arrow-up"; 
            iconaImportanza.style.color = "red";
            break;
    }

    cellaImportanza.appendChild(iconaImportanza);

    const cellaCompletato = document.createElement("td");
    const iconaCompletato = document.createElement("i");
    iconaCompletato.className = "fas fa-check";
    iconaCompletato.style.cursor = "pointer"; 
    icon = true

    iconaCompletato.addEventListener("click", function(){
        tdActivityName.classList.toggle("sbarrato");
        console.log(tdActivityName.classList);
        iconaCompletato.classList.toggle("blu");
    });

    cellaCompletato.appendChild(iconaCompletato);


    const cellaElimina = document.createElement("td");
    const iconaElimina = document.createElement("i");
    iconaElimina.className = "fas fa-trash"; 
    iconaElimina.style.cursor = "pointer";
    iconaElimina.addEventListener("click", function() {
        tr.remove(); 
    });
    cellaElimina.appendChild(iconaElimina);

    tr.append(tdActivityName, cellaImportanza, cellaCompletato, cellaElimina);

    table.appendChild(tr);

    document.getElementById("attivita").value = "";
}else{
    alert("Il campo attivita è vuoto")
}
}
