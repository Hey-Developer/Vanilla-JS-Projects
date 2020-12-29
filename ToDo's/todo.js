//# Selectors

const todoInput = document.querySelector("#todo-input");
const todoAdd = document.querySelector("#todo-add");
const todoList = document.querySelector(".todo-list");
const filterOptions = document.querySelector(".filter-todo");

//# Storing ToDos
let allTodo = [];
let index = 0;

//# Event Listeners
todoAdd.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOptions.addEventListener("click", filterTodo);
document.addEventListener("DOMContentLoaded", getTodos);

// # Functions

function addTodo() {
    //  Preventing form from submitting-->
    event.preventDefault();

    /* 
                                                                                  Structure we want  when todo button is clicked:
                                                                                   > <div>
                                                                                   >     <li></li>
                                                                                   >     <button>Done</button>
                                                                                   >     <button>Delete</button>
                                                                                   > </div>
                                                                              */

    // Creating Div:
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create Li:
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.id = "index-" + index;

    newTodo.innerText = todoInput.value;
    // Add TODO to local storage:
    saveToLocalStorage(todoInput.value);
    allTodo.push({
        title: todoInput.value,
        isDone: false,
        isDeleted: false,
    });
    index++;

    todoDiv.appendChild(newTodo);

    // Create Check Button:
    const todoDone = document.createElement("button");
    todoDone.innerHTML = "<i class='fas fa-check'></i>";
    todoDone.classList.add("done-btn");
    todoDiv.appendChild(todoDone);

    // Create Trash Button:
    const todoTrash = document.createElement("button");
    todoTrash.innerHTML = "<i class='fas fa-trash'></i>";
    todoTrash.classList.add("trash-btn");
    todoDiv.appendChild(todoTrash);

    // Append the todoDiv to ul in html:
    todoList.appendChild(todoDiv);
    todoInput.value = " ";
}

function deleteCheck(e) {
    const item = e.target;

    // Delete ToDo:
    if (item.classList[0] === "trash-btn") {
        var r = true;
        let id = item.parentElement.firstElementChild.id.split("-")[1];

        if (allTodo[id].isDone == false) {
            r = confirm(
                "This Task Is Uncompleted ! Are You Sure You Want to Delete:"
            );
        }
        if (r === true) {
            // Deleting Animation:
            item.parentElement.classList.add("fall");
            removeLocalTodos(item.parentElement);
            // Now actually remove the element
            item.parentElement.addEventListener("transitionend", () => {
                item.parentElement.remove();
                allTodo[id].isDeleted = "true";
            });
        }
    }

    // Completed ToDo:
    if (item.classList[0] === "done-btn") {
        item.parentElement.classList.toggle("completed");
        let id = item.parentElement.firstElementChild.id.split("-")[1];
        allTodo[id].isDone = "true";
        localStorage.setItem("isDone", true);
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;

            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {}
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

function saveToLocalStorage(todoItem) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todoItem.trim());
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(todoItem) {
    let todos;
    // Check-- HEY do i have already have thing in there.
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo) {
        // Creating Div:
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        // Create Li:
        const newTodo = document.createElement("li");
        newTodo.classList.add("todo-item");
        newTodo.id = "index-" + index;

        newTodo.innerText = todo;
        // Add TODO to local storage:

        allTodo.push({
            title: todo,
            isDone: false,
            isDeleted: false,
        });
        index++;
        let id = newTodo.id.split("-")[1];

        if (allTodo[id].isDone === true) {
            todoDiv.classList.toggle("completed");
        }

        todoDiv.appendChild(newTodo);

        // Create Check Button:
        const todoDone = document.createElement("button");
        todoDone.innerHTML = "<i class='fas fa-check'></i>";
        todoDone.classList.add("done-btn");
        todoDiv.appendChild(todoDone);

        // Create Trash Button:
        const todoTrash = document.createElement("button");
        todoTrash.innerHTML = "<i class='fas fa-trash'></i>";
        todoTrash.classList.add("trash-btn");
        todoDiv.appendChild(todoTrash);

        // Append the todoDiv to ul in html:
        todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todoItem) {
    let todos;
    // Check-- HEY do i have already have thing in there.
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todosIndex = todoItem.children[0].innerText;
    todos.splice(todos.indexOf(" " + todosIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}