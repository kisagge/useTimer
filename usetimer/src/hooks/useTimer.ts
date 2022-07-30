/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useRef, useState } from "react";
import { UseTimerReturnType } from "../types/schema";

const useTimer = (
  initialValue: number,
  ms: number,
  isIncrease: boolean
): UseTimerReturnType => {
  const [count, setCount] = useState<number>(initialValue); // Timer Count
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null); // TimerRef to use current of useRef

  const start = useCallback(() => {
    if (timerRef.current !== null) return;
    timerRef.current = setInterval(() => {
      if (isIncrease) setCount((c) => c + 1);
      else setCount((c) => c - 1);
    }, ms);
  }, []);

  const stop = useCallback(() => {
    if (timerRef.current === null) return;
    clearInterval(timerRef.current);
    timerRef.current = null;
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue);
    stop();
  }, []);

  return { count, start, stop, reset };
};

export default useTimer;
