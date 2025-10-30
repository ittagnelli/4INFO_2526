console.log("funziona");

let somma_importo_globale = 0;
let counter_totale = 0;
let contenitore_dati;
let riga_separatore_elemento;
let totale_complessivo_elemento;

function calcolaTotale() {
    let totale = 0;
    let righeProdotto = document.querySelectorAll('.riga-prodotto');

    
    righeProdotto.forEach(riga => {
        calcolaImportoRiga(riga);
        
        let importoElemento = riga.querySelector('.importo');
        if (importoElemento) {
            let importoStringa = importoElemento.textContent.replace(' \u20ac', '').trim();
            let importoNumerico = parseFloat(importoStringa);
            if (!isNaN(importoNumerico)) {
                totale += importoNumerico;
            }
        }
    });
    
    somma_importo_globale = totale; 

    if (totale_complessivo_elemento) {
        totale_complessivo_elemento.innerHTML = totale.toFixed(2) + ' \u20ac';
    }

    gestisciVisibilitaRighe();
}

function gestisciVisibilitaRighe() {
    let righeProdotto = document.querySelectorAll('.riga-prodotto');
    
    if (righeProdotto.length > 0) {
        riga_separatore_elemento.classList.remove('nascosto-separatore');
    } else {
        riga_separatore_elemento.classList.add('nascosto-separatore');
        
        
        contenitore_dati.style.visibility = 'hidden'; 
        counter_totale = 0; 
    }
}

function aggiornaTotale() {
    counter_totale += 1;
    console.log("counter totale:", counter_totale);

    if (counter_totale == 1) {
        if (contenitore_dati) {
            contenitore_dati.style.visibility = 'visible'; 
        }
    }
    
    calcolaTotale();
}

function calcolaImportoRiga(riga) {
    let inputQty = riga.querySelector('.input-quantita');
    let costoUnitario = parseFloat(riga.getAttribute('data-costo-unitario'));

    if (inputQty && !isNaN(costoUnitario)) {
        let quantita = parseInt(inputQty.value);

        if (quantita < 1 || isNaN(quantita)) {
            quantita = 1;
            inputQty.value = 1; 
        }

        let importoTotale = quantita * costoUnitario;
        let importoElemento = riga.querySelector('.importo');
        if (importoElemento) {
            importoElemento.textContent = importoTotale.toFixed(2) + ' \u20ac';
        }
    }
}

function aggiornaRigaTotale() {
    document.querySelectorAll('.riga-prodotto').forEach(riga => {
        calcolaImportoRiga(riga);
    });
    calcolaTotale(); 
}

function aggiungiProdotto() {
    let prodotto = document.getElementById('prodotto');
    let quantita = document.getElementById('qty');
    let costo = document.getElementById('costo');
    
    let nome_prodotto = prodotto.value.trim();
    let quantita_aggiunta = parseInt(quantita.value);
    let costo_unitario = parseFloat(costo.value);

    if (nome_prodotto == "" || isNaN(quantita_aggiunta) || quantita_aggiunta < 1 || isNaN(costo_unitario) || costo_unitario <= 0) {
        alert("rimepi tutti i campi");
        return;
    }

    let prodottoTrovato = false;
    let righeEsistenti = document.querySelectorAll('.riga-prodotto');
    
    righeEsistenti.forEach(riga => {
        let nomeProdottoEsistente = riga.querySelector('.nome-prodotto').textContent.trim();
        
        if (nomeProdottoEsistente.toLowerCase() === nome_prodotto.toLowerCase()) {
            prodottoTrovato = true;
            let inputQtyEsistente = riga.querySelector('.input-quantita');
            let nuovaQuantita = parseInt(inputQtyEsistente.value) + quantita_aggiunta;
            inputQtyEsistente.value = nuovaQuantita;
            calcolaImportoRiga(riga);
        }
    });

    if (!prodottoTrovato) {
        let importo_finale = (quantita_aggiunta * costo_unitario).toFixed(2);

        let tr = document.createElement('tr');
        tr.classList.add('riga-prodotto');
        tr.setAttribute('data-costo-unitario', costo_unitario.toFixed(2)); 
        
        tr.innerHTML = `
            <td class="nome-prodotto">${nome_prodotto}</td>
            <td><input class="input-quantita" type="number" min="1" value="${quantita_aggiunta}" oninput="aggiornaRigaTotale()" onblur="aggiornaRigaTotale()" /></td>
            <td class="costo-unitario">${costo_unitario.toFixed(2)} &euro;</td>
            <td class="importo">${importo_finale} &euro;</td>
            <td><span class="material-icons icon-remove rimuovi-prodotto" onclick="rimuoviProdotto(this)">remove_shopping_cart</span></td>
        `;

        let rigaInput = document.getElementById('riga-input');
        rigaInput.after(tr);
    }

    prodotto.value = '';
    quantita.value = '1';
    costo.value = '0.01'; 
    
    calcolaTotale();
}


function rimuoviProdotto(element) {
    let rigaDaRimuovere = element.closest('.riga-prodotto');
    if (rigaDaRimuovere) {
        rigaDaRimuovere.remove(); 
        calcolaTotale(); 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    contenitore_dati = document.getElementById('contenitore-dati');
    riga_separatore_elemento = document.getElementById('riga-separatore');
    totale_complessivo_elemento = document.getElementById('totale-complessivo');
    
    gestisciVisibilitaRighe(); 
});