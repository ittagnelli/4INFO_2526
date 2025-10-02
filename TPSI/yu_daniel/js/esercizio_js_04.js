function modifica_stile() {
    let h1 = document.getElementsByTagName("h1");
    let h2 = document.getElementsByTagName("h2");
    for (let index = 0; index < h1.length; index++) {
        h1[index].style.color="red";
    }
    for (let index = 0; index < h2.length; index++) {
        h2[index].style.backgroundColor="yellow";
        h2[index].style.fontSize="40px";
        h2[index].style.color="blue";
        h2[index].innerText.toUpperCase;
    }
    let par1 = document.getElementById("par1");
    let par2 = document.getElementById("par2");
    let par3 = document.getElementById("par3")
    let par4 = document.getElementById("par4")
    let par5 = document.getElementById("par5")
    let par6 = document.getElementById("par6")
    let par7 = document.getElementById("par7")
    let par8 = document.getElementById("par8");
    par1.style.color="red"
    par4.style.color="red"
    par2.style.backgroundColor="lightgreen"
    par5.style.backgroundColor="lightgreen"
    par8.style.backgroundColor="lightgreen"
    par3.style.textTransform="uppercase"
    par3.style.backgroundColor="lightblue"
    par6.style.textTransform="uppercase"
    par7.style.fontStyle="italic"

}