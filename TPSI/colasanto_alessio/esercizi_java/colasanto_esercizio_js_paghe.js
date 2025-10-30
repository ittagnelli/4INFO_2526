function add(){
    const input = [document.getElementById('dipartimento').value,document.getElementById('cognome').value,document.getElementById('nome').value,document.getElementById('mese').value,document.getElementById('importo').value,' €']

    for(var i = 0; i < 5; i++){
        if(input[i] === ''){
            alert('Inserire Elementi Mancani')
            return 0
        }
    }

    const tr = document.createElement('tr')

    for(var i = 0 ; i <= 5;i++){
        const td = document.createElement('td')
        td.innerText = input[i]
        tr.appendChild(td)
    }

    document.getElementById('pagheinfo').children[0].appendChild(tr)
}

function totale(){
    const table = document.getElementById('pagheinfo').children[0]

    const len =  table.children.length

    let totale = 0;

    for(var i = 0; i < len;i++){
        totale = totale + parseInt(table.children[i].children[4].innerHTML)
    }

    document.getElementById('TOTALE').innerText = totale + ' ' + '€'
}

function media(){
    const table = document.getElementById('pagheinfo').children[0]

    const len =  table.children.length

    if(len >= 2){
        let media = 0;

        for(var i = 0; i < len;i++){
            media = media + parseInt(table.children[i].children[4].innerHTML)
        }

        media = media/len

        document.getElementById('MEDIA').innerText = media + ' ' + '€'
    }
}