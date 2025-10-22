function salva(){
    let textObj = document.getElementById("testo")
    let textValue = textObj.value
    let priority = document.getElementById("priorita")
    let priorityValue = priority.value
    let tableObj = document.getElementById("tabella")
    let id = new Date().getTime()
    const tr = document.createElement("tr")
    const tdText = document.createElement("td")
    const tdPriority = document.createElement("td")
    const tdDone = document.createElement("td")
    const tdremove = document.createElement("td")
    const butDone = document.createElement("img")
    const butRem = document.createElement("img")
    butDone.addEventListener("click", fatto)
    butRem.addEventListener("click", elimina)
    butRem.classList.add(id)
    butDone.classList.add(id)
    tr.classList.add(id)
    tdText.innerText = textValue
    const indicatorePriorita = document.createElement("img")
    if(priorityValue == "alta"){
        indicatorePriorita.src = "alto.png"
    }
    else if (priorityValue == "media") {
        indicatorePriorita.src = "medio.png"                
    }
    else if (priorityValue == "bassa") {
        indicatorePriorita.src = "basso.png"                
    }
    butDone.src = "fatto.png"
    butRem.src = "elimina.png"
    indicatorePriorita.classList.add("icona")
    butDone.classList.add("icona")
    butRem.classList.add("icona")
    tdText.classList.add("entryElenco")
    tdremove.append(butRem)
    tdDone.append(butDone)
    tdPriority.append(indicatorePriorita)
    tr.append(tdText)
    tr.append(tdPriority)
    tr.append(tdDone)
    tr.append(tdremove)
    tableObj.append(tr)
    textObj.value = ""
    priority.value = "bassa"
}
function elimina(el){
    const identificatorePulsante = el.srcElement.classList[0]
    let trRemove = document.getElementsByClassName(identificatorePulsante)
    trRemove[0].remove()
}
function fatto(el){
    const idButn = el.srcElement.classList[0]
    let trToTick = document.getElementsByClassName(idButn)
    trToTick[0].children[0].classList.add("eliminato")
}