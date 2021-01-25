import React, { useEffect, useState } from 'react';
import '../styles/faq.scss';
import AnimateHeight from 'react-animate-height';
import Section from '../components/Section';

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const times = [
  {
    name:     'Opening ceremony',
    time:     new Date('2021-02-06T17:00:00Z'),
    duration: 60,
  },
  {
    name:     'Hacking begins!',
    time:     new Date('2021-02-06T18:00:00Z'),
    duration: 5,
  },
  {
    name:     'Team-building activity',
    time:     new Date('2021-02-06T18:30:00Z'),
    duration: 30,
  },
  {
    name:        'React Workshop with Mark Glose from Paycom',
    description: 'Workshop description',
    time:        new Date('2021-02-06T19:15:00Z'),
    duration:    60,
  },
  {
    name:        'Backend React Workshop with Shelby Huffman from Hacklahoma',
    description: 'Workshop description',
    time:        new Date('2021-02-06T20:30:00Z'),
    duration:    60,
  },
  {
    name:        'HTML Workshop with Jennifer Pham from Hacklahoma',
    description: 'Workshop description',
    time:        new Date('2021-02-06T21:45:00Z'),
    duration:    60,
  },
  {
    name:        'Design Thinking Workshop with Reagan Shirk from Hacklahoma',
    description: 'Workshop description',
    time:        new Date('2021-02-06T23:00:00Z'),
    duration:    60,
  },
  {
    name:        'Cybersec and Bob Ross MS Paint from MLH',
    description: 'Activity description',
    time:        new Date('2021-02-07T00:15:00Z'),
    duration:    60,
  },
  {
    name:        'Jackbox!',
    description: 'Activity description',
    time:        new Date('2021-02-07T02:00:00Z'),
    duration:    60,
  },
  {
    name:        'Online Escape Room',
    description: 'Activity description',
    time:        new Date('2021-02-07T04:00:00Z'),
    duration:    60,
  },
  {
    name:        'Cooking Show',
    description: 'Activity description',
    time:        new Date('2021-02-07T06:00:00Z'),
    duration:    60,
  },
  {
    name:     'Hacking ends!',
    time:     new Date('2021-02-07T18:00:00Z'),
    duration: 5,
  },
  {
    name:     'Closing ceremony',
    time:     new Date('2021-02-07T18:30:00Z'),
    duration: 30,
  },
];

/**
 * Contains all the header needs
 */
const Schedule = () => {
  const [items, setItems] = useState({});
  const [update, setUpdate] = useState(new Date());

  useEffect(() => {
    setTimeout(() => setUpdate(new Date()), 10000);
  }, [update]);

  /**
  * Expands Schedule item
  */
  const handleClick = (e) => {
    const child = e.currentTarget.parentNode;
    const parent = child.parentNode;
    const index = Array.prototype.indexOf.call(parent.children, child);
    // Making copy of object
    const obj = JSON.parse(JSON.stringify(items));
    obj[index] = !items[index];
    setItems(obj);
  };

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
   * Get user's timezone name (ex: CST)
   */
  function getTimezoneName() {
    const today = new Date();
    const short = today.toLocaleDateString(undefined);
    const full = today.toLocaleDateString(undefined, { timeZoneName: 'short' });

    // Trying to remove date from the string in a locale-agnostic way
    const shortIndex = full.indexOf(short);
    if (shortIndex >= 0) {
      const trimmed = full.substring(0, shortIndex) + full.substring(shortIndex + short.length);

      return trimmed.replace(/^[\s,.\-:;]+|[\s,.\-:;]+$/g, '');
    }

    return full;
  }

  /**
   * Decides what component to output based on time
   */
  const timeLogic = () => {
    const results = [];
    let days = [];
    const now = new Date();

    // Iterate through all scheduled times
    times.forEach((val, i) => {
      let day;
      let classes = 'item';

      // Setup classes
      if (val.time < now && now.getTime() < (val.duration * 60000) + val.time.getTime()) {
        classes += ' ongoing';
      } else if (val.time < now) {
        classes += ' completed';
      }

      // Check if a day header has been created
      if (!days[val.time.getDay()]) {
        const obj = {};
        obj[val.time.getDay()] = weekdays[val.time.getDay()];
        day = weekdays[val.time.getDay()];
        days = { ...days, ...obj };
      }

      // Push new day header if needed
      if (day) {
        results.push(<h3 key={`${val.name}-header`}>{day}, {months[val.time.getMonth()]} {val.time.getDate()}</h3>);
      }

      // Push schedule item that has no description
      if (!val.description) {
        results.push(
          <div key={`${val.name}-container`} className={classes}>
            <div className="text"><p><strong>{formatTime(val.time)} </strong>{val.name}</p></div>
          </div>,
        );
      } else {
        // Push an expandable schedule item that has a description
        results.push(
          <div key={val.name} className={`${classes}${items[i + 1] ? ' show' : ''}`}>
            <button onClick={handleClick}>
              <p><strong>{formatTime(val.time)} </strong>{val.name}</p><ExpandIcon />
            </button>
            <AnimateHeight height={`${items[i + 1] ? 'auto' : '0%'}`}>
              <div className="answer">
                <p>{val.description}</p>
              </div>
            </AnimateHeight>
          </div>,
        );
      }
    });

    return <div>{results}</div>;
  };

  return (
    <Section>
      <div id="schedule" className="schedule faq">
        <div>
          <h2>Schedule&nbsp;</h2>
        </div>
        <div className="container right">
          {timeLogic()}
        </div>
        <p className="note">Schedule is updated in real time in your local time zone ({getTimezoneName()})</p>
      </div>
    </Section>
  );
};

/**
 * Expandable icon
 */
const ExpandIcon = () => (
  <div className="expand-icon">
    <div className="horizontal" />
    <div className="vertical" />
  </div>
);

export default Schedule;
