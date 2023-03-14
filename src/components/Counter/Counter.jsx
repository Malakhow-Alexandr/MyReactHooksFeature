import { useState, useEffect } from 'react';

import styles from './_Counter.module.scss';

export default function Counter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handlerCounterAIncrement = () => {
    setCounterA(prevState => prevState + 1);
  };
  const handlerCounterBIncrement = () => {
    setCounterB(prevState => prevState + 1);
  };

  useEffect(() => {
    const totalClicks = counterA + counterB;

    document.title = `Total counter clicks ${totalClicks}`;
  }, [counterA, counterB]);

  return (
    <div className={styles.counterContainer}>
      <button
        className={styles.btn}
        type="button"
        onClick={handlerCounterAIncrement}
      >
        Counter A clicked {counterA} times
      </button>

      <button
        className={styles.btn}
        type="button"
        onClick={handlerCounterBIncrement}
      >
        Counter A clicked {counterB} times
      </button>
    </div>
  );
}
