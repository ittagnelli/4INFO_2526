function modifica_stile() {
    let paraRossi = document.querySelectorAll("h1");
    console.log(paraRossi.length);

    for (let i = 0; i < paraRossi.length; i++) {
        paraRossi[i].style.color = "red";
    }

    let paraGialli = document.querySelectorAll("h2");
    
    for (let i = 0; i < paraGialli.length; i++) {
        let h2 = paraGialli[i];
        h2.style.boxShadow = "0px 4px 10px blue"; 
        h2.style.backgroundColor = "yellow";
        h2.style.borderRadius = "40px";
        h2.style.borderWidth = "40px"; 
        h2.style.borderStyle = "solid"; 
        h2.style.borderColor = "black"; 
        h2.style.textTransform = "uppercase";
    }

    let paragrafo4 = document.querySelector("#par4");
    paragrafo4.style.color="rosso";
    }
