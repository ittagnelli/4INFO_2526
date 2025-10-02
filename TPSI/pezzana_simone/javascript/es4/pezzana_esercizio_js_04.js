function modifica_stile(){
    let h1=document.getElementsByTagName("h1");
    for(let i=0;i<h1.length;i++){
        h1[i].style.color="red";
        
    }
    let h2=document.getElementsByTagName("h2");
    for(let i=0;i<h2.length;i++){
        h2[i].style.color="blue"
        h2[i].style.backgroundColor="yellow"
        h2[i].style.fontSize="40px"
        h2[i].innerText=h2[i].innerText.toUpperCase();
    }
    let p=document.getElementsByTagName("p");
    for(let i=0;i<P.length;i++){
        p[i].style.color="red"
        if (i==0 || i==3){
        p.style.color="red"   
        }else if (i==1 || i==4 || i==7){
            p.style.backgroundColor="lightgreen"

        }else if(i==2){
            p.innerText=p.innerText.toUpperCase();
            p.style.backgroundColor="lightblue"


        }else if(i==5){
            p.innerText=p.innerText.toUpperCase();
        }else if(i==6){
            p[i].style.fontFamily="italic"
        }
        
    }

}