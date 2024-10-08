import "./App.css";
import SlowComponent from "./SlowComponent";
import Modal from "./Modal";
import { useState, memo, useCallback } from "react";

const MemoizedSlowComponent = memo(function ModifiedSlowComponent({
  time,
  custom,
}) {
  return <SlowComponent time={time} custom={custom} />;
});

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const someFunc = useCallback(() => {}, []);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && <Modal close={() => setIsOpen(false)} />}
      <div>Something Done Here</div>
      <div>Something Done Here</div>
      <MemoizedSlowComponent time={1000} custom={someFunc} />
    </>
  );
}

export default App;
