document.getElementById("addbutton").addEventListener("click", addTodo);

function addTodo() {
  const campoTesto = document.getElementById("todoInput");
  const selezionePriorita = document.getElementById("prioritySelect");
  const lista = document.getElementById("todoList");


  const elemento = document.createElement("li");

  const testo = document.createElement("span");
  testo.textContent = campoTesto.value + " ";

  const bottoneTick = document.createElement("button");
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

}
