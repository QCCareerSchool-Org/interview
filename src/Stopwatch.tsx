import { useEffect, useState, type FC, type MouseEventHandler } from 'react';

/**
 * The `Stopwatch` component below is supposed to:
 *
 * - Display the number of seconds elapsed since "Start" was clicked,
 *   updating once per second.
 * - Pause the count when "Stop" is clicked, and resume from where it left
 *   off when "Start" is clicked again.
 * - Reset the elapsed time back to `0` when "Reset" is clicked.
 *
 * It doesn't behave that way — after about a second it gets stuck instead
 * of continuing to count up. Diagnose the bug and fix the component so
 * that it matches the behavior described above.
 *
 * The layout and styling are not being judged.
 */
export const Stopwatch: FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    console.log('timer started');

    const id = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    return () => clearInterval(id);
  }, [isRunning]);

  const handleReset: MouseEventHandler<HTMLButtonElement> = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div>
      <p>{seconds}s</p>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
