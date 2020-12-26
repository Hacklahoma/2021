import React from 'react';
import '../styles/sponsors.scss';
import Section from './Section';

/**
 * Contains all the header needs
 */
const Sponsors = () => (
  <Section>
    <div id="sponsors" className="sponsors">
      <h2>Sponsors</h2>
      <p>Interested in sponsoring? Check out our <a target="_blank" href="/sponsor_packet.pdf">sponsor packet</a>!</p>
      <div className="container">
        <a
          href="https://tailwindapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="tailwind" src={require('../images/sponsors/tailwind.png')} />
        </a>
      </div>
    </div>
  </Section>
);

export default Sponsors;
