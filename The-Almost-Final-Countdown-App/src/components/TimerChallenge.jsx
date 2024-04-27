import { useRef, useState } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const timer = useRef();
  const dialog = useRef();

  function handleStart() {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerStarted(false);
      setTimerExpired(true);
      dialog.current.open();
    }, targetTime * 1000);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimerStarted(false);
    setTimerExpired(false);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="Lost" />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={!timerStarted ? handleStart : handleStop}>
            {!timerStarted ? "Start" : "Stop"}
          </button>
        </p>
        <p className={!timerStarted ? "" : "active"}>
          {!timerStarted ? "Timer inactive" : "Time is running..."}
        </p>
      </section>
    </>
  );
}
