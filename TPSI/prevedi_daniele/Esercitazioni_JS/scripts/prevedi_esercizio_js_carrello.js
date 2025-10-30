let tabellaTotalePresente = false


function calcolaImportoRiga(id){
    let riga = document.getElementsByClassName(id)
    riga[0].children[3].innerText = Number(riga[0].children[1].value) * Number(riga[0].children[2])
}


function aggiornaTotali(){
    let tabella = document.getElementById("carrello")
    for (let i = 2; i < tabella.length; i++) {
        id = tabella.children[i].classList[0]
        calcolaImportoRiga(id)        
    }

    if(tabellaTotalePresente == true){
        let somma = 0
        for (let i = 2; i < tabella.length; i++) {
            somma = somma + Number(tabella.children[i].children[3].innerText)            
        }
        let tabellaTotale = document.getElementById("tabellaTotale")
        tabellaTotale.children[1].children[1].innerText = somma
    }
    else{

    }
}


function mostraTotale(){
    let tabellaCarrello = document.getElementById("carrello")
    
    if(tabellaCarrello.children.length >= 3){
        if(tabellaTotalePresente == false){
            let body = document.getElementById("body")
            let tabellaSomma = document.createElement("table")
            tabellaSomma.id = "tabellaTotale"
            
            let rigaHr = document.createElement("tr")
            let rigaValue = document.createElement("tr")
            let rigaMisura = document.createElement("tr")
            let tdHr = document.createElement("td")
            let tdMisura = document.createElement("td")
            let tdScritta = document.createElement("td")
            let tdValue = document.createElement("td")
            let hr = document.createElement("hr")
            
            tdHr.colSpan = 4
            tdScritta.colSpan = 3
            tdMisura.colSpan = 5

            tdScritta.innerText = "TOTALE"

            tabellaSomma.append(rigaHr)
            tabellaSomma.append(rigaValue)
            tabellaSomma.append(rigaMisura)
            rigaHr.append(tdHr)
            tdHr.append(hr)
            rigaValue.append(tdScritta)
            rigaValue.append(tdValue)
            rigaMisura.append(tdMisura)
            body.append(tabellaSomma)

            tabellaTotalePresente = true
        }
        aggiornaTotali()
    }
    
    else{
        alert("Per utilizzare la funzione somma è necessario compilare tutti i campi.")
    }
}


function elimina(el){
    const idPulsante = el.srcElement.classList[0]
    let trRemove = document.getElementsByClassName(idPulsante)
    trRemove[0].remove
}

function aggiungi(){
    let nomeProdottoObj = document.getElementById("prodotto")
    let nomeProdottoVal = nomeProdottoObj.value
    let quantitaObj = document.getElementById("qty")
    let quantitaVal = quantitaObj.value
    let costoObj = document.getElementById("costo")
    let costoValue = costoObj.value
    let tabella = document.getElementById("carrello")

    if(nomeProdottoVal != "" && quantitaVal != "" && costoValue != ""){
        let id = new Date().getTime()

        const tr = document.createElement("tr")
        const tdNome = document.createElement("td")
        const tdQty = document.createElement("td")
        const tdCost = document.createElement("td")
        const tdImporto = document.createElement("td")
        const tdElimina = document.createElement("td")
        const campoQty = document.createElement("input")
        const spanElimina = document.createElement("span")

        campoQty.type = "number"
        campoQty.min = "1"
        spanElimina.classList.add("material-icons")
        spanElimina.classList.add("icon_remove")
        spanElimina.innerText = "remove_shopping_cart"

        campoQty.addEventListener("change", aggiornaTotali)
        tdElimina.addEventListener("click", elimina)

        tdElimina.classList.add(id)
        campoQty.classList.add(id)
        tr.classList.add(id)

        tr.append(tdNome)
        tr.append(tdQty)
        tr.append(tdCost)
        tr.append(tdImporto)
        tr.append(tdElimina)
        tdQty.append(campoQty)
        tdElimina.append(spanElimina)
        tabella.append(tr)

        tdNome.innerText = nomeProdottoVal
        campoQty.value = quantitaVal
        tdCost.innerText = costoValue
        tdImporto.innerText = calcolaImportoRiga(id)

        nomeProdottoObj.value = ""
        quantitaObj.value = ""
        costoObj.value = ""
    }
    else{
        alert("Compilare tutti i campi")
    }
}