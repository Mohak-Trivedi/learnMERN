import "./App.css";
import { useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

function App() {
  const [todos, setTodos] = useState([{ id: 1, value: "Do Homework" }]);

  function onTodoFormSubmit(value) {
    if (value) {
      setTodos([...todos, { id: todos.length + 1, value: value }]);
    }
  }

  function deleteTodoById(id) {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  }

  return (
    <>
      <TodoInput onSubmit={onTodoFormSubmit} />
      <TodoList listOfTodos={todos} onDeleteTodo={deleteTodoById} />
    </>
  );
}

export default App;
