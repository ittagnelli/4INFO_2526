function modifica_stile(){
    let primo_livello=document.getElementsByTagName("h1");
    for (let i = 0; i < primo_livello.length; i++) {
        primo_livello[i].style.color="red";
        
    }
    let secondo_livello=document.getElementsByTagName("h2");
    for (let i=0; i<  secondo_livello.length; i++){
        secondo_livello[i].style.color="yellow"
        secondo_livello[i].style.fontSize = '40px';
        secondo_livello[i].innerText=secondo_livello[i].innerText.toUpperCase();
    }


}
