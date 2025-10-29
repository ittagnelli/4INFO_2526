window.onload = function() {
  const prodInput = document.getElementById("product");
  const qtyInput = document.getElementById("quantity");
  const priceInput = document.getElementById("price");
  const addButton = document.getElementById("add");
  const cartBody = document.querySelector("#cart tbody");
  const totalButton = document.getElementById("total");
  const totalValue = document.getElementById("totalValue");

  // Aggiunge prodotto al carrello
  addButton.onclick = function() {
    let prod = prodInput.value.trim();
    let qty = parseInt(qtyInput.value);
    let price = parseFloat(priceInput.value);

    if(prod === "") {
      alert("Inserisci il nome del prodotto");
      return;
    }
    if(isNaN(qty) || qty < 1) {
      alert("La quantità deve essere 1 o superiore");
      return;
    }
    if(isNaN(price) || price < 0) {
      alert("Inserisci un prezzo valido");
      return;
    }

    // Crea una nuova riga nella tabella
    let row = cartBody.insertRow();

    // Cella Nome prodotto
    let cellProd = row.insertCell();
    cellProd.textContent = prod;

    // Cella Quantità con input modificabile
    let cellQty = row.insertCell();
    let qtyInputRow = document.createElement("input");
    qtyInputRow.type = "number";
    qtyInputRow.min = "1";
    qtyInputRow.value = qty;
    cellQty.appendChild(qtyInputRow);

    // Cella prezzo unitario (non modificabile)
    let cellPrice = row.insertCell();
    cellPrice.textContent = price.toFixed(2);

    // Cella prezzo totale (quantità * prezzo unitario)
    let cellTotal = row.insertCell();
    cellTotal.textContent = (qty * price).toFixed(2);

    // Cella rimuovi prodotto
    let cellRemove = row.insertCell();
    let btnRemove = document.createElement("button");
    btnRemove.textContent = "Rimuovi";
    cellRemove.appendChild(btnRemove);

    // Aggiorna prezzo totale riga e totale carrello al cambiare quantità
    qtyInputRow.onchange = function() {
      if(qtyInputRow.value < 1) qtyInputRow.value = 1;
      let newQty = parseInt(qtyInputRow.value);
      let newTotal = newQty * price;
      cellTotal.textContent = newTotal.toFixed(2);
      calculateTotalCart();
    };

    // Rimuove riga e aggiorna totale carrello
    btnRemove.onclick = function() {
      cartBody.removeChild(row);
      calculateTotalCart();
    };

    // Aggiorna totale carrello dopo aggiunta
    calculateTotalCart();

    // Pulisce campi input
    prodInput.value = "";
    qtyInput.value = 1;
    priceInput.value = 0;
  };

  // Calcola e mostra il totale carrello
  totalButton.onclick = calculateTotalCart;

  function calculateTotalCart() {
    let total = 0;
    for(let i=0; i < cartBody.rows.length; i++) {
      let row = cartBody.rows[i];
      let val = parseFloat(row.cells[3].textContent);
      total += val;
    }
    totalValue.textContent = "Totale carrello: €" + total.toFixed(2);
  }
};
