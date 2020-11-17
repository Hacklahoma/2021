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
      <p style={{ color: '#bbb', fontStyle: 'italic', marginTop: '14px' }}>It's quiet here...</p>
    </div>
  </Section>
);

export default Sponsors;
