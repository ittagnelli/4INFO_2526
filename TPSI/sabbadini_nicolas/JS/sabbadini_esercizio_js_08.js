function aggiungi() {
    let field = document.getElementById("field");
    let select = document.getElementById("priority");
    let gridTask = document.getElementById("grid-task");
    let taskName = document.createElement("div");
    let priority = document.createElement("span");
    let completed = document.createElement("span");
    let remove = document.createElement("span");

    if(field.value.trim() == "") {
        alert("Compilare tutti i campi");
        return 0;
    }

    taskName.classList.add("task");
    priority.classList.add("material-symbols-outlined");
    completed.classList.add("material-symbols-outlined");
    remove.classList.add("material-symbols-outlined");

    taskName.innerText = field.value;
    taskName.classList.add("taskName");

    if(select.value == "bassa") {
        priority.innerText = "south";
        priority.classList.add("green");
    }
    else if(select.value == "media") {
        priority.innerText = "east";
        priority.classList.add("yellow");
    }
    else {
        priority.innerText = "north";
        priority.classList.add("red");
    }

    completed.innerText = "done_outline";
    completed.classList.add("gray");
    remove.innerText = "delete";
    remove.classList.add("gray");

    gridTask.append(taskName, priority, completed, remove);

    field.value = "";
    select.value = "bassa";

    completed.addEventListener("click", function() {
        taskName.classList.toggle("completed");
    });

    remove.addEventListener("click", function() {
        taskName.remove();
        priority.remove();
        completed.remove();
        remove.remove();
    });
}
