

function add_studente() {
    const ul = document.getElementById("lista");
    const cognome_str = document.getElementById("cognome").value;
    const li = document.createElement("li");
    li.innerText = cognome_str;
    ul.append(li);
    console.log("Studente %s creato", cognome_str);
}

function studenti_grassetto() {
    const ul = document.getElementById("lista");
    const li_items = ul.children;
    for(var i = 0; i < li_items.length; i++) {
        var li = li_items[i];
        li.classList.add("grassetto");
    }
}

function studenti_blue() {
    const ul = document.getElementById("lista");
    const li_items = ul.children;
    for(var i = 0; i < li_items.length; i++) {
        var li = li_items[i];
        li.classList.add("blue");
    }
}

function studenti_bordo() {
    const ul = document.getElementById("lista");
    ul.classList.toggle("bordo");
}
