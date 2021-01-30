import React from 'react';
import '../styles/about.scss';

/**
 * Contains the call to action box
 */
const CTA = () => (
  <div id="cta" className="cta about">
    <div className="box">
      <h2>What YOU Need To Do</h2>
      {/* eslint-disable-next-line max-len */}
      <div className="step">
        <h2>1. </h2>
        <p className="instruct discord">
          <span>
            Join our{' '}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord Server
            </a>{' '}
            and follow the instructions to check in.
          </span> Will be announced soon...
        </p>
      </div>
      <div className="step">
        <h2>2. </h2>
        <p className="instruct">
          Register to our{' '}
          <a
            href="https://hacklahoma21.devpost.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Devpost
          </a>{' '}
          so that you can submit your project and be judged.
        </p>
      </div>
      <div className="step">
        <h2>3. </h2>
        <p className="instruct">
          Read the{' '}
          <a href="/hacker_handbook.pdf" target="_blank" rel="noopener noreferrer">
            Hacker Handbook
          </a>{' '}
          to guide you through Hacklahoma 2021!
        </p>
      </div>
    </div>
  </div>
);

export default CTA;
