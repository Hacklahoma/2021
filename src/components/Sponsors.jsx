import React from 'react';
import '../styles/sponsors.scss';
import Section from './Section';

/**
 * Contains all the header needs
 */
const Sponsors = () => (
  <div>
    <Section>
      <div id="sponsors" className="sponsors">
        <h2>Sponsors</h2>
        <div className="container">
          <div className="tier tier1">
            <a
              href="https://tailwindapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="tailwind"
                src={require('../images/sponsors/tailwind.png')}
              />
            </a>
          </div>
          <div className="tier tier2">
            <a
              href="https://www.paycom.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="paycom"
                src={require('../images/sponsors/paycom.png')}
              />
            </a>
            <a
              href="http://www.flywheelenergy.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="flywheel energy"
                src={require('../images/sponsors/flywheelEnergy.png')}
              />
            </a>
            <a
              href="https://www.ou.edu/alumni/saa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="saa" src={require('../images/sponsors/saa.png')} />
            </a>
          </div>
          <div className="tier tier3">
            <a
              href="https://www.clevyr.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="clevyr"
                src={require('../images/sponsors/clevyr.png')}
              />
            </a>
            <a
              href="https://www.hobbylobby.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="hobby lobby"
                src={require('../images/sponsors/hobbyLobby.png')}
              />
            </a>
            <a
              href="https://www.ou.edu/sga"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="sga" src={require('../images/sponsors/sga.png')} />
            </a>
          </div>
        </div>
      </div>
    </Section>
    <Section>
      <div id="partners" className="sponsors">
        <h2>Partners</h2>
        <div className="container">
          <div className="tier tier2">
            <a
              href="https://www.echoar.xyz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="echoAR"
                src={require('../images/sponsors/echoAR.png')}
              />
            </a>
            <a
              href="https://www.stickermule.com/unlock?ref_id=0539570701&utm_source=sponsorship&utm_campaign=mlh-sponsorship-2019&utm_medium=referral"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="stickermule"
                src={require('../images/sponsors/stickerMule.png')}
              />
            </a>
            <a href="https://mlh.io" target="_blank" rel="noopener noreferrer">
              <img alt="mlh" src={require('../images/sponsors/mlh.png')} />
            </a>
          </div>
        </div>
      </div>
    </Section>
  </div>
);

export default Sponsors;
