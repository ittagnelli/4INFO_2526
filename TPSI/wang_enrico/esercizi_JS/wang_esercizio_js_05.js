function add_nome_media(){
    const table = document.getElementById("lista");
    const tr = document.createElement("tr");
    const tdNome = document.createElement("td");
    const tdMedia = document.createElement("td");

    tdNome.innerText = document.getElementById("nome").value;
    tdMedia.innerText = document.getElementById("media").value;

    table.append(tr);
    tr.append(tdNome,tdMedia);
}

function colora(){
    const table = document.getElementById("lista");
    const tr_items = table.children;
    for(let i = 0; i < tr_items.length;i++){
        if(i % 2 == 0){
            tr_items[i].style.color = "red";
        }else{
            tr_items[i].style.color = "green";
        }
        table.style.border = "5px solid";  
    }
}