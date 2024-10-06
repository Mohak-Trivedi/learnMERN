export default function Modal({ close }) {
  return (
    <div className="modal">
      <h2>Modal</h2>
      <p>This is a Modal.</p>
      <button onClick={close}>Close</button>
    </div>
  );
}
