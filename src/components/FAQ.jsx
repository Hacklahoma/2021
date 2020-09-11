import React from 'react';
import '../styles/faq.scss';
import Section from './Section';

/**
 * Contains all the header needs
 */
const FAQ = () => {
  /**
  * Expands FAQ item
  */
  const handleClick = (e) => {
    const parent = e.currentTarget.parentNode;
    parent.classList.toggle('show');
  };

  return (
    <Section>
      <div className="faq">
        <div className="left">
          <h2>Have Questions About Your Hackathon Experience?</h2>
          <p>Contact us anytime:<br /><a href="mailto:team@hacklahoma.org(Hacklahoma Team)">team@hacklahoma.org</a></p>
        </div>
        <div className="right">
          <div className="item">
            <button onClick={handleClick}><p>Who can attend?</p><ExpandIcon /></button>
            <div className="answer">
              This is an answer
            </div>
          </div>
          <div className="item">
            <button onClick={handleClick}><p>Does it cost anything?</p><ExpandIcon /></button>
            <div className="answer">
              This is an answer
            </div>
          </div>
          <div className="item">
            <button onClick={handleClick}><p>What should I bring?</p><ExpandIcon /></button>
            <div className="answer">
              This is an answer
            </div>
          </div>
          <div className="item">
            <button onClick={handleClick}><p>Isn't hacking illegal?</p><ExpandIcon /></button>
            <div className="answer">
              This is an answer
            </div>
          </div>
          <div className="item">
            <button onClick={handleClick}><p>Can we team up?</p><ExpandIcon /></button>
            <div className="answer">
              This is an answer
            </div>
          </div>
          <div className="item">
            <button onClick={handleClick}><p>What about COVID-19?</p><ExpandIcon /></button>
            <div className="answer">
              This is an answer
            </div>
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
