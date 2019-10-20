import React, { useState, useEffect } from "react";
import { number } from "prop-types";

interface IProps {
  times: number;
  interval: number;
}

const Ticker: React.FC<IProps> = props => {
  const [ticker, setTicker] = React.useState(0);
  const [isTick, setIsTick] = useState(false);
  let interval: any = null;

  useEffect(() => {
    if (ticker) {
      tick();
    }
    return () => {
      clearInterval(interval);
    };
  }, [ticker]);

  const tick = () => {
    // reset();
    setIsTick(true);
    interval = setInterval(() => {
      console.log(ticker);
      if (ticker < props.times) {
        setTicker(ticker => ticker + 1);
      } else {
        setIsTick(false);
        clearInterval(interval);
      }
    }, props.interval);
  };

  const reset = () => {
    setTicker(0);
    clearInterval(interval);
  };

  return (
    <div>
      <span style={{ fontSize: 100 }}>{ticker}</span>
      <button onClick={tick} disabled={isTick}>
        Tick!
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Ticker;
