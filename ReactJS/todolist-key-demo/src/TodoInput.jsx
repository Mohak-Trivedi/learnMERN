import { useState } from "react";

export default function TodoInput({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  function onFormSubmit(e) {
    e.prevent.default();
    onSubmit?.(inputValue);
    setInputValue("");
  }

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Add your todos here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
}
