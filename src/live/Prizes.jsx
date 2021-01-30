import React from 'react';
import Section from '../components/Section';
import '../styles/prizes.scss';

/**
 * List of prizes and challenges
 */
const Prizes = () => (
  <Section>
    <div id="prizes" className="prizes">
      <h2>Prizes&nbsp;</h2>
      <div className="prize-container">
        <div className="prize-item">
          <div className="prize-item-imgcon">
            <img
              alt="First Place"
              src={require('../images/prizes/first_place_trophy.png')}
              className="prize-item-img"
            />
          </div>
          <div className="prize-item-content">
            <h3 className="center">First Place</h3>
            <p>
              This prize will be given to the team or individual who places
              first, overall. Each team member will receive an <b>iPad</b>.
              <br />
              <br />
            </p>
          </div>
        </div>

        <div className="prize-item">
          <div className="prize-item-imgcon">
            <img
              alt="Second Place"
              src={require('../images/prizes/second_place_trophy.png')}
              className="prize-item-img"
            />
          </div>
          <div className="prize-item-content">
            <h3 className="center">Second Place</h3>
            <p>
              This prize will be given to the team or individual who places
              second, overall. Each team member of the winning team will
              receive a <b>Nintendo Switch Lite</b>.
            </p>
          </div>
        </div>

        <div className="prize-item">
          <div className="prize-item-imgcon">
            <img
              alt="Third Place"
              src={require('../images/prizes/third_place_trophy.png')}
              className="prize-item-img"
            />
          </div>
          <div className="prize-item-content">
            <h3 className="center">Third Place</h3>
            <p>
              This prize will be given to the team or individual who places
              third, overall. Each team member of the winning team will
              receive a <b>Curved Monitor</b>.
              <br />
              <br />
            </p>
          </div>
        </div>

        <div className="prize-item">
          <div className="prize-item-imgcon">
            <img
              alt="Best Beginner"
              src={require('../images/prizes/best_beginner.png')}
              className="prize-item-img"
            />
          </div>
          <div className="prize-item-content">
            <h3 className="center">Best Beginner</h3>
            <p>
              This category rewards the best beginner hack. To be considered
              for this prize, the hack must be created by first time hackers.
              Each team member of the winning team will receive a <b>Drone</b>
              .
            </p>
          </div>
        </div>

        <div className="prize-item">
          <div className="prize-item-imgcon">
            <img
              alt="Best Design"
              src={require('../images/prizes/best_design.png')}
              className="prize-item-img"
            />
          </div>
          <div className="prize-item-content">
            <h3 className="center">Best Design</h3>
            <p>
              This category rewards the best overall designed hack. Each team
              member of the winning team will receive a{' '}
              <b>Mechanical Keyboard and Google Nest Mini</b>.
            </p>
          </div>
        </div>

        <div className="prize-item">
          <div className="prize-item-imgcon">
            <img
              alt="Best Theme"
              src={require('../images/prizes/best_theme.png')}
              className="prize-item-img"
            />
          </div>
          <div className="prize-item-content">
            <h3 className="center">Best Theme</h3>
            <p>
              This category rewards the best theme for a hack. Each team
              member of the winning team will receive a{' '}
              <b>Blue Yeti Microphone</b>.<br />
              <br />
            </p>
          </div>
        </div>

        <div className="prize-item">
          <div className="prize-item-imgcon">
            <img
              alt="Best Domain"
              src={require('../images/prizes/domain.png')}
              className="prize-item-img"
            />
          </div>
          <div className="prize-item-content">
            <h3 className="center">Best Domain</h3>
            <p>
              Register a .tech, .space, or .online domain name using
              Domain.com during the weekend. Each team may submit one entry
              per person on the team. Each winning team member will receive a{' '}
              <b>
                PowerSquare Qi Wireless Phone Charger & Domain.com Backpack
              </b>
              .
            </p>
          </div>
        </div>

        <div className="prize-item">
          <div className="prize-item-imgcon">
            <img
              alt="Google Cloud"
              src={require('../images/prizes/google_cloud.png')}
              className="prize-item-img"
            />
          </div>
          <div className="prize-item-content">
            <h3 className="center">Best Google Cloud</h3>
            <p>
              Build your hackathon project with a suite of secure storage,
              powerful compute, and integrated data analytics products
              provided by Google Cloud. See full list of products here:
              g.co/cloud. Each winning team member will receive a{' '}
              <b>Google Branded Parkland Academy Backpack</b>.
            </p>
          </div>
        </div>

        <div className="prize-item">
          <div className="prize-item-imgcon">
            <img
              alt="Best Theme"
              src={require('../images/prizes/digikey.png')}
              className="prize-item-img"
            />
          </div>
          <div className="prize-item-content">
            <h3 className="center">Best Hardware Hack</h3>
            <p>
              Using your preferred hardware or hardware emulator, build a
              hack for your chance to win a
              <b> Grove Beginner Kit, with Arduino Uno R3 included</b>.
              We select two winning teams for this category. Each winning
              team member will receive a prize!
            </p>
          </div>
        </div>
      </div>
      <p className="note">Prizes limited to residents of the United States only</p>
    </div>
  </Section>
);

export default Prizes;