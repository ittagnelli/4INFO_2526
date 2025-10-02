function modifica_stile(){
    let h1= document.querySelectorAll("h1");
    h1[0].style.color="red";
    h1[1].style.color="red";


    let h2=document.querySelectorAll("h2");
    for(let j = 0; j < h2.length; j++) {
    h2[j].style.color="blue";
    h2[j].style.color="blue";
    h2[j].style.backgroundColor="yellow";
    h2[j].style.fontSize="40px"
    h2[j].textContent= h2[j].textContent.toUpperCase();
    }
   
    let p= document.querySelectorAll(p);
    p[0].style.color="red";
    p[3].style.color="red";

    p[0].style.backgroundColor="lightgreen";
    p[4].style.backgroundColor="lightgreen";
    p[7].style.backgroundColor="lightgreen";

    p[2].textContent= p[2].textContent.toUpperCase();
    p[2].style.backgroundColor="lightblue";

    p[5].textContent= p[5].textContent.toUpperCase();

    p[6].style.fontStyle="italic";



}