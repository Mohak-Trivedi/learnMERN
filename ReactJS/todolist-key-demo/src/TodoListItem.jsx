import { memo } from "react";

function TodoListItem({ todo, onDelete }) {
  return (
    <>
      <li>{todo.value}</li>
      <button onClick={() => onDelete(todo.value)}>X</button>
    </>
  );
}

export default memo(TodoListItem);
