import "./App.css";
import { useState, useCallback } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

function App() {
  const [todos, setTodos] = useState([]);

  function onTodoFormSubmit(value) {
    if (value) {
      setTodos([...todos, { value: value }]);
    }
  }

  function deleteTodoById(value) {
    setTodos(
      todos.filter((todo) => {
        return todo.value !== value;
      })
    );
  }

  const memoDeleteTodoCallback = useCallback(deleteTodoById, [todos]);

  return (
    <>
      <TodoInput onSubmit={onTodoFormSubmit} />
      <TodoList listOfTodos={todos} onDeleteTodo={memoDeleteTodoCallback} />
    </>
  );
}

export default App;
