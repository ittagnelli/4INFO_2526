// Funzione salva
function salva(){
    // Ottengo gli oggetti e i loro valori (il campo di testo, la priorità e la tabella)
    let testoObj = document.getElementById("testo")
    let testoValue = testoObj.value
    let prioritaObj = document.getElementById("priorita")
    let prioritaValue = prioritaObj.value
    let tabellaObj = document.getElementById("tabella")

    // Se il campo di testo ha al suo interno qualcosa
    if(testoValue != ""){
        let id = new Date().getTime() // Assegno un id univoco (unix epoch) a ogni pulsante rimuovi uguale a quello di ogni riga
        
        // Creo la linea della tabella con tutte le celle al suo interno
        const tr = document.createElement("tr")
        const tdTesto = document.createElement("td")
        const tdPriorita = document.createElement("td")
        const tdFatto = document.createElement("td")
        const tdElimina = document.createElement("td")
        const buttonFatto = document.createElement("img")
        const buttonElimina = document.createElement("img")

        // Alla pressione dei pulsanti di una riga vengono richiamate le funzioni
        buttonFatto.addEventListener("click", fatto)
        buttonElimina.addEventListener("click", elimina)
        
        // Assegno le classi identificative
        buttonElimina.classList.add(id)
        buttonFatto.classList.add(id)
        tr.classList.add(id)

        // Assegno alla cella del testo il testo inserito; in base alla priorità inserita inerisco l'indicatore
        tdTesto.innerText = testoValue
        const indicatorePriorita = document.createElement("img")
        if(prioritaValue == "alta"){
            indicatorePriorita.src = "../img/alto.png"
        }
        else if (prioritaValue == "media") {
            indicatorePriorita.src = "../img/medio.png"                
        }
        else if (prioritaValue == "bassa") {
            indicatorePriorita.src = "../img/basso.png"                
        }
        
        // Assegno le icone per i pulsanti fatto ed elimina
        buttonFatto.src = "../img/fatto.png"
        buttonElimina.src = "../img/elimina.png"

        // Fornisco le dimensioni alle icone e al testo con una classe
        indicatorePriorita.classList.add("icona")
        buttonFatto.classList.add("icona")
        buttonElimina.classList.add("icona")
        tdTesto.classList.add("entryElenco")

        // Aggiungo tutte le icone alle celle, le celle alla linea e la linea alla tabella
        tdElimina.append(buttonElimina)
        tdFatto.append(buttonFatto)
        tdPriorita.append(indicatorePriorita)
        tr.append(tdTesto)
        tr.append(tdPriorita)
        tr.append(tdFatto)
        tr.append(tdElimina)
        tabellaObj.append(tr)
        
        // Reimposto i valori del form
        testoObj.value = ""
        prioritaObj.value = "bassa"
    }
    // Nel caso non ci fosse del testo nel form mostro l'alert a schermo
    else{
        alert("Compilare tutti i campi")
    }
}

// Funzione elimina linea
function elimina(el){ // el è l'oggetto su cui viene chiamata la funzione (in questo caso il pulsante)
    // Seleziono e prendo la linea dalla prima classe del pulsante elimina e la rimuovo dal DOM
    const identificatorePulsante = el.srcElement.classList[0]
    let trRemove = document.getElementsByClassName(identificatorePulsante)
    trRemove[0].remove()
}

// Funzione barra cella testo
function fatto(el){
    // Seleziono e prendo la linea della cella da barrare, alla cella aggiungo una classe che barra il testo
    const idPulsante = el.srcElement.classList[0]
    let trToTick = document.getElementsByClassName(idPulsante)
    trToTick[0].children[0].classList.add("eliminato")
}