function modifica_stile(){
    let titolih1 = document.getElementsByClassName("titoloL1");
    let titolih2 = document.getElementsByTagName("h2");
    let par1 = document.getElementById("par1");
    let par2 = document.getElementById("par2");
    let par3 = document.getElementById("par3");
    let par4 = document.getElementById("par4");
    let par5 = document.getElementById("par5");
    let par6 = document.getElementById("par6");
    let par7 = document.getElementById("par7");
    let par8 = document.getElementById("par8");

    for(let i = 0; i < titolih1.length; i++){
        titolih1[i].style.color = "red";
    }

    for(let i = 0; i < titolih2.length; i++){
        titolih2[i].style.color = "blue";
        titolih2[i].style.backgroundColor = "yellow";
        titolih2[i].style.fontSize = '40px';
        titolih2[i].innerText = titolih2[i].innerText.toUpperCase();
    }

    par1.style.color="red";
    par4.style.color="red";
    par2.style.backgroundColor="lightgreen";
    par5.style.backgroundColor="lightgreen";
    par8.style.backgroundColor="lightgreen";
    par3.style.backgroundColor="lightblue";
    par3.innerText =  par3.innerText.toUpperCase();
    par6.innerText =  par6.innerText.toUpperCase();
}