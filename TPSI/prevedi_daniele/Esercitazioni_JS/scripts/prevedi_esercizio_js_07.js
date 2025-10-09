document.addEventListener("DOMContentLoaded", init)

function init(){
    let buttonCerca = document.getElementById("cerca")
    let buttonSalva = document.getElementById("salva")
    let buttonAggiorna = document.getElementById("aggiorna")
    buttonCerca.addEventListener("click", cercaHandler)
    buttonSalva.addEventListener("click", salvaHandler)
    buttonAggiorna.addEventListener("click", aggiornaHandler)
}

function cercaHandler(){
    console.log("Cerca handler")
    console.log(getValue("cognome"))
    console.log(getValue("nome"))
    console.log(getValue("indirizzo"))
    console.log(getValue("telefono"))
}

function salvaHandler(){
    console.log("Salva handler")
}

function aggiornaHandler(){
    console.log("Aggiorna handler")
}

function getValue(id){
    return document.getElementById(id).value
}