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

function grassetto() {
    const table = document.getElementById("lista");
    for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].classList.add("grassetto");
    }
}

function blue() {
    const table = document.getElementById("lista");
    for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].classList.add("bblue");
    }
}
function bordo() {
    const table = document.getElementById("lista");
    if (table.classList.contains("border")) {
        table.classList.remove("border");
        table.classList.add("noborder"); 
    } else {
        table.classList.remove("noborder");
        table.classList.add("border");
    }
  }