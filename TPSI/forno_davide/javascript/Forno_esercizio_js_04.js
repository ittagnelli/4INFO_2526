function modifica_stile(){
    let pararossi = document.querySelectorAll("h1");
    for(let i=0; i<pararossi.length; i++){
        pararossi[i].style.color = 'red';
    }
    let parablue = document.querySelectorAll("h2");
    for(let j=0; j<parablue.length; j++){
        parablue[j].style.color = 'blue';
        parablue[j].style.backgroundColor = 'yellow';
        parablue[j].style.fontSize = '40px'
        parablue[j].textContent = parablue[j].textContent.toUpperCase();
    }
    let parrossi = document.getElementById("par1");
    parrossi.style.color = 'red';
    let parrossi2 = document.getElementById("par4");
    parrossi2.style.color = 'red';
    let sfoverde = document.getElementById("par2");
    sfoverde.style.backgroundColor = 'lightgreen';
    let sfoverdi = document.getElementById("par5");
    sfoverdi.style.backgroundColor = 'lightgreen';
    let sfoverdi2 = document.getElementById("par8");
    sfoverdi2.style.backgroundColor = 'lightgreen';
    let sfoblue = document.getElementById("par3");
    sfoblue.style.backgroundColor = 'lightblue';
    sfoblue.textcontent = sfoblue.textContent.toUpperCase();
    let maiu = document.getElementById("par6");
    maiu.textContent = maiu.textContent.toUpperCase();
    let italic = document.getElementById("par7");
    italic.style.fontStyle = 'italic';



}

