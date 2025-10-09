function modifica_stile(){
    let titoli1 = document.getElementsByTagName("h1");
    let titoli2 = document.getElementsByTagName("h2");
    let parag = document.getElementsByTagName("p");
    console.log(parag);
    for(let i = 0;i < titoli1.length;i++){
        titoli1[i].style.color="red";
    }
    for(let i = 0;i < titoli2.length;i++){
        titoli2[i].style.fontSize="40px";
        titoli2[i].style.backgroundColor="yellow";        
        titoli2[i].style.backgroundColor="blue";
        let text = titoli2[i].innerText;
        titoli2[i].innerText= text.toUpperCase();
    }
    for(let i = 0;i < parag.length;i++){
        let p = parag[i];
        if( i == 0 || i == 3){
            p.style.color="red";
        }else if( i == 1 || i == 4 || i == 7){
            p.style.backgroundColor="lightgreen"
        }else if( i == 2){
            p.innerText = p.innerText.toUpperCase();
            p.style.backgroundColor="lightblue";
        }else if( i == 5){
            p.innerText = p.innerText.toUpperCase();
        }else if( i == 6){
            p.style.fontFamily="italic"
        }
    }
}
