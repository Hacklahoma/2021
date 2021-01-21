import React, { useEffect, useState } from 'react';
import { times } from '../live/Schedule';
import '../styles/stream.scss';

/**
 * Contains the call to action box
 */
const Stream = () => {
  // Feb 6, 2021 @ 12:00pm CST
  const startDate = new Date('2021-02-06T18:00:00Z');
  // 24hrs after start date
  const endDate = new Date(startDate.getTime() + 24 * 60 * 60 * 1000);

  const [countdown, setCountdown] = useState({ hours: -1, mins: -1, secs: -1 });
  const [nextEvent, setNextEvent] = useState(times[0]);

  /**
   * Updates countdown
   */
  const updateCountdown = () => {
    const now = new Date();
    const dis = endDate - now;
    const hours = Math.floor(dis / (1000 * 60 * 60));
    const mins = Math.floor((dis % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((dis % (1000 * 60)) / 1000);
    if (dis > 0) {
      setCountdown({ hours, mins, secs });
    } else {
      setCountdown({ hours: 0, mins: 0, secs: 0 });
    }
  };

  useEffect(() => {
    updateCountdown();

    setInterval(() => {
      updateCountdown();
      times.forEach((val) => {
        const now = new Date();
        if (val.time < now) {
          setNextEvent(val);
        }
      });
    }, 1000);
    // eslint-disable-next-line
  }, []);

  /**
   * Formats a number to a string with two digits
   * ex: 2 will return 02
   */
  const format = (num) => (`0${num}`).slice(-2);

  /**
   * Formats a number to a string with two digits
   * ex: 2 will return 02
   */
  const formatTime = (time) => {
    let m = time.getMinutes();
    m = (`0${m}`).slice(-2);
    let dd = 'AM';
    let h = time.getHours();
    if (h >= 12) {
      h -= 12;
      dd = 'PM';
    }
    if (h === 0) {
      h = 12;
    }
    return `${h}:${m} ${dd}`;
  };

  /**
   * Decides what component to output based on time
   */
  const renderTimes = (saturday) => {
    const results = [];
    const now = new Date();

    // Iterate through all scheduled times
    times.forEach((val) => {
      if (
        (saturday && val.time.getDay() === 6)
      || (!saturday && val.time.getDay() === 0)
      ) {
        let classes = 'item';

        // Setup classes
        if (val.time < now) {
          classes += ' completed';
        }

        results.push(
          <div key={`${val.name}-container`} className={classes}>
            <div className="text"><p><strong>{formatTime(val.time)} </strong>{val.name}</p></div>
          </div>,
        );
      }
    });

    return <div className="day">{results}</div>;
  };

  return (
    <div id="stream" className="stream">
      <div className="info">
        <div className="countdown">
          <h2 className="gradient-text">HACKING ENDS IN</h2>
          <div className="timer">
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
        <div className="next-event">
          <h2 className="gradient-text">NEXT EVENT</h2>
          <p className="time">{formatTime(nextEvent.time)}</p>
          <p className="name">{nextEvent.name}</p>
          <p className="description">{nextEvent.description}</p>
        </div>
      </div>
      <div className="schedule">
        <div className="times">
          <div>
            <h2>Saturday</h2>
            {renderTimes(true)}
          </div>
          <div>
            <h2>Sunday</h2>
            {renderTimes(false)}
          </div>
        </div>
        <p className="note">Schedule is in Central Standard Time</p>
      </div>
    </div>
  );
};
export default Stream;
