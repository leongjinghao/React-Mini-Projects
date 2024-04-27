import { useRef, useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const timer = useRef();

  function handleStart() {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerStarted(false);
      setTimerExpired(true);
    }, targetTime * 1000);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimerStarted(false);
    setTimerExpired(false);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired ? <p>You lost!</p> : ""}
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
  );
}
