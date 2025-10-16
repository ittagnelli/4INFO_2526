function aggiuntalinea(){
    let tabella = document.getElementById("tabella")
    let nome = document.getElementById("nome").value
    let media = document.getElementById("media").value
    let linea = document.createElement("tr")
    let dato1 = document.createElement("td")
    let dato2 = document.createElement("td")
    dato1.innerHTML = nome
    dato2.innerHTML = media
    tabella.append(linea)
    linea.append(dato1)
    linea.append(dato2)
}

function coloralinee(){
    let linee = document.getElementsByTagName("tr")
    for (let i = 0; i < linee.length; i++){
        if (i % 2 == 0){
            linee[i].style.backgroundColor = "blue"
        }
        else{
            linee[i].style.backgroundColor = "red"
        }
    }
}

function grassetto(){
    let tdcontent = document.getElementsByTagName("td")
    for (let i = 0; i < tdcontent.length; i++){
        let tdattuale = tdcontent[i]
        tdattuale.classList.add("grassetto")
    }
}

function blu(){
    let tdcontent = document.getElementsByTagName("td")
    for (let i = 0; i < tdcontent.length; i++){
        let tdattuale = tdcontent[i]
        tdattuale.classList.add("blu")
    }
}

function togglebordo(){
    console.log("bordo")
    let tabella = document.getElementById("tabella")
    tabella.classList.toggle("bordo")
}