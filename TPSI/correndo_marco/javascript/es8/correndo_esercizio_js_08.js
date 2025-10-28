document.addEventListener("DOMContentLoaded",init,false);

function init(){
    let aggiungi = document.getElementById("aggiungi");
    aggiungi.addEventListener("click",add);
}

function add(){
    let TodoItem = document.getElementById("todo-item");
    let TodoPrio = document.getElementById("priority");
    let TodoTable = document.getElementById("tabella"); 

    if( TodoItem.value == ""){
        alert("Inserire il testo del todo item");
        return;
    }else{
        let nuovaRiga = document.createElement("tr");
        let nuovoItem = document.createElement("td");
        let nuovoPrio = document.createElement("td");
        let nuovoDone = document.createElement("td");
        let nuovoDoneBut = document.createElement("button");
        let nuovoDel = document.createElement("td");
        let nuovoDelBut = document.createElement("button");
        
        let id = Date.now();

        nuovoItem.innerText = TodoItem.value;
        nuovoItem.colSpan ="3";

        nuovaRiga.id = id;

        nuovoPrio.classList.add("material-symbols-outlined");
        nuovoPrio.innerText = TodoPrio.value == "Bassa" ? "arrow_downward": TodoPrio.value == "Alta" ? "arrow_upward" : "arrow_right_alt";
        nuovoPrio.classList.add(TodoPrio.value);

        nuovoDoneBut.classList.add("material-symbols-outlined");
        nuovoDoneBut.innerText = "check";
        nuovoDoneBut.id = id;
        nuovoDoneBut.addEventListener("click",setDone);

        
        nuovoDelBut.innerText = "delete";
        nuovoDelBut.classList.add("material-symbols-outlined");
        nuovoDelBut.id = id;
        nuovoDelBut.addEventListener("click",del);

        nuovoDone.append(nuovoDoneBut);
        nuovoDel.append(nuovoDelBut);
        nuovaRiga.append(nuovoItem);
        nuovaRiga.append(nuovoPrio);
        nuovaRiga.append(nuovoDone);
        nuovaRiga.append(nuovoDel);
        TodoTable.append(nuovaRiga);

        TodoItem.value = "";
    }
}
function setDone(el){
    //console.log(el);
    let riga = document.getElementById(el.srcElement.id);
    let tds = riga.children;
    tds[0].classList.toggle("done");
    return;
}
function del(el){
    let riga = document.getElementById(el.srcElement.id);
    riga.remove();
}
