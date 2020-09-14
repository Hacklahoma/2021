import React from 'react';
import '../styles/guides.scss';
import Section from './Section';

/**
 * Contains all the header needs
 */
const Guides = () => (
  <Section>
    <div id="guides" className="guides">
      <h2>New to Hackathons?</h2>
      <div className="container">
        <p className="description">Follow these guides and submit it as your first hack! We'll be there for you if you're having trouble. <span>coming soon</span></p>
        <div className="tracks">
          <div href="#" className="track">
            <p className="head">Build a Website</p>
            <p className="body">Use popular JavaScript tools to create a full-stack web app.</p>
          </div>
          <div href="#" className="track">
            <p className="head">Explore Data Science</p>
            <p className="body">Dive into basic applications of artificial intelligence and data science.</p>
          </div>
          <div href="/" className="track">
            <p className="head">Build Bots</p>
            <p className="body">Use Python to create bots for different platforms.</p>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Guides;
