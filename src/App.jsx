import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Guides from './components/Guides';
import FAQ from './components/FAQ';
import Sponsors from './components/Sponsors';
import Navbar from './components/Navbar';
import Live from './live/Live';
import Stream from './stream/Stream';

/**
 * Top level of App to organize components
 */
const App = () => (
  <Router>
    <Switch>
      <Route path="/stream">
        <Stream />
      </Route>
      <Route path="/live">
        <Live />
      </Route>
      <Route path="/">
        <div className="app">
          <a
            id="mlh-trust-badge"
            href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=blue"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-red.svg" alt="Major League Hacking 2021 Hackathon Season" />
          </a>
          <Navbar />
          <Header />
          <About />
          <Guides />
          <FAQ />
          <Sponsors />
          <Footer />
        </div>
      </Route>
    </Switch>
  </Router>
);

export default App;
