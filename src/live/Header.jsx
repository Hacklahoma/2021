import React, { useEffect, useState } from 'react';
import '../styles/header.scss';

/**
 * Contains all the header needs
 */
const Header = () => {
  // Feb 6, 2021 @ 12:00pm CST
  const startDate = new Date('2021-02-06T18:00:00Z');
  // 24hrs after start date
  const endDate = new Date(startDate.getTime() + 24 * 60 * 60 * 1000);

  const [tick, setTick] = useState(0);
  const [countdown, setCountdown] = useState({ days: -1, hours: -1, mins: -1, secs: -1 });
  const [hacking, setHacking] = useState(new Date() > startDate);

  /**
   * Updates countdown
   */
  const updateCountdown = () => {
    const now = new Date();
    let date;
    if (hacking) {
      date = endDate;
    } else {
      date = startDate;
    }
    const dis = date - now;
    const days = Math.floor(dis / (1000 * 60 * 60 * 24));
    const hours = Math.floor((dis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((dis % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((dis % (1000 * 60)) / 1000);
    if (dis > 0) {
      setCountdown({ days, hours, mins, secs });
    } else {
      setCountdown({ days: 0, hours: 0, mins: 0, secs: 0 });
    }
  };

  /**
   * Generates a random tick
   */
  const regenerateTick = () => {
    setTick(Math.random());
  };

  useEffect(() => {
    if (
      !hacking
      && countdown.days === 0
      && countdown.hours === 0
      && countdown.mins === 0
      && countdown.secs === 0
    ) {
      setHacking(true);
    }

    updateCountdown();
  // eslint-disable-next-line
  }, [tick]);

  useEffect(() => {
    regenerateTick();

    setInterval(() => {
      regenerateTick();
    }, 1000);
  }, []);

  /**
   * Formats a number to a string with two digits
   * ex: 2 will return 02
   */
  const format = (num) => (`0${num}`).slice(-2);

  return (
    <div className="header">
      <div className="wires">
        <div className="tv">
          <div className="content">
            <div className="container">
              <h1>HACKING {hacking ? 'ENDS' : 'BEGINS'} IN...</h1>
              <div className="countdown">
                {!hacking
                && (
                  <>
                    <div className="time">
                      <h2>{format(countdown.days)}</h2>
                      <p>days</p>
                    </div>
                    <h2 className="separator">:</h2>
                  </>
                )}
                <div className="time">
                  <h2>{format(countdown.hours)}</h2>
                  <p>hours</p>
                </div>
                <h2 className="separator">:</h2>
                <div className="time">
                  <h2>{format(countdown.mins)}</h2>
                  <p>mins</p>
                </div>
                <h2 className="separator">:</h2>
                <div className="time">
                  <h2>{format(countdown.secs)}</h2>
                  <p>secs</p>
                </div>
              </div>
            </div>
            <div className="timer-and-pin">
              <div className="timer" />
              <div className="pin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
