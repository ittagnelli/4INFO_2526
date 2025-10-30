function add_studente() {
  const table = document.getElementById("lista");
  const nome_str = document.getElementById("nome").value;
  const media_str = document.getElementById("media").value;
  const row = document.createElement("tr");
  row.append(nome_str," - ", media_str);
  table.append(row);
  
}
 
function coloraPariDispari() {
  const table = document.getElementById("lista");
    for (let i = 0; i < table.rows.length; i++) {
        if (i % 2 === 0) {
            table.rows[i].style.color = "blue";
        } else {
            table.rows[i].style.color = "red";
        }
    }
}