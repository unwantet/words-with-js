const textInp = document.querySelector("#text");
const todoEl = document.querySelector(".todos");
const formEl = document.querySelector("form");

let todos = [];


formEl.addEventListener("submit", e =>{
    e.preventDefault();
    const text = textInp.value;
    if (editTodo) {
        editTodo.text = text;
        editTodo = null;
        textInp.nextElementSibling.textContent = "add";
    }else{
        todos.push({
            id:Math.ceil(Math.random() * 10000),
            text : text
        });
        textInp.value = ""
        renderTodos();

    }

});

function renderTodos () {
    let html = "";
    todos.forEach(todo => {
        html += `<li>${todo.text} <button onclick="deleteTodo(${todo.id})">del</button> <button onclick="editTodoClick(${todo.id})">del</button></li>`;
    });
    todoEl.innerHTML = html;
}


function deleteTodo(id){
    todos = todos.filter(todo => todo.id != id);
    renderTodos();
}


function  editTodoClick(id) {
    const todo = todos.find(todo => todo.id === id);
    editTodo = todo;
    textInp.value = todo.text;
    textInp.nextElementSibling.textContent = "edit";
}