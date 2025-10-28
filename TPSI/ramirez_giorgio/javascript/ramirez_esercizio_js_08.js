function salva(){
    let testoObj = document.getElementById("testo")
    let testoValue = testoObj.value
    let prioritaObj = document.getElementById("priorita")
    let prioritaValue = prioritaObj.value
    let tabellaObj = document.getElementById("tabella")

    if(testoValue != ""){// vede se ci sta un testo dentro
        let id = new Date().getTime()
        const tdText = document.createElement("td")
        const tdPriorita = document.createElement("td")
        const tdDone = document.createElement("td")
        const tdDelete = document.createElement("td")
        const buttonDone = document.createElement("img")
        const buttonDelete = document.createElement("img")
        const tr = document.createElement("tr")

        buttonDone.addEventListener("click", fatto)
        buttonDelete.addEventListener("click", elimina)
        
        buttonDelete.classList.add(id)
        buttonDone.classList.add(id)
        tr.classList.add(id)

        tdText.innerText = testoValue
        const indicatorePriorita = document.createElement("img")
        if(prioritaValue == "alta"){
            indicatorePriorita.src = "../images/frecciaalto.png"
        }
        else if (prioritaValue == "media") {
            indicatorePriorita.src = "../images/frecciamedio.png"                
        }
        else if (prioritaValue == "bassa") {
            indicatorePriorita.src = "../images/frecciabasso.png"               
        }
        
        buttonDone.src = "../images/iconafatto.png"
        buttonDelete.src = "../images/iconacestino.png"

        indicatorePriorita.classList.add("icona")
        buttonDone.classList.add("icona")
        buttonDelete.classList.add("icona")
        tdText.classList.add("entryElenco")

        tdDelete.append(buttonDelete)
        tdDone.append(buttonDone)
        tdPriorita.append(indicatorePriorita)
        tr.append(tdText)
        tr.append(tdPriorita)
        tr.append(tdDone)
        tr.append(tdDelete)
        tabellaObj.append(tr)
        
        testoObj.value = ""
        prioritaObj.value = "bassa"
    }
    else{
        alert("Scrivi nei campi") // in caso il testo non ci sta
    }
}

function elimina(el){
    const idPulsante = el.srcElement.classList[0]
    let trRemove = document.getElementsByClassName(idPulsante)
    trRemove[0].remove()
}

function fatto(el){
    const idPulsante = el.srcElement.classList[0]
    let Fatto = document.getElementsByClassName(idPulsante)
    Fatto[0].children[0].classList.add("eliminato")
}