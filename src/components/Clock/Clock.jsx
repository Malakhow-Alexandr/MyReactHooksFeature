import { useState, useEffect, useRef } from 'react';
import styles from './_Clock.module.scss';

export const Clock = () => {
  const [time, setTime] = useState(new Date());
  const intervalId = useRef(null);

  const stopInterval = () => clearInterval(intervalId.current);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      stopInterval();
    };
  }, []);

  return (
    <div className={styles.container}>
      <p className="clockface">Current time: {time.toLocaleTimeString()} </p>
      <button type="button" onClick={stopInterval}>
        Stop Clock
      </button>
    </div>
  );
};
