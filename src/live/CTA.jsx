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
        <p className="instruct">Join our Discord Server and follow instructions to link your application to check in.</p>
      </div>
      <div className="step">
        <h2>2. </h2>
        <p className="instruct">Register to our Devpost so that you can submit your project and be judged.</p>
      </div>
      <div className="step">
        <h2>3. </h2>
        <p className="instruct">Read the Hacker Handbook to guide you through Hacklahoma 2021!</p>
      </div>
    </div>
  </div>
);

export default CTA;
