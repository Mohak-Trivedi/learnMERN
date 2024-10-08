import "./App.css";
import SlowComponent from "./SlowComponent";
import Modal from "./Modal";
import { useState, memo } from "react";

const MemoizedSlowComponent = memo(function ModifiedSlowComponent({ time }) {
  return <SlowComponent time={time} />;
});

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && <Modal close={() => setIsOpen(false)} />}
      <div>Something Done Here</div>
      <div>Something Done Here</div>
      <MemoizedSlowComponent time={1000} />
    </>
  );
}

export default App;
