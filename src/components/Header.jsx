import React from 'react';
import '../styles/header.scss';

/**
 * Contains all the header needs
 */
const Header = () => (
  <div className="header">
    <div className="wires">
      <div className="tv">
        <div className="content">
          <div className="head-date">
            <p>February 6-7, 2021</p>
            <h1>HACKLAHOMA 2021</h1>
          </div>
          <p className="subtitle">
            Attend a 24 hour <strong>virtual</strong> innovation marathon with
            the <strong>University of Oklahoma</strong>!
          </p>
          <p className="thanks">THANKS FOR HACKING WITH US!</p>
          <p className="thanks">SEE YOU NEXT YEAR!</p>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
