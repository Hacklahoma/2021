/* eslint-disable max-len */
import React, { useState } from 'react';
import '../styles/faq.scss';
import AnimateHeight from 'react-animate-height';
import Section from './Section';

/**
 * Contains all the header needs
 */
const FAQ = () => {
  const [items, setItems] = useState({});

  /**
  * Expands FAQ item
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

  return (
    <Section>
      <div id="faq" className="faq">
        <div className="left">
          <h2>Have Questions About Your Hackathon Experience?</h2>
          <p>Contact us anytime:<br /><a href="mailto:team@hacklahoma.org(Hacklahoma Team)">team@hacklahoma.org</a></p>
        </div>
        <div className="right">
          <div className={`item ${items[0] ? 'show' : ''}`}>
            <button onClick={handleClick}><p>Who can attend?</p><ExpandIcon /></button>
            <AnimateHeight height={`${items[0] ? 'auto' : '0%'}`}>
              <div className="answer">
                <p>Any student over the age of 18 can participate, regardless of major, background, or skill level.</p>
              </div>
            </AnimateHeight>
          </div>
          <div className={`item ${items[1] ? 'show' : ''}`}>
            <button onClick={handleClick}><p>Does it cost anything?</p><ExpandIcon /></button>
            <AnimateHeight height={`${items[1] ? 'auto' : '0%'}`}>
              <div className="answer">
                <p>Admissions is completely free for all students!</p>
              </div>
            </AnimateHeight>
          </div>
          <div className={`item ${items[2] ? 'show' : ''}`}>
            <button onClick={handleClick}><p>Do I need any experience?</p><ExpandIcon /></button>
            <AnimateHeight height={`${items[2] ? 'auto' : '0%'}`}>
              <div className="answer">
                <p>No experience is needed. Whether you're a coder, an artist, or a writer, you'll get to work with various mentors, attend workshops, interact with companies, and learn alongside fellow participants.</p>
              </div>
            </AnimateHeight>
          </div>
          <div className={`item ${items[3] ? 'show' : ''}`}>
            <button onClick={handleClick}><p>What is a "hack"?</p><ExpandIcon /></button>
            <AnimateHeight height={`${items[3] ? 'auto' : '0%'}`}>
              <div className="answer">
                <p>A hack is something that is jury-rigged inelegantly but effectively, usually as a temporary solution to a problem. Like duct taping a hole in a sinking boat to keep it afloat.</p>
              </div>
            </AnimateHeight>
          </div>
          <div className={`item ${items[4] ? 'show' : ''}`}>
            <button onClick={handleClick}><p>Can we team up?</p><ExpandIcon /></button>
            <AnimateHeight height={`${items[4] ? 'auto' : '0%'}`}>
              <div className="answer">
                <p>We encourage everyone to work with a team! Teams may contain up to 4 people. We will also be offering a team-building session at the beginning of the hacking period.</p>
              </div>
            </AnimateHeight>
          </div>
          <div className={`item ${items[5] ? 'show' : ''}`}>
            <button onClick={handleClick}><p>What about COVID-19?</p><ExpandIcon /></button>
            <AnimateHeight height={`${items[5] ? 'auto' : '0%'}`}>
              <div className="answer">
                <p>Because your safety is our top priority, we have decided to convert to an online format for Hacklahoma 2021. We hope to bring you the same exciting experience.</p>
              </div>
            </AnimateHeight>
          </div>
        </div>
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

export default FAQ;
