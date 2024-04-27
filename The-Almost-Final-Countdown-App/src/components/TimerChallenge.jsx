import { useRef, useState } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  const timer = useRef();
  const dialog = useRef();

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  if (timeRemaining === 0) {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={!timerActive ? handleStart : handleStop}>
            {!timerActive ? "Start" : "Stop"} Challenge
          </button>
        </p>
        <p className={!timerActive ? "" : "active"}>
          {!timerActive ? "Timer inactive" : "Time is running..."}
        </p>
      </section>
    </>
  );
}
