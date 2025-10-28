document.addEventListener("DOMContentLoaded",init,false);
let idSearch = 0;
let isInSearch = false;
function init(){
    let pulsCerca = document.getElementById("cerca");
    let pulsSalva = document.getElementById("salva");

    pulsCerca.addEventListener("click",cerca);
    pulsSalva.addEventListener("click",salva);
}


function salva(){
    const tabella = document.getElementById("tabella");
    const cognomeO = document.getElementById("cognome");
    const nomeO = document.getElementById("nome");
    const indirizzoO = document.getElementById("indirizzo");
    const telefonoO = document.getElementById("telefono");

    if(cognomeO.value != "" && nomeO.value != "" && indirizzoO.value != "" && telefonoO.value != ""){
        if(isInSearch){
            let rigaDaTrovare = document.getElementById(idSearch);
            let cognomeNuovo = cognomeO.value;
            let nomeNuovo = nomeO.value;
            let indirizzoNuovo = indirizzoO.value;
            let telefonoNuovo = telefonoO.value;
            let tds = rigaDaTrovare.children;
            
            let valoris = [cognomeNuovo,nomeNuovo,indirizzoNuovo,telefonoNuovo];
            for(let i = 0;i<valoris.length;i++){
                tds[i].innerText = valoris[i];
            }
            isInSearch = false;
        }else{
            let tr = document.createElement("tr");
            let cognomeTd = document.createElement("td");
            let nomeTd = document.createElement("td");
            let indirizzoTd = document.createElement("td");
            let telefonoTd = document.createElement("td");
            let rimuoviTd = document.createElement("td")
            let rimuoviBut = document.createElement("button")

            let id = Date.now();
            tr.id = id;
            cognomeTd.innerText = cognomeO.value;
            nomeTd.innerText = nomeO.value;
            indirizzoTd.innerText = indirizzoO.value;
            telefonoTd.innerText = telefonoO.value;
            rimuoviBut.innerText = "Rimuovi";
            rimuoviTd.colSpan = "2";
            rimuoviBut.id = id;

            rimuoviTd.append(rimuoviBut);
            rimuoviTd.addEventListener("click",rimuovi);

            let tds = [cognomeTd,nomeTd,indirizzoTd,telefonoTd,rimuoviTd];
            for(let i = 0;i < tds.length;i++){
                tr.append(tds[i]);
            }
            tabella.append(tr);
        }
        cognomeO.value = "";
        nomeO.value = "";
        indirizzoO.value = "";
        telefonoO.value = "";
        

    }else{
        alert("Inserire tutti i campi");
    }

}

function rimuovi(el){
    let riga = document.getElementById(el.srcElement.id);
    riga.remove();

}

function cerca(){
    const tabella = document.getElementById("tabella");
    let cognomeO = document.getElementById("cognome");
    let nomeO = document.getElementById("nome");
    let indirizzoO = document.getElementById("indirizzo");
    let telefonoO = document.getElementById("telefono");
    if(cognomeO.value == "" && telefonoO.value == ""){
        alert("Per cercare devi inserire o il cognome o il telefono");
        return;
    }
    let righe = tabella.children;
    //console.log(righe);
    for(let i = 1; i < righe.length;i++){
        let riga = righe[i];
        let elementi = riga.getElementsByTagName("td");
        if(elementi[0].innerText == cognomeO.value || elementi[3].innerText == telefonoO.value){
            //console.log("trovato: ", riga.id);

            cognomeO.value = elementi[0].innerText;
            nomeO.value = elementi[1].innerText;
            indirizzoO.value = elementi[2].innerText;
            telefonoO.value = elementi[3].innerText;

            idSearch = riga.id;
            isInSearch = true;
            return;
        }
    }
}