import "./App.css";
import ButtonWithModal from "./ButtonWithModal";
import SlowComponent from "./SlowComponent";
import { useState } from "react";

function App() {
  const [x, setX] = useState(0);
  return (
    <>
      <button onClick={() => setX(x + 1)}>Increment x</button>
      <div>Something Done Here</div>
      <ButtonWithModal />
      <div>Something Done Here</div>
      <SlowComponent />
      {x}
    </>
  );
}

export default App;
