import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Guides from './components/Guides';
import FAQ from './components/FAQ';
import Sponsors from './components/Sponsors';
import Navbar from './components/Navbar';

/**
 * Top level of App to organize components
 */
const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Guides />
    <FAQ />
    <Sponsors />
    <Footer />
  </div>
);

export default App;
