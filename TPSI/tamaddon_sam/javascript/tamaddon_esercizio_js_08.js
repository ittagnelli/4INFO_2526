function add() {
  let todo_add = document.getElementById("TODO").value;
  let priority = document.getElementById("priority").value;
  let todo_list = document.querySelector(".todo-list");
  if (todo_add) {
    let priorityClass;
    let priorityIcon;
    if (priority === "Alta") {
      priorityClass = "up";
      priorityIcon = "arrow_upward";
    } else if (priority === "Media") {
      priorityClass = "mid";
      priorityIcon = "arrow_forward";
    } else {
      priorityClass = "down";
      priorityIcon = "arrow_downward";
    }
    let li = document.createElement("li");

    let spanText = document.createElement("span");
    spanText.innerText = todo_add;
    li.append(spanText);

    let spanPriority = document.createElement("span");
    spanPriority.className = "priority material-icons " + priorityClass;
    spanPriority.innerText = priorityIcon;
    li.append(spanPriority);

    let btnDone = document.createElement("button");
    btnDone.className = "done material-icons";
    btnDone.innerText = "done_outline";
    btnDone.onclick = function() {
      li.classList.toggle("completed");
    };
    li.append(btnDone);

    let btnTrash = document.createElement("button");
    btnTrash.className = "trash material-icons";
    btnTrash.innerText = "delete_outline";
    btnTrash.onclick = function() {
      li.remove();
    };
    li.append(btnTrash);

    todo_list.append(li);
    document.getElementById("TODO").value = "";
  } else {
    alert("Inserisci un todo!");
  }
}