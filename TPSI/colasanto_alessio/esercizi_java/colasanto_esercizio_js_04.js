function modifica_stile(){
    let primo_livello=document.getElementsByTagName("h1");
    for (let i = 0; i < primo_livello.length; i++) {
        primo_livello[i].style.color="red";
        
    }
    let secondo_livello=document.getElementsByTagName("h2");
    for (let i=0; i<  secondo_livello.length; i++){
        secondo_livello[i].style.color="yellow"
        secondo_livello[i].style.fontSize = '40px';
        secondo_livello[i].innerText=secondo_livello[i].innerText.toUpperCase();
    }

    let p=document.getElementsByTagName("p");
    for(let i=0;i<p.length;i++){
        p[i].style.color="red"
        if (i==0 || i==3){
        p[i].style.color="red"   
        }else if (i==1 || i==4 || i==7){
            p[i].style.backgroundColor="lightgreen"

        }else if(i==2){
            p[i].innerText=p.innerText.toUpperCase();
            p[i].style.backgroundColor="lightblue"


        }else if(i==5){
            p[i].innerText=p.innerText.toUpperCase();
        }else if(i==6){
            p[i].style.fontFamily="italic"
        }

    }

}
