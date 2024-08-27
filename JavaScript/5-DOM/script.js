function loadTodos() {
  // This function will load the todos from the browser
  const todos = JSON.parse(localStorage.getItem("todos")) || { todoList: [] };
  console.log(todos);
  return todos;
}

function addTodoToLocalStorage(todoText) {
  const todos = loadTodos();
  todos.todoList.push(todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
}

document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todoInput");
  todoInput.addEventListener("change", (event) => {
    // This callback is fired every time there is a change in the input tag.

    const todoText = event.target.value;

    event.target.value = todoText.trim();
  });

  const submitButton = document.getElementById("addTodo");
  submitButton.addEventListener("click", (event) => {
    // This callback is fired every time the add todo button is clicked

    const todoText = todoInput.value;

    if (todoText == "") {
      alert("Please write something for the todo.");
    } else {
      addTodoToLocalStorage(todoText);
    }
  });

  loadTodos();
});
