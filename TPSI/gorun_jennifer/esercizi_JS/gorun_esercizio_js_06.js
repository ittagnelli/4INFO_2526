function addline(){
    let tabella = document.getElementById("tabella")
    let nome = document.getElementById("nome").value 
    let media = document.getElementById("media").value
    let line = document.createElement('tr')
    let dato1 = document.createElement('td')
    let dato2 = document.createElement('td')
    dato1.innerHTML = nome
    dato2.innerHTML = media
    line.append(dato1)
    line.append(dato2)
    tabella.append(line)
}

function color(){
    let line = document.getElementsByTagName("tr")
    for(let i = 0; i < line.length; i++){
        if(i % 2 == 0){
            line[i]. style.backgroundColor = "blue"
        }
        else{
            line[i]. style.backgroundColor = "red"

        }
    }
}

function grassetto(){
    let tdcontent = document.getElementsByTagName("td")
    for(let i = 0; i < tdcontent.length; i++){
        let tdattuale = tdcontent[i]
        tdattuale.classList.add("grassetto")
    }
}