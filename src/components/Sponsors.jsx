import React from "react";
import "../styles/sponsors.scss";
import Section from "./Section";

/**
 * Contains all the header needs
 */
const Sponsors = () => (
  <Section>
    <div id="sponsors" className="sponsors">
      <h2>Sponsors</h2>
      <p>
        Interested in sponsoring? Check out our{" "}
        <a target="_blank" href="/sponsor_packet.pdf">
          sponsor packet
        </a>
        !
      </p>
      <div className="container">
        <a
          href="https://tailwindapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="tailwind"
            src={require("../images/sponsors/tailwind.png")}
          />
        </a>
        <a
          href="https://www.ou.edu/alumni/saa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="saa" src={require("../images/sponsors/saa.png")} />
        </a>
        <a
          href="https://www.ou.edu/sga"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="sga" src={require("../images/sponsors/sga.png")} />
        </a>
        <a
          href="https://www.hobbylobby.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="hobby lobby"
            src={require("../images/sponsors/hobbyLobby.png")}
          />
        </a>
        <a
          href="https://www.paycom.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="paycom" src={require("../images/sponsors/paycom.png")} />
        </a>
      </div>
    </div>
  </Section>
);

export default Sponsors;
