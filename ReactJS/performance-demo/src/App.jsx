import "./App.css";
import SlowComponent from "./SlowComponent";
import Modal from "./Modal";
import { useState, memo, useCallback, useMemo } from "react";
import AnotherSlowComponent from "./AnotherSlowComponent";

// const MemoizedSlowComponent = memo(function ModifiedSlowComponent({
//   time,
//   custom,
//   x,
// }) {
//   return <SlowComponent time={time} custom={custom} x={x} />;
// });

const MemoAnotherComponent = memo(AnotherSlowComponent);
const MemoChild = memo(function Child() {
  return <div>I am a child</div>;
});

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [x, setX] = useState(0);

  // const someFunc = useCallback(() => {}, []);

  // const timeArray = useMemo(() => {
  //   return [1000];
  // }, []);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <button onClick={() => setX(x + 1)}>Increment</button>
      {isOpen && <Modal close={() => setIsOpen(false)} />}
      <div>Something Done Here</div>
      <div>Something Done Here</div>
      {/* <MemoizedSlowComponent time={timeArray} custom={someFunc} x={x} /> */}
      <MemoAnotherComponent>
        <MemoChild />
      </MemoAnotherComponent>
    </>
  );
}

export default App;
