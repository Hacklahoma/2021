import React, { useEffect, useState } from 'react';
import { times } from '../live/Schedule';
import '../styles/stream.scss';

const sponsors = [
  {
    image:    'tailwind.png',
    duration: 25,
  },
  {
    image:    'paycom.png',
    duration: 10,
  },
  {
    image:    'flywheelEnergy.png',
    duration: 10,
  },
  {
    image:    'clevyr.png',
    duration: 5,
  },
  {
    image:    'saa.png',
    duration: 5,
  },
  {
    image:    'sga.png',
    duration: 5,
  },
];

/**
 * Contains the call to action box
 */
const Stream = () => {
  // Feb 6, 2021 @ 12:00pm CST
  const startDate = new Date('2021-02-06T18:00:00Z');
  // 24hrs after start date
  const endDate = new Date(startDate.getTime() + 24 * 60 * 60 * 1000);

  const [tick, setTick] = useState(new Date());
  const [countdown, setCountdown] = useState({ hours: -1, mins: -1, secs: -1 });
  const [nextEvent, setNextEvent] = useState(times[0]);
  const [sponsor, setSponsor] = useState(sponsors[0]);

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

  /**
   * Updates the sponsor on screen
   */
  const updateSponsor = () => {
    const now = new Date();
    const timeInSecs = Math.floor(now.getTime() / 1000);
    const duration = sponsor.duration;
    let i = sponsors.indexOf(sponsor) + 1;
    if (timeInSecs % duration === 0) {
      if (sponsors.length - 1 < i) {
        i = 0;
      }
      setSponsor(sponsors[i]);
    }
  };

  /**
   * Updates next event
   */
  const updateNextEvent = () => {
    const now = new Date();
    times.forEach((val) => {
      if (val.time < now) {
        setNextEvent(val);
      }
    });
  };

  useEffect(() => {
    updateCountdown();
    updateSponsor();
    updateNextEvent();
    // eslint-disable-next-line
  }, [tick]);

  useEffect(() => {
    setInterval(() => {
      setTick(new Date());
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
            <div className="text">
              <p className="time"><strong>{formatTime(val.time)} </strong></p>
              <p>{val.name}</p>
            </div>
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
        </div>
        <div className="sponsor">
          <h2 className="gradient-text">SPONSORED BY</h2>
          <div className="image">
            {/* eslint-disable-next-line import/no-dynamic-require */}
            <img src={`${require(`../images/sponsors/${sponsor.image}`)}`} alt={sponsor.image} />
          </div>
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
