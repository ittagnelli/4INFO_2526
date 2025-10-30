function salva(){
    let testoObj = document.getElementById("testo").value;
    let prioritaObj = document.getElementById("priorita").value;
    let tabellaObj = document.getElementById("tabella")

    if(testoObj != ""){
        let id = new Date().getTime()
        
        const tr = document.createElement("tr")
        const tdTesto = document.createElement("td")
        const tdPriorita = document.createElement("td")
        const tdFatto = document.createElement("td")
        const tdElimina = document.createElement("td")
        const button_fatto = document.createElement("img")
        const button_elimina = document.createElement("img")

        button_fatto.addEventListener("click", fatto)
        button_elimina.addEventListener("click", elimina)

        button_elimina.classList.add(id)
        button_fatto.classList.add(id)
        tr.classList.add(id)

        tdTesto.innerText = testoObj
        const indicatorePriorita = document.createElement("img")
        if(prioritaObj == "alta"){
            indicatorePriorita.src = "img/alto.png"
        }
        else if (prioritaObj == "media") {
            indicatorePriorita.src = "img/medio.png"                
        }
        else if (prioritaObj == "bassa") {
            indicatorePriorita.src = "img/basso.png"                
        }
        
        button_fatto.src = "img/fatto.png"
        button_elimina.src = "img/elimina.png"
        indicatorePriorita.classList.add("icona")
        button_fatto.classList.add("icona")
        button_elimina.classList.add("icona")
        tdTesto.classList.add("entryElenco")

        tdElimina.append(button_elimina)
        tdFatto.append(button_fatto)
        tdPriorita.append(indicatorePriorita)
        tr.append(tdTesto)
        tr.append(tdPriorita)
        tr.append(tdFatto)
        tr.append(tdElimina)

        tabellaObj.append(tr)
        testoObj.value = ""
        prioritaObj.value = "bassa"
    }
    else{
        alert("Compilare tutti i campi")
    }
}

function elimina(el){ 
    const identificatorePulsante = el.srcElement.classList[0]
    let trRemove = document.getElementsByClassName(identificatorePulsante)
    trRemove[0].remove()
}

function fatto(el){
    const idPulsante = el.srcElement.classList[0]
    let trToTick = document.getElementsByClassName(idPulsante)
    trToTick[0].children[0].classList.add("eliminato")
}