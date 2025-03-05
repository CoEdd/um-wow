// components/LaunchCountdown.js
import React, { useEffect, useState } from "react";
import Countdown from "./Countdown";
import styles from "../styles/LaunchCountdown.module.css";  // ✅ Import the dedicated CSS file

const LaunchCountdown = () => {
  const targetDate = new Date("2025-10-14T08:00:00").getTime();
  const [time, setTime] = useState(0);
  const [remainTime, setRemainTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [prevRemainTime, setPrevRemainTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [shouldFlip, setShouldFlip] = useState(false); // Track if flip should occur

  useEffect(() => {
    // Calculate initial time on the client side
    const currentTime = new Date().getTime();
    const initialTime = Math.max(0, Math.floor((targetDate - currentTime) / 1000));
    setTime(initialTime);
    setShouldFlip(true); // Trigger flip on mount
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time => time !== 0 ? time - 1 : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log("Previous Time:", prevRemainTime);
    console.log("Current Time:", remainTime);
    setPrevRemainTime(remainTime);  // Store previous state
    setRemainTime({
      days: Math.floor(time / 86400),
      hours: Math.floor((time % 86400) / 3600),
      minutes: Math.floor((time % 3600) / 60),
      seconds: time % 60
    });
  }, [time]);

  return (
    <section className={styles.countdownSection}>
      <div className={styles.countdownHeaderText}>
        OUR UM - WOW STARTS IN
      </div>
      {time > 0 ? (
        <div className={styles.countdownContainer}>
          <Countdown prev={prevRemainTime.days} count={remainTime.days} label={'days'} shouldFlip={shouldFlip} />
          <Countdown prev={prevRemainTime.hours} count={remainTime.hours} label={'hours'} shouldFlip={shouldFlip} />
          <Countdown prev={prevRemainTime.minutes} count={remainTime.minutes} label={'minutes'} shouldFlip={shouldFlip} />
          <Countdown prev={prevRemainTime.seconds} count={remainTime.seconds} label={'seconds'} shouldFlip={shouldFlip} />
        </div>
      ) : (
        <div className={styles.countdownComplete}>The event has started!</div>
      )}
    </section>
  );
};

export default LaunchCountdown;