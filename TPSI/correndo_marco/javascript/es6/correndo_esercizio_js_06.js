document.addEventListener("DOMContentLoaded",main,false);

function main(){
    let puls = document.getElementById("idinv");
    puls.addEventListener('click',Inviodati);

    let pulscol = document.getElementById("idcol");
    pulscol.addEventListener('click',Colora);

    let pulgr = document.getElementById("idgr");
    pulgr.addEventListener('click',Grassetto);

    let pulblue = document.getElementById("idblue");
    pulblue.addEventListener('click',Blue);

    let pulbordo = document.getElementById("idbordo");
    pulbordo.addEventListener('click',Bordo);
}


function Inviodati(){
    let nome = document.getElementById("nome").value;
    let media = document.getElementById("media").value;

    let tabella = document.getElementById("tavola-medie");
    let newriga = document.createElement("tr");
    tabella.append(newriga);

    let newName = document.createElement("td");
    newName.innerText = nome;

    let newMedia = document.createElement("td");
    newMedia.innerText = media;

    newriga.append(newName);
    newriga.append(newMedia);
    
}

function Colora(){
    let righe = document.getElementsByTagName("td");
    for(let i = 0; i < righe.length; i+=2){
        classe = (i/2) % 2 == 0 ? "blue" : "red";
        let el = righe[i];
        let il = righe[i+1];
        el.classList.add(classe);
        il.classList.add(classe);
    }
}

function Grassetto(){
    let tabella = document.getElementById("tavola-medie");
    let righe = tabella.children;
    for(let i = 0; i<righe.length ;i++){
        let col=righe[i].children;
        for(let j=0;j<col.length;j++){
            col[j].classList.toggle("gr")
        }
    }
}

function Blue(){
    let tabella = document.getElementById("tavola-medie");
    let righe = tabella.children;
    for(let i = 0; i<righe.length ;i++){
        let col=righe[i].children;
        for(let j=0;j<col.length;j++){
            col[j].classList.remove("red")
            col[j].classList.add("blue")
        }
    }
}

function Bordo(){
    let tabella = document.getElementById("tavola-medie");
    tabella.classList.toggle("bordo");
}
