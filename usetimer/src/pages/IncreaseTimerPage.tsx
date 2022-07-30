import { useState, useEffect } from "react";
import useTimer from "../hooks/useTimer";

const MAX_COUNT = 0;

const IncreaseTimerPage = () => {
  // Increase Timer State
  const [increaseMinutes, setIncreaseMinutes] = useState<number>(0);
  const [increaseSeconds, setIncreaseSeconds] = useState<number>(0);
  // Increase Timer hook
  const {
    count: iCount,
    start: iStart,
    stop: iStop,
    reset: iReset,
  } = useTimer(0, 1000, true);
  // Increase Timer function
  const increaseTimer = () => {
    const checkMinutes = Math.floor(iCount / 60);
    const minutes = checkMinutes % 60;
    const seconds = iCount % 60;
    setIncreaseSeconds(seconds);
    setIncreaseMinutes(minutes);
  };
  // Increase Timer button state
  const [iStartBtnState, setIStartBtnState] = useState<boolean>(true);
  const [iStopBtnState, setIStopBtnState] = useState<boolean>(false);
  const [iResetBtnState, setIResetBtnState] = useState<boolean>(false);
  // Increase Timer button handle
  const handleIncreaseTimerStartClick = () => {
    if (iCount === MAX_COUNT) return;
    iStart();
    setIStartBtnState(false);
    setIStopBtnState(true);
    setIResetBtnState(true);
  };
  const handleIncreaseTimerStopClick = () => {
    iStop();
    setIStopBtnState(false);
    setIStartBtnState(true);
  };
  const handleIncreaseTimerResetClick = () => {
    iReset();
    setIStartBtnState(true);
    setIStopBtnState(false);
    setIResetBtnState(false);
  };
  // Timer useEffect
  useEffect(increaseTimer, [iCount]);
  useEffect(() => {
    if (iCount >= MAX_COUNT) {
      iStop();
      setIStopBtnState(false);
    }
  }, [iCount, iStop]);
  return (
    <>
      <div>
        <h2>[Increase Timer] - Set Max Count : {MAX_COUNT}</h2>
        <h3>
          {String(increaseMinutes).padStart(2, "0")}:
          {String(increaseSeconds).padStart(2, "0")}
        </h3>
        <button
          type="button"
          onClick={handleIncreaseTimerStartClick}
          disabled={!iStartBtnState}
        >
          Start
        </button>
        <button
          type="button"
          onClick={handleIncreaseTimerStopClick}
          disabled={!iStopBtnState}
        >
          Stop
        </button>
        <button
          type="button"
          onClick={handleIncreaseTimerResetClick}
          disabled={!iResetBtnState}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default IncreaseTimerPage;
