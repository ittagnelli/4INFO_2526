console.log("ciao")
function add_studente()
{
    let studente = document.getElementById("studente").value;
    let media = document.getElementById("media").value;
    let tabella = document.getElementById("tabella");
    let colNome = document.createElement("tr");
    let colMedia = document.createElement("td");

    colNome.innerText = studente;
    colMedia.innerText = media;

    linea.append(colNome);
    linea.append(colMedia);
    tabella.append(linea);
}

function add_color()
{
    let tabella = document.getElementById("tabella");
    let linee = tabella.children;

    for (let i = 0; i <linee.length; i++)
    {
        if(i % 2 == 0)
            linee[i].classList.add("lineaBlue");
        else
            linee[i].classList.add("lineaRossa");
    }
}

function allBlue()
{
    let tabella = document.getElementById("tabella");
    
}

function bordo()
{
    let tabella = document.getElementById("tabella");
    tabella.classList.toggle("bordo");

}