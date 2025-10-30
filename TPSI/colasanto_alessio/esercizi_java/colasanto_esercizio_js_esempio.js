function add_studente() {
  const ul = document.getElementById("lista"); //prevelo l'oggetto <ul> dal DOM tramite id
  const cognome_str = document.getElementById("cognome").value; //accedo al valore del campo text
  const li = document.createElement("li"); //creo un nuovo elemento <li>
  li.innerText = cognome_str; //imposto il testo del list item con il cognome inserito dall'utente
  ul.append(li); //facciamo l'append del nuovo <li> su <ul>
}