function media(){
    const tdN = document.createElement("td");
    
    const tdM = document.createElement("td");


    const table = document.getElementById("lista");


    const tr = document.createElement("tr");
   

    tdN.innerText = document.getElementById("nome").value;


    tdM.innerText = document.getElementById("media").value;

    table.append(tr);
    tr.append(tdN,tdM);
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

