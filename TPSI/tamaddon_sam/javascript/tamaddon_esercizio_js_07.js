document.addEventListener("DOMContentLoaded", init)

function init(){
    let buttonCerca = document.getElementById("cerca")
    let buttonSalva = document.getElementById("salva")
    let buttonAggiorna = document.getElementById("aggiorna")
    buttonCerca.addEventListener("click", cercaHandler)
    buttonSalva.addEventListener("click", salvaHandler)
    buttonAggiorna.addEventListener("click", aggiornaHandler)
}
let isInsert = true // Se è true, sto immettendo dati nuovi; se è false, sto modificando dati esistenti. Variabile globale di stato
let idFoundLine = 0 // Id della linea da modificare dopo la ricerca

function cercaHandler(){
    console.log("Cerca handler")
    console.log(getValue("cognome"))
    console.log(getValue("nome"))
    console.log(getValue("indirizzo"))
    console.log(getValue("telefono"))
}

function salvaHandler(){
    console.log("Salva handler")
function salva(){
    let cognomeObj = document.getElementById("cognome")
    let cognomeValue = cognomeObj.value
    let nomeObj = document.getElementById("nome")
    let nomeValue = nomeObj.value
    let indirizzoObj = document.getElementById("indirizzo")
    let indirizzoValue = indirizzoObj.value
    let telefonoObj = document.getElementById("telefono")
    let telefonoValue = telefonoObj.value
    let tabellaObj = document.getElementById("tabella")

    if(cognomeValue != "" && nomeValue != "" && indirizzoValue != "" && telefonoValue != ""){
        if(isInsert == true){
            let id = new Date().getTime() // Assegno un id univoco (unix epoch) a ogni pulsante rimuovi uguale a quello di ogni riga

            const tr = document.createElement("tr")
            const tdCognome = document.createElement("td")
            const tdNome = document.createElement("td")
            const tdIndirizzo = document.createElement("td")
            const tdTelefono = document.createElement("td")
            const tdRimuovi = document.createElement("td")
            const buttonRimuovi = document.createElement("button")

            buttonRimuovi.innerText = "Rimuovi"
            buttonRimuovi.addEventListener("click", rimuovi)

            buttonRimuovi.id = id
            tr.id = id

            tdCognome.innerText = cognomeValue
            tdNome.innerText = nomeValue
            tdIndirizzo.innerText = indirizzoValue
            tdTelefono.innerText = telefonoValue
            tdRimuovi.colSpan = 2

            tdRimuovi.append(buttonRimuovi)
            tr.append(tdCognome)
            tr.append(tdNome)
            tr.append(tdIndirizzo)
            tr.append(tdTelefono)
            tr.append(tdRimuovi)
            tabellaObj.append(tr)

            cognomeObj.value = ""
            nomeObj.value = ""
            indirizzoObj.value = ""
            telefonoObj.value = ""    
        }
        else{
            // Funzione di aggiornamento della linea
            let linea = document.getElementById(idFoundLine)
            linea.children[0].innerText = cognomeValue
            linea.children[1].innerText = nomeValue
            linea.children[2].innerText = indirizzoValue
            linea.children[3].innerText = telefonoValue

            // Ripulisco i campi
            cognomeObj.value = ""
            nomeObj.value = ""
            indirizzoObj.value = ""
            telefonoObj.value = ""    

            // Permetto nuovamente di creare nuove linee resettando la variabile globale di stato
            isInsert = true
        }
    }
    else{
        alert("Compilare tutti i campi")
    }
}

function aggiornaHandler(){
    console.log("Aggiorna handler")
function rimuovi(el){ // el è l'oggetto su cui viene chiamata la funzione (in questo caso il pulsante)
    const idPulsante = el.srcElement.id
    let trRemove = document.getElementById(idPulsante)
    trRemove.remove()
}

function getValue(id){
    return document.getElementById(id).value
function cerca(){
    let cognomeForm = document.getElementById("cognome").value
    let telefonoForm = document.getElementById("telefono").value

    const tabella = document.getElementById("tabella")
    const linee = tabella.getElementsByTagName("tr")

    for (let i = 2; i < linee.length; i++){
        const tdCognome = linee[i].children[0].innerText // Prendo il primo contenuto (il cognome) di ogni linea
        const tdTelefono = linee[i].children[3].innerText

        if(tdCognome == cognomeForm || tdTelefono == telefonoForm){
            let cognomeObj = document.getElementById("cognome")
            let nomeObj = document.getElementById("nome")
            let indirizzoObj = document.getElementById("indirizzo")
            let telefonoObj = document.getElementById("telefono")

            // riporto i valori trovati all'interno del form
            cognomeObj.value = linee[i].children[0].innerText
            nomeObj.value = linee[i].children[1].innerText
            indirizzoObj.value = linee[i].children[2].innerText
            telefonoObj.value = linee[i].children[3].innerText
            isInsert = false // Cambio il valore della variabile di stato
            idFoundLine = linee[i].id
            return
        }
    }
    alert("Utente non presente")
}

