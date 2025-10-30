let isInsert = true 
let idFoundLine = 0 


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
            let id = new Date().getTime()

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
            let linea = document.getElementById(idFoundLine)
            linea.children[0].innerText = cognomeValue
            linea.children[1].innerText = nomeValue
            linea.children[2].innerText = indirizzoValue
            linea.children[3].innerText = telefonoValue

            cognomeObj.value = ""
            nomeObj.value = ""
            indirizzoObj.value = ""
            telefonoObj.value = ""    

            isInsert = true
        }
    }
    else{
        alert("Compilare tutti i campi")
    }
}

function rimuovi(el){
    const idPulsante = el.srcElement.id
    let trRemove = document.getElementById(idPulsante)
    trRemove.remove()
}

function cerca(){
    let cognomeForm = document.getElementById("cognome").value
    let telefonoForm = document.getElementById("telefono").value

    const tabella = document.getElementById("tabella")
    const linee = tabella.getElementsByTagName("tr")

    for (let i = 2; i < linee.length; i++){
        const tdCognome = linee[i].children[0].innerText 
        const tdTelefono = linee[i].children[3].innerText

        if(tdCognome == cognomeForm || tdTelefono == telefonoForm){
            let cognomeObj = document.getElementById("cognome")
            let nomeObj = document.getElementById("nome")
            let indirizzoObj = document.getElementById("indirizzo")
            let telefonoObj = document.getElementById("telefono")
            
            cognomeObj.value = linee[i].children[0].innerText
            nomeObj.value = linee[i].children[1].innerText
            indirizzoObj.value = linee[i].children[2].innerText
            telefonoObj.value = linee[i].children[3].innerText
            isInsert = false
            idFoundLine = linee[i].id
            return
        }
    }
    alert("Utente non presente")
}