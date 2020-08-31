/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import '../styles/footer.scss';

/**
 * Contains all the footer links
 */
const Footer = () => {
  /**
   * Sends user to top of page
   */
  function handleTopOfPage(e) {
    if (e.key === 'Enter' || e.type === 'click') {
      document.activeElement.blur();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <div className="footer">
      <div className="container">
        <div className="left">
          <a href="/" className="logo">{}</a>
          <div className="content">
            <a href="https://hacklahoma.org" target="_blank" rel="noopener noreferrer">HACKLAHOMA</a>
            <p>Made with <span>♥</span> in Norman</p>
          </div>
        </div>
        <div className="right">
          <ul>
            <li className="top">Social</li>
            <a href="mailto:team@hacklahoma.org(Hacklahoma Team)" target="_blank" rel="noopener noreferrer"><li>Email</li></a>
            <a href="https://twitter.com/hacklahoma" target="_blank" rel="noopener noreferrer"><li>Twitter</li></a>
            <a href="https://instagram.com/hacklahoma" target="_blank" rel="noopener noreferrer"><li>Instagram</li></a>
            <a href="https://facebook.com/hacklahoma" target="_blank" rel="noopener noreferrer"><li>Facebook</li></a>
          </ul>
          <ul>
            <li className="top">Other</li>
            <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer"><li>Code of Conduct</li></a>
            <a href="https://hacklahoma.org" target="_blank" rel="noopener noreferrer"><li>Hacklahoma</li></a>
            {/* eslint-disable-next-line */}
            <a><li tabIndex="0" onKeyPress={handleTopOfPage} onClick={handleTopOfPage}>Top of Page</li></a>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
