import "./App.css";
import Modal from "./Modal";
import SlowComponent from "./SlowComponent";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <div>Something Done Here</div>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      <div>Something Done Here</div>
      <SlowComponent />
    </>
  );
}

export default App;
