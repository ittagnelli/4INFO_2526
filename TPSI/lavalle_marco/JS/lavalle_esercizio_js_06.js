function add_user(){
    // variables
    const ul = document.getElementById('lista');
    const nome = document.getElementById('nome').value;
    const media = document.getElementById('Media').value;
    const li = document.createElement("li");

    // function
    li.innerText = nome + "   " + media;
    ul.append(li);
}

function Grassetto(){
    const lista = document.getElementById('lista');
    const li = lista.children;
    for(let i = 0; i < li.length; i++)
        li[i].classList.add("grassetto");
}

function Blue(){
    const lista = document.getElementById('lista');
    const li = lista.children;
    for(let i = 0; i < li.length; i++)
        li[i].classList.add("blue");
}

function Bordo(){
    const lista = document.getElementById("lista");
    lista.classList.toggle("bordo");
}   