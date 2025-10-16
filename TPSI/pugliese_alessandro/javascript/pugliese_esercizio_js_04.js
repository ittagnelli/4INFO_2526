function modifica_stile() {
    let h1 = document.getElementsByTagName("h1");
    for (let i = 0; i < h1.length; i++) {
        h1[i].style.color = "red";
    }

    let h2 = document.getElementsByTagName("h2");
    for (let i = 0; i < h2.length; i++) {
        h2[i].style.color = "blue";
        h2[i].style.backgroundColor = "yellow";
        h2[i].style.fontSize = "40px";
        h2[i].textContent = h2[i].textContent.toUpperCase();
    }

    let par1 = document.getElementById("par1");
    if (par1) par1.style.color = "red";
    let par4 = document.getElementById("par4");
    if (par4) par4.style.color = "red";

    let idsVerde = ["par2", "par5", "par8"];
    for (let i = 0; i < idsVerde.length; i++) {
        let p = document.getElementById(idsVerde[i]);
        if (p) p.style.backgroundColor = "lightgreen";
    }

    let par3 = document.getElementById("par3");
    if (par3) {
        par3.style.textTransform = "uppercase";
        par3.style.backgroundColor = "lightblue";
    }

    let par6 = document.getElementById("par6");
    if (par6) par6.style.textTransform = "uppercase";

    let par7 = document.getElementById("par7");
    if (par7) par7.style.fontStyle = "italic";
}

