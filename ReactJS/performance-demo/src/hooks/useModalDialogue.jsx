import { useState } from "react";

export default function useModalDialogue() {
  const [isOpen, setisOpen] = useState(false);

  return {
    isOpen,
    open: () => setisOpen(true),
    close: () => setisOpen(false),
  };
}
