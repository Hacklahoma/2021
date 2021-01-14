import React from 'react';
import Navbar from './Navbar';
import '../styles/live.scss';
import Header from './Header';

/**
 * Top level of App to organize components
 */
const Live = () => (
  <div className="live">
    <Navbar />
    <Header />
  </div>
);

export default Live;