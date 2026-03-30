const addTodoButtunElement = document.querySelector("button#todo-add-btn")
const todoTitleInputElement = document.querySelector("input#todo-title"); 
const todoDueDateInputElement = document.querySelector("input#todo-due-date"); 
const todoStatusCheckboxElement = document.querySelector("input#todo-status"); 
const todoDisplayTableElement = document.querySelector("table#todo-table")

let todos = [];

const refreshDisplay = () => {
  todoDisplayTableElement.querySelector('tbody').innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const newTableRowElement = document.createElement("tr");

    const todoIdTableDataElement = document.createElement("td");
    todoIdTableDataElement.textContent = String(i + 1);

    const todoTitleTableDataElement = document.createElement("td");
    todoTitleTableDataElement.textContent = todos[i].title;

    const todoDueDateTableDataElement = document.createElement("td");
    todoDueDateTableDataElement.textContent = todos[i].dueDate;

    const todoStatusTableDataElement = document.createElement("td");

    const todoStatusEditButtonElement = document.createElement("button");
    todoStatusEditButtonElement.textContent = todos[i].isDone ? "DONE" : "TO DO";
    todoStatusEditButtonElement.addEventListener('click', () => {
      todos[i].isDone = !todos[i].isDone;
      refreshDisplay(); 
    });

    const todoDeleteButtonElement = document.createElement("button");
    todoDeleteButtonElement.textContent = "DELETE";
    todoDeleteButtonElement.disabled = !todos[i].isDone;
    todoDeleteButtonElement.addEventListener('click', () => {
      todos = todos.filter(x => x != todos[i]);
      refreshDisplay(); 
    });

    todoStatusTableDataElement.appendChild(todoStatusEditButtonElement);
    todoStatusTableDataElement.appendChild(todoDeleteButtonElement);

    newTableRowElement.appendChild(todoIdTableDataElement);
    newTableRowElement.appendChild(todoTitleTableDataElement);
    newTableRowElement.appendChild(todoDueDateTableDataElement);
    newTableRowElement.appendChild(todoStatusTableDataElement);

    todoDisplayTableElement.querySelector('tbody').appendChild(newTableRowElement);
  }
};

const addTodo = () => {
  const newTodoTitle = todoTitleInputElement.value;
  const newTodoDueDate = todoDueDateInputElement.value;
  const newTodoStatus = todoStatusCheckboxElement.checked;

  const newTodo = {
    title: newTodoTitle,
    dueDate: newTodoDueDate,
    isDone: newTodoStatus,
  };

  todos.push(newTodo);

  refreshDisplay();
}

addTodoButtunElement.addEventListener('click', addTodo);
