import React, { Component } from 'react';

import ProfileImg from './assets/profile_img.png';

export default class extends Component {

  render() {
    return <div className="vsmpar40">
      <div className="title-section">
        <h1>Sebastian Vargr</h1>
        <small>(Formerly Kasper jensen)</small>
        <p>Developing' Developer</p>
        <img src={ProfileImg} alt="picture of me" />
      </div>
      <div className="contact-section">
        <h2>Contact</h2>
        Email: <a href="mailto:sebb@sebb.dk">sebb@sebb.dk</a><br />
        tlf: <a href="tel:+45 28491314">+45 28491314</a><br />
        <br />
        <a href="https://www.linkedin.com/in/sebbdk/" rel="noreferrer" target="_blank">LinkedIn</a>
      </div>
    </div>
  }

}