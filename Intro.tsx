import * as React from 'react';
import nisad_img from './assets/nisad_img.svg';
export default function Intro() {
  return (
    <div className="intro-container">
      <div className="intro-img">
        <img src={nisad_img} alt="nisad img" />
      </div>
      <div className="intro-content">
        <header>
          Hi there! I'm <b>Nisad</b>
        </header>
        <p>
          I am a UX Designer with 5 years of engineering experience in
          automotive R&D and pinch of music production; passionate about visual
          design, formula1 and football.
          <br />
          <br />
          Currently looking to pursue higher education (graduate) in the field
          of User Experience / Information
        </p>
      </div>
    </div>
  );
}
