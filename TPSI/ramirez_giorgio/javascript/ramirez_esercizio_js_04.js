function modifica_stile(){
  let el = document.querySelector("h1");
  el.style.color='red'
  let el2 = document.getElementsByTagName("h2");
  for(let i = 0; i < el2.length; i++){
    el2[i].style.color = 'blue';
    el2[i].style.backgroundColor = 'yellow';
    el2[i].style.fontSize = '40px' ;
    el2[i].innerText = el2[i].innerText.toUpperCase();
  }
  let para1 = document.getElementById('par1')
  para1.style.color = 'red';
  let para4 = document.getElementById('par4')
    para4.style.color = 'red'
  let para2 = document.getElementById('par2')
  para2.style.backgroundColor = 'lightgreen'
  let para5 = document.getElementById('par5')
  para5.style.backgroundColor = 'lightgreen'
  let para8 = document.getElementById('par8')
  para8.style.backgroundColor = 'lightgreen'
  let para3 = document.getElementById('par3')
  para3.innerText = para3.innerText.toUpperCase();
  para3.style.backgroundColor = 'lightblue'
  let para6 = document.getElementById('par6')
  para6.innerText = para6.innerText.toUpperCase();
  let para7 = document.getElementById('par7')
  para7.style.fontStyle = 'italic';

}