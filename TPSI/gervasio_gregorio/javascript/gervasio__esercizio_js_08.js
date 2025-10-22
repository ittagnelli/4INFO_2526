let n_elem=0
let arraytodo = [];
let arraydelB = [];
let arraystate = [];
let nuovoDiv = "";

document.getElementById("addelem").addEventListener("click", function() {
    var state = document.getElementById("label").value;
    var todo = document.getElementById("text").value;

    if (n_elem < 5){
        nuovoDiv = document.createElement("div");
        nuovoDiv.class = "parte_text";
        nuovoDiv.textContent = todo;
        arrayElementi.push(nuovoDiv);
        nuovoDiv = document.createElement("div");
        nuovoDiv.class = "stato";
        nuovoDiv.textContent = text;
        arraystate.push(nuovoDiv);
        nuovoDiv = document.createElement("button");
        nuovoDiv.textContent = "ellimina";
        nuovoDiv.class = "bottone";
        arraydelB.push(nuovoDiv);
        n_elem+=1
    }
    else{
        alert("non hai piu spazzio nella lista")
    }

    for (x in Range(0,n_elem)){
        arraytodo[x].id = "elem" + (x);
        
    }

    for (x in Range(0,n_elem)){
        arraystate[x].id = "elem" + (x);
        
    }

    for (x in Range(0,n_elem)){
        arraydelB[x].id = "del" + (x);
        
    }

    });

document.getElementByClassName("bottone").addEventListener("click", function() {
    for (i in Range(0,n_elem)){
        document.getElementById("del"+(i)).addEventListener("click", function() {
            arraydelB[i].remove();
            arraytodo[i].remove();
            arraystate[i].remove();
            arraydelB[i].splice(i, i);
            arraytodo[i].splice(i, i);
            arraystate[i].splice(i, i);
            for (x in Range(0,n_elem)){
                arraytodo[x].id = "elem" + (x);
        
            }

            for (x in Range(0,n_elem)){
                arraystate[x].id = "elem" + (x);
        
            }

            for (x in Range(0,n_elem)){
                arraydelB[x].id = "del" + (x);
        
            }
        });
    }

});
