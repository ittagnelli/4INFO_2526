function add_nome_media(){
    const ul = document.getElementById("lista");
    const nome = document.getElementById("nome").value;
    const media = document.getElementById("media").value;
    const riga = document.createElement("li");
    
    riga.innerText = nome + " " + media;
    ul.append(riga);
}

function colora(){
    const ul = document.getElementById("lista");
    const li_items = ul.children;
    for(let i = 0; i < li_items.length;i++){
        li_items[i].classList.add("colore_b");
    }
    document.li.classList.add("colore_b");
}
function grassetto(){
    const ul = document.getElementById("lista");
    const li_items = ul.children;
    for(let i = 0; i < li_items.length;i++){
        li_items[i].classList.add("grassetto");
    }
}
function bordo_si_no(){
    const ul = document.getElementById("lista");
    ul.classList.toggle("bordo");
}