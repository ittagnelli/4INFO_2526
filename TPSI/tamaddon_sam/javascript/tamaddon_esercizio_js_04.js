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
        paraGialli[j].textContent = paraGialli[j].toUpperCase();

      }
    // let primo = document.getElementsByClassName("par1");
    // let secondo= document.getElementsByClassName("part2");
    // let terz = document.getElementsByClassName("part3");
    // let quarz = document.getElementsByClassName("part4");
    // let cinquo = document.getElementsByClassName("part7");
    

    // for (let a = 0; a < primo.length; a++) {
    //     primo[a].style.color = "blue";
    // }

    // for (let c = 0; c < secondo.length; c++) {
    //     secondo[b].el.style.backgroundColor = "green";
    // }


    // for (let b = 0; b < terz.length; b++) {
    
    //     terz[b].el.style.backgroundColor = "blue";
    //     terz[b].textContent.toUpperCase();
    // }


    // for (let d = 0; d < quarz.length; d++) {
    //     quarz[d].textContent.toUpperCase();
    // }
    
    // for (let e = 0; e < cinquo.length; e++) {
    //     cinquo[e].textContent.toUpperCase();
    // }

    
    
}


    
    
   



