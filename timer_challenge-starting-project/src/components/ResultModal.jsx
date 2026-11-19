import { useRef } from "react";
import { useImperativeHandle } from "react";
import { createPortal } from "react-dom";

export default function ResultModal({
  targetTime,
  ref,
  remainingTime,
}) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = (1 - (remainingTime / targetTime) * 1000) * 100;

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="result-modal">
      <h2>{userLost ? "You lost" : `Your score ${score}`}</h2>
      <p>
        The target time was <strong>{targetTime}</strong> second(s){" "}
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
