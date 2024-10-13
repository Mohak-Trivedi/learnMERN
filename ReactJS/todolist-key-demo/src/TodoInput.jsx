import { useState } from "react";
import Sample from "./Sample";

export default function TodoInput({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  function onFormSubmit(e) {
    e.preventDefault();
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
        <Sample key={Math.floor(Math.random() * 99)} />
      </form>
    </>
  );
}
