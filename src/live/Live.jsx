import React from 'react';
import Navbar from './Navbar';
import '../styles/live.scss';
import Header from './Header';
import CTA from './CTA';
import Schedule from './Schedule';
import Sponsors from '../components/Sponsors';

/**
 * Top level of App to organize components
 */
const Live = () => (
  <div className="live">
    <Navbar />
    <Header />
    <CTA />
    <Schedule />
    <Sponsors />
  </div>
);

export default Live;
