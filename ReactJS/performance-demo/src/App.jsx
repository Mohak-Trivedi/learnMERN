import "./App.css";
import useModalDialogue from "./hooks/useModalDialogue";
import Modal from "./Modal";
import SlowComponent from "./SlowComponent";
import { useState } from "react";

function App() {
  const { isOpen, open, close } = useModalDialogue();
  return (
    <>
      <div>Something Done Here</div>
      <button onClick={open}>Open Modal</button>
      {isOpen && <Modal close={close} />}
      <div>Something Done Here</div>
      <SlowComponent />
    </>
  );
}

export default App;
