import Modal from "./Modal";
import useModalDialogue from "./hooks/useModalDialogue";

export default function ButtonWithModal() {
  const { isOpen, open, close } = useModalDialogue();

  return (
    <>
      <button onClick={open}>Open Modal</button>
      {isOpen && <Modal close={close} />}
    </>
  );
}
