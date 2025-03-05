// components/Countdown.js
import React, { useMemo } from "react";
import styles from '../styles/CountdownBlock.module.css';
import cn from 'classnames';

const Countdown = ({ prev = 0, count = 0, label, shouldFlip }) => {
  const padPrev = useMemo(() => {
    return String(prev || 0).padStart(2, '0');
  }, [prev]);

  const padCount = useMemo(() => {
    return String(count || 0).padStart(2, '0');
  }, [count]);

  return (
    <div className={styles.countdown}>
      <div className={styles.countdownBlockBackface}>
        <div className={styles.countdownBlock}>
          <div className={cn(styles.top, shouldFlip ? styles.flip : '')}>
            {padPrev}
          </div>
          <div className={styles.top}>
            {padCount}
          </div>
          <div className={cn(styles.bottom, shouldFlip ? '' : styles.flip)}>
            {padPrev}
          </div>
          <div className={styles.bottom}>
            {padCount}
          </div>
          <div className={styles.countdownBlockOverlay}></div>
          <div className={styles.countdownBlockSide}></div>
        </div>
      </div>
      <p className={styles.label}>
        {label}
      </p>
    </div>
  );
};

export default Countdown;