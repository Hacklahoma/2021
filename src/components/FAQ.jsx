import React from 'react';
import '../styles/faq.scss';
import Section from './Section';

/**
 * Contains all the header needs
 */
const FAQ = () => (
  <Section>
    <div className="faq">
      <div className="left">
        <h2>Have Questions About Your Hackathon Experience?</h2>
        <p>Contact us anytime:<br /><a href="mailto:team@hacklahoma.org(Hacklahoma Team)">team@hacklahoma.org</a></p>
      </div>
      <div className="right">
        <div className="item"><p>Who can attend?</p></div>
        <div className="item"><p>Does it cost anything?</p></div>
        <div className="item"><p>What should I bring?</p></div>
        <div className="item"><p>Isn't hacking illegal?</p></div>
        <div className="item"><p>Can we team up?</p></div>
        <div className="item"><p>What about COVID-19?</p></div>
      </div>
    </div>
  </Section>
);

export default FAQ;
