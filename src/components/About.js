import React from "react";
import laptop from '../assets/laptop.png';
import cursor from '../assets/cursor.png'
import email from '../assets/email.png'
import call from '../assets/call.png'

export const About = () => {
  return (
    <section className="containers" id="about">
      <h2 className="titlle">About</h2>
      <div className="contexts">
        <img
            className="lappy"
            src={laptop}
            alt="a laptop"
        />
        <ul className="about2">
          <li className="about1">
            <img src={cursor} alt="icon" className="cursoor"/>
            <div className="styles">
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className="about1">
            <img src={email} alt="icon" className="cursoor" />
            <div className="styles">
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className="about1">
            <img src={call} alt="icon" className="cursoor" />
            <div className="styles">
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};