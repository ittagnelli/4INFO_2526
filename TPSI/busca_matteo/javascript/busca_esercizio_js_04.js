function modifica_stile(){
    let r1 = document.getElementsByTagName('h1')
    for (let i = 0; i < r1.length; i++) {
        r1[i].style.color = 'red'
    }
    let r2 = document.getElementsByTagName('h2')
    for (let i = 0; i < r2.length; i++) {
        r2[i].style.color = 'blue'
        r2[i].style.backgroundColor = 'yellow'
        r2[i].style.fontSize = '40px'
        r2[i].innerText = r2[i].innerText.toUpperCase()
    }
    par1.style.color = 'red'
    par4.style.color = 'red'
    par2.style.backgroundColor = 'lightgreen'
    par5.style.backgroundColor = 'lightgreen'
    par8.style.backgroundColor = 'lightgreen'
    par3.style.textTransform = 'uppercase'
    par3.style.backgroundColor = 'lightblue'
    par6.style.textTransform = 'uppercase'
    par7.style.fontStyle = 'italic'
}