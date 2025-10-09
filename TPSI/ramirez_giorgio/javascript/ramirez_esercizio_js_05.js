alert("CIAO");
function aggiungiVoto(){
    let nome = document.getElementById("nome").value ;
    let media = document.getElementById("media").value ;
    let tabella = document.getElementById("tabella");
    let linea = document.createElement('tr');
    let colnome = document.createElement('td');
    let colmedia = document.createElement('td');
    colnome.innerText = nome;
    colmedia.innerHTML = media; 
    linea.append(colnome);
    linea.append(colmedia);
}