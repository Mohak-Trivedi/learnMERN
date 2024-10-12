import { memo } from "react";

function TodoListItem({ todo, onDelete }) {
  return (
    <>
      <li>{todo.value}</li>
      <button onClick={() => onDelete(todo.id)}>X</button>
    </>
  );
}

export default memo(TodoListItem);
