function modifica_stile() {
    let paraRossi = document.querySelectorAll("h1");
    for (let i = 0; i < paraRossi.length; i++) {
        paraRossi[i].style.color = "red";
      }
    console.log(paraRossi.length)
    let paraGialli = document.querySelectorAll("h2");
    for (let j = 0; j < paraGialli.length; j++) {
        paraGialli[j].style.color = "blue";
        paraGialli[j].style.backgroundColor = "yellow";
        paraGialli[j].style.fontSize = "40px";
        paraGialli[j].textContent = paraGialli[j].textContent.toUpperCase();

      }
    let primo = document.getElementById("par1");
    primo.style.color="red";
    let secondo= document.getElementById("part2");
    secondo.style.backgroundColor="lightgreen";
    let terz = document.getElementsById("part3");
    terz.textContent= terz.textContent.toUpperCase();
    terz.style.backgroundColor="lightblue"
    let quarz = document.getElementsById("part4");
    quarz.style.color="red";
    let cinquo = document.getElementsById("part5");
    cinquo.style.backgroundColor="lightgreen";
    let sesto = document.getElementById("part6");
    sesto.textContent=sesto.textContent.toUpperCase();
    let setto = document.getElementById("part7");
    setto.style.fontFamily="italic";
    let etto = document.getElementById("part8");
    etto.style.backgroundColor="lightgreen";
    

    
    
    
    
    

    

    
}


    
    
   



