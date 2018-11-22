import React, { Component } from 'react';

import styles from './index.css';
import Intro from './parts/intro';
import Experience from './parts/experience';
import Skills from './parts/skills';
import Portfolio from './parts/portfolio';
import Contact from './parts/contact';

function getStyles(styles) {
  return typeof styles === 'object' ? '' : <style type="text/css">{styles}</style>;
}

export class Index extends Component {
  render() {
    return (
      <div>
        {getStyles(styles)}
        <div className="v-section vcol vsmrow">
          <div className="vsmlcol">
            <Contact />
          </div>

          <div>
            <Intro />
            <div className="pbbreak"></div>
            <Experience />
          </div>
        </div>
        
        <Skills />
        <Portfolio />
      </div>
    );
  }
}

export default Index;