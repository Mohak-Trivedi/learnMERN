export default function Modal({ setIsOpen }) {
  return (
    <div className="modal">
      <h2>Modal</h2>
      <p>This is a Modal.</p>
      <button onClick={() => setIsOpen(false)}>Close</button>
    </div>
  );
}
