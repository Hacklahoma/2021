import React from 'react';
import '../styles/footer.scss';

/**
 * Contains all the footer links
 */
const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="left">
        <a href="/" className="logo">{}</a>
        <div className="content">
          <a href="https://hacklahoma.org" target="_blank" rel="noopener noreferrer">HACKLAHOMA</a>
          <p>Made with <span>♥</span> in Norman</p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
