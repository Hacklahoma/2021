import React from 'react';
import '../styles/section.scss';

/**
 * Contains all the header needs
 */
const Section = ({ children }) => (
  <div className="section">
    <div className="container">
      {children}
    </div>
  </div>
);

export default Section;
