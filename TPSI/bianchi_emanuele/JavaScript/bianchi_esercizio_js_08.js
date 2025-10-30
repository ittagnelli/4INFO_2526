document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("inputAttivita");
  const select = document.getElementById("selezionaPriorita");
  const lista = document.getElementById("listaAttivita");
  const bottone = document.getElementById("aggiungiBtn");

  bottone.addEventListener("click", aggiungiAttivita);

  function aggiungiAttivita() {
    const testo = input.value.trim();
    const priorita = select.value;

    if (!testo) {
      alert("Per favore, inserisci un'attività!");
      return;
    }

    const li = document.createElement("li");

    const spanDescrizione = document.createElement("span");
    spanDescrizione.className = "descrizione";
    spanDescrizione.textContent = testo;

    const spanPriorita = document.createElement("span");
    spanPriorita.className = `priorita ${priorita.toLowerCase()}`;
    spanPriorita.textContent = priorita;

    const btnFatto = document.createElement("button");
    btnFatto.className = "azione done material-icons";
    btnFatto.textContent = "done";
    btnFatto.addEventListener("click", () => {
      li.classList.toggle("completata");
    });

    const btnElimina = document.createElement("button");
    btnElimina.className = "azione delete material-icons";
    btnElimina.textContent = "delete";
    btnElimina.addEventListener("click", () => {
      li.remove();
    });

    li.append(spanDescrizione, spanPriorita, btnFatto, btnElimina);
    lista.appendChild(li);

    input.value = "";
  }
});
