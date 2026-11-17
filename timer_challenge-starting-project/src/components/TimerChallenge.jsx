import { useRef } from "react";
import { useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timer = useRef();
  const dialog = useRef();

  let timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
    dialog.current.open();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);

    setTimerStarted(true);
  }

  function handleStop() {
    clearInterval(timer.current);
    setTimerStarted(false);
  }

  return (
    <>
      <ResultModal ref={dialog} result={"LOST"} targetTime={targetTime} />
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You LOST!</p>}
        <p className="challenge-time">{targetTime} second(s)</p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "Active" : undefined}>
          {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
