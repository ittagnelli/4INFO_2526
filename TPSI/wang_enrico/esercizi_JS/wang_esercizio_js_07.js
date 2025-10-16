function salva(){

    const table = document.getElementById("tavella")
    let tr = document.createElement("tr");

    let surname = document.getElementById("tdsurname").value;
    let name = document.getElementById("tdname").value;
    let address = document.getElementById("tdaddress").value;
    let number = document.getElementById("tdphone").value;

    if(surname != "" && name != "" && address != "" && number != ""){
        let tdsurname = document.createElement("td");
        let tdname = document.createElement("td");
        let tdaddress = document.createElement("td");
        let tdnumber = document.createElement("td");
        let tdbutton = document.createElement("td");
        let button = document.createElement("button");

        tdsurname.innerText = surname;
        tdname.innerText = name;
        tdaddress.innerText = address;
        tdnumber.innerText = number;

        button.innerText = "Rimuovi";
        tdbutton.append(button);
        tr.append(tdsurname,tdname,tdaddress,tdnumber,tdbutton);
        table.append(tr);
        
        document.getElementById("tdsurname").value = "";
        document.getElementById("tdname").value = "";
        document.getElementById("tdaddress").value = "";
        document.getElementById("tdphone").value = "";

        button.addEventListener("click",function(){
            rimuovi(tr)
        });
        
    }else{
        alert("Uno o più campi sono vuoti");
    }
}

function rimuovi(tr){
    const table = document.getElementById("tavella");
    table.removeChild(tr);
}

function cerca() {
    let surname = document.getElementById("tdsurname").value;
    let phone = document.getElementById("tdphone").value;

    let table = document.getElementById("tavella");
    let righe = table.getElementsByTagName("tr");
    let buttonAggiorna = document.getElementById("agg");
    let cellePresenti = null;

    for (let i = 1; i < righe.length; i++) { 
        let celle = righe[i].getElementsByTagName("td"); 

        let cellSurname = celle[0].innerText; 
        let cellPhone = celle[3].innerText; 

        if (cellSurname === surname || cellPhone === phone) {
            console.log("ciao")
            document.getElementById("tdsurname").value = cellSurname;
            document.getElementById("tdphone").value = cellPhone;
            document.getElementById("tdname").value = celle[1].innerText;
            document.getElementById("tdaddress").value = celle[2].innerText;

            cellePresenti = celle;
        }else{
            alert("non presente nella lista oppure campi vuoti");
        }

    }
    buttonAggiorna.addEventListener("click",function(){
        aggiorna(cellePresenti);
    });
}

function aggiorna(celle){
    console.log("ciao");
    celle[0].innerText = document.getElementById("tdsurname").value;
    celle[1].innerText = document.getElementById("tdname").value;
    celle[2].innerText = document.getElementById("tdaddress").value;
    celle[3].innerText = document.getElementById("tdphone").value;
}