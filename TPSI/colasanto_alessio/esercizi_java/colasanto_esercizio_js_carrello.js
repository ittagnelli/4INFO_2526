function add(){
    const input = [
        document.getElementById('prodoo').value,
        document.getElementById('qty').value,
        document.getElementById('costo').value
    ]

    for(var i = 0; i < 3; i++){
        if(input[i] === ''){
            alert('Inserire tutti i valori');
            return 0;
        }
    }

    if(input[1] < 1){
        alert('La quantità deve essere almeno 1');
        return 0;
    }

    const tr = document.createElement('tr');

    
    const td1 = document.createElement('td');
    td1.innerText = input[0];
    tr.appendChild(td1);

    
    const td2 = document.createElement('td');
    const q = document.createElement('input');
    q.type = 'number';
    q.min = 1;
    q.value = input[1];
    q.oninput = function(){ aggiorna(this); };
    td2.appendChild(q);
    tr.appendChild(td2);

    
    const td3 = document.createElement('td');
    td3.innerText = input[2] + ' €';
    tr.appendChild(td3);

    
    const td4 = document.createElement('td');
    td4.className = 'importo';
    td4.innerText = (input[1] * input[2]) + ' €';
    tr.appendChild(td4);

    
    const td5 = document.createElement('td');
    const icona = document.createElement('span');
    icona.className = 'material-icons icon-remove';
    icona.innerText = 'remove_shopping_cart';
    icona.onclick = function(){
        tr.remove();
        totale();
    };
    td5.appendChild(icona);
    tr.appendChild(td5);

    document.getElementById('carrello').children[0].appendChild(tr);

    totale();

    document.getElementById('prodoo').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('costo').value = '';
}

function aggiorna(x){
    const riga = x.parentElement.parentElement;
    const prezzo = riga.children[2].innerText.split(' ')[0];
    const q = x.value;
    if(q < 1){
        alert('Quantità non valida');
        x.value = 1;
    }
    riga.children[3].innerText = (x.value * prezzo) + ' €';
    totale();
}

function totale(){
    const tabella = document.getElementById('carrello').children[0];
    let tot = 0;
    for(var i = 0; i < tabella.children.length; i++){
        const celle = tabella.children[i].children;
        if(celle && celle.length > 3 && celle[3].className == 'importo'){
            const val = celle[3].innerText.split(' ')[0];
            tot = tot + parseFloat(val);
        }
    }
    const righe = document.querySelectorAll('#carrello tr');
    const ultima = righe[righe.length - 1];
    ultima.children[ultima.children.length - 1].innerText = tot + ' €';
}