import { useState, useEffect } from "react";
import Button from "../Button";
// Clock numbers => minutes, seconds
// Start button
// Stop button
// Reset button (reset clock)
export default function StopWatch() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [toggleClock, setClockToggle] = useState(false);

  const handleToggleClock = () => setClockToggle(!toggleClock);

  const handleReset = () => {
    setClockToggle(false);
    setMinutes(0);
    setSeconds(0);
  };

  useEffect(() => {
    if (toggleClock) {
      const intervalId = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);
    }
  }, [toggleClock, seconds]);

  useEffect(() => {
    if (toggleClock) {
      setInterval(() => {
        setMinutes(minutes + 1);
      }, 5 * 1000);
    }
  }, [toggleClock, minutes]);

  return (
    <>
      <div>
        {minutes} : {seconds}
      </div>
      <div>
        <Button
          onClick={handleToggleClock}
          text={!toggleClock ? "Start" : "Stop"}
        />
        <Button onClick={handleReset} text="reset" />
      </div>
    </>
  );
}
