import React from 'react';
import Header from './components/Header';
import About from './components/About';

/**
 * Top level of App to organize components
 */
const App = () => (
  <div className="app">
    <Header />
    <About />
  </div>
);

export default App;
