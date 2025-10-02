function modifica_stile() {

    const h2Elements = document.querySelectorAll("h2");
    h2Elements.forEach(h2 => {
        h2.style.color = "blue";
        h2.style.backgroundColor = "yellow";
        h2.style.fontSize = "40px";
        h2.textContent = h2.textContent.toUpperCase();
    });

    const h3Elements = document.querySelectorAll("h3");
    h3Elements.forEach(h3 => {
        h3.style.color = "red";
        h3.style.backgroundColor = "gray";
    });

  
    const par1 = document.getElementById("par1");
    if (par1) par1.style.color = "red";

    const par2 = document.getElementById("par2");
    if (par2) {
        par2.style.backgroundColor = "blue";
        par2.style.color = "white";
    }

    const par3 = document.getElementById("par3");
    if (par3) {
        par3.textContent = par3.textContent.toUpperCase();
        par3.style.backgroundColor = "#add8e6"; 
    }

    const par4 = document.getElementById("par4");
    if (par4) {
        par4.style.backgroundColor = "blue";
        par4.style.color = "white";
    }

    const par6 = document.getElementById("par6");
    if (par6) {
        par6.style.fontStyle = "italic";
    }

    const par7 = document.getElementById("par7");
    if (par7) {
        par7.textContent = par7.textContent.toUpperCase();
    }

    const par8 = document.getElementById("par8");
    if (par8) {
        par8.style.backgroundColor = "blue";
        par8.style.color = "white";
    }
}
