import "./App.css";
import ButtonWithModal from "./ButtonWithModal";
import SlowComponent from "./SlowComponent";
import RefactorComponent from "./RefactorComponent";

function App() {
  return (
    <>
      <RefactorComponent>
        <>
          <div>Something Done Here</div>
          <ButtonWithModal />
          <div>Something Done Here</div>
          <SlowComponent />
        </>
      </RefactorComponent>
    </>
  );
}

export default App;
