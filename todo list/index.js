const todoList = document.getElementById('todo-list');

        function addTask() {
            const taskInput = document.getElementById('new-task');
            const taskText = taskInput.value.trim();

            if (taskText === "") return;

            const listItem = document.createElement('li');
            listItem.classList.add('todo-item');
            
            const taskContent = document.createElement('span');
            taskContent.textContent = taskText;
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => deleteTask(listItem);

            listItem.appendChild(taskContent);
            listItem.appendChild(deleteButton);
            todoList.appendChild(listItem);

            taskInput.value = ''; // Clear the input
        }

        function deleteTask(task) {
            todoList.removeChild(task);
        }