function modifica_stile(){
    let h1 = document.getElementsByTagName("h1");
    let h2 = document.getElementsByTagName("h2");
    let par1 = document.getElementById("par1")
    par1.style.color= "red"
    let par4 = document.getElementById("par4")
    par4.style.color= "red"
    let par2= document.getElementById("par2")
    par2.style.backgroundcolor = "lightgreen"
    let par5 = document.getElementById("par5")
    par5.style.backgroundColor = "lightgreen"
    let par8 = document.getElementById("par8")
    par8.style.backgroundColor = "lightgreen"
    let par3 = document.getElementById("par3")
    par3.style.backgroundColor = "lightblue"
    par3.innerText = par3.innerText.toUpperCase()
    let par6 = document.getElementById("par6")
    par6.innerText = par6.innerText.toUpperCase()
    let par7 = document.getElementById("par7")
    par7.style.fontStyle= "italic"

    for (let i = 0; i < h1.length; i++){
        h1[i].style.color = "red"
    }

    for (let i = 0; i < h2.length; i++){
        h2[i].style.color="blue"
        h2[i].style.backgroundColor = "yellow"
        h2[i].style.fontSize = '40 px'
        h2[i].innerText = h2[i].innerText.toUpperCase()
    }




}

   