document.getElementById("add-btn").addEventListener("click", addTask);

function addTask() {
    const input = document.getElementById("todo-input");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskItem = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", deleteTask);

    taskItem.textContent = taskText;
    taskItem.appendChild(deleteBtn);

    document.getElementById("todo-list").appendChild(taskItem);

    input.value = ""; // Clear input field
}

function deleteTask(e) {
    const taskItem = e.target.parentElement;
    taskItem.remove();
}
