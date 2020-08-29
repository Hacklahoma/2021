import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

/**
 * Top level of App to organize components
 */
const App = () => (
  <div className="app">
    <Header />
    <About />
    <Footer />
  </div>
);

export default App;
