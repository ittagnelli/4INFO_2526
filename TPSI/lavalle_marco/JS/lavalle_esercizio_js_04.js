function modifica_stile(){
    let tito1 = document.getElementsByTagName('h1');
    for (let i = 0; i < tito1.length; i++) {
        tito1[i].style.color = "red";
    }

    let tito2 = document.getElementsByTagName('h2');
    for (let i = 0; i < tito2.length; i++) {
        tito2[i].style.color = "blue";
        tito2[i].style.backgroundColor = "yellow";
        tito2[i].style.fontSize = "40px";
        tito2[i].innerText = tito2[i].innerText.toUpperCase();
    }

    par1.style.color = "red"
    par4.style.color = "red"
    par2.style.backgroundColor = "lightgreen"
    par5.style.backgroundColor = "lightgreen"
    par8.style.backgroundColor = "lightgreen"
    par3.style.textTransform = "uppercase"
    par3.style.backgroundColor = "lightblue"
    par6.style.textTransform = "uppercase"
    par7.style.fontstyle = "italic"



}
