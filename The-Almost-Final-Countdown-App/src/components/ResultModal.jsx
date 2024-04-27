import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(
  ({ targetTime, remainingTime, onReset }, ref) => {
    const dialog = useRef();
    const userWon = remainingTime > 0;
    const formattedRmainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current.showModal();
        },
      };
    });

    return (
      <dialog ref={dialog} className="result-modal" onClose={onReset}>
        <h2>{userWon ? `Your Score: ${score}` : "You Lost"}</h2>
        <p>
          The target time was{" "}
          <strong>
            {targetTime} second{targetTime > 1 ? "s" : ""}.
          </strong>
        </p>
        <p>
          You stopped the timer with{" "}
          <strong>{formattedRmainingTime} seconds left.</strong>
        </p>
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
    );
  }
);

export default ResultModal;
