document.getElementById("addBtn").addEventListener("click", aggiungiTodo);

function aggiungiTodo() {
  const campoTesto = document.getElementById("todoInput");
  const selezionePriorita = document.getElementById("prioritySelect");
  const lista = document.getElementById("todoList");

  if (campoTesto.value === "" || selezionePriorita.value === "") {
    alert("Inserisci un testo e seleziona una priorità!");
    return;
  }

  const elemento = document.createElement("li");

  const testo = document.createElement("span");
  testo.textContent = campoTesto.value + " ";

  const bottoneTick = document.createElement("button");
  bottoneTick.textContent = "✔";
  bottoneTick.onclick = function() {
    testo.classList.toggle("completato");
  };

  const bottoneRemove = document.createElement("button");
  bottoneRemove.textContent = "Remove";
  bottoneRemove.onclick = function() {
    elemento.remove();
  };

  elemento.appendChild(testo);
  elemento.appendChild(bottoneTick);
  elemento.appendChild(bottoneRemove);

  lista.appendChild(elemento);

  campoTesto.value = "";
  selezionePriorita.value = "";
}


