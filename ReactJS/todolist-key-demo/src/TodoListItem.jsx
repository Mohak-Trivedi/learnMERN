import { memo } from "react";

function TodoListItem({ todo }) {
  return (
    <>
      <li>{todo.value}</li>
    </>
  );
}

export default memo(TodoListItem);
