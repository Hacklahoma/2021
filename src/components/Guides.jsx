import React from 'react';
import '../styles/guides.scss';
import Section from './Section';

/**
 * Contains all the header needs
 */
const Guides = () => (
  <Section>
    <div className="guides">
      <h2>New to Hackathons?</h2>
      <div className="container">
        <p className="description">Follow these guides and submit it as your first hack! We'll be there for you if you're having trouble.</p>
        <div className="tracks">
          <a href="/" className="track">
            <p className="head">Build a Website</p>
            <p className="body">Use popular JavaScript tools to create a full-stack web app.</p>
          </a>
          <a href="/" className="track">
            <p className="head">Build a Desktop Application</p>
            <p className="body">Create a cross-platform desktop app using ElectronJS.</p>
          </a>
          <a href="/" className="track">
            <p className="head">Build Bots</p>
            <p className="body">Use Python to create bots for different platforms.</p>
          </a>
        </div>
      </div>
    </div>
  </Section>
);

export default Guides;
