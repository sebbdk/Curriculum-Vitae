/*
* @Author: Kasper Sebb' brandt
* @Date:   2018-10-23 19:54:04
* @Last Modified by:   Kasper Sebb' brandt
* @Last Modified time: 2018-11-09 22:10:56
*/
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import './index.css';

const aboutMe = `
My name is Sebastian Vargr, a mostly' autodidact developer from Copenhagen, Denmark.
I enjoy jogging, making games, building more physical things like e-boards, GPU rigs, 3d-printers etc. in my workshop.

I have been developing web-applications since 2007, and have been around the stack and back.
In short i have no problem jumping between debbuggin a legacy AngularJS app, 
setting up new docker images, and writing/extending restful API's, 
while juggeling the websites load metrics like, time to interactive, and kb'size budgets. 

Having been a freelancer for a few years i have also gotten a good understanding of balancing 
time, maintainebillity, and performance budgets to get the best posible product with availeble resources.

Topics that excite me include things like serverside SPA rendering, GraphQL, state-management, performance-budgets, web-assembly, and so on.
`;

export class Index extends Component {

  componentDidMount() {
    console.log('Mount index!!');
  }

  render() {
    return (
      <div className="vt-index page-wrapper vrow">
        
        <div>
          <div className="vsmpar20">
            <div className="title-section">
              <h1>Sebastian Vargr</h1>
              <p>Developer</p>
              <img src="https://placebear.com/300/300" />
            </div>
            <div className="contact-section">
              <h2>Contact</h2>
              Email: <a href="mailto:sebb@sebb.dk">sebb@sebb.dk</a><br />
              tlf: <a href="tel:+45 28491314">+45 28491314</a><br />
              <br />
              <a href="https://www.linkedin.com/in/sebbdk/" target="_blank">LinkedIn</a>
            </div>
          </div>
        </div>

        <div>
          <h2 className="section-title">Hi there!</h2>
          <div className="profile-section">
            <ReactMarkdown source={aboutMe} />
          </div>

          <h2 className="section-title">Experience</h2>
          <div className="experience-section">
            <div className="v-col-12">
              <div className="experience">
                <div className="v-col-12 v-col-sm-2"><img src="https://placebear.com/50/50" /></div>
                <div className="v-col-12 v-col-sm-10">
                  <b>Senior frontend consultant at Saxobank</b>
                  <small>Jan 2018 - Dec 2018 * 1 Year</small>
                  <p>Optimizing and developing on their public facing websites.</p>              
                </div>
              </div>
            </div>

            <div className="v-col-12">
              <div className="experience vmal0">
                <div className="v-col-12 v-col-sm-2"><img src="https://placebear.com/50/50" /></div>
                <div className="v-col-12 v-col-sm-10">
                  <b>Senior frontend consultant at Nordea</b>
                  <small>Jul 2016 - Jan 2018 * 1 year 7 months</small>
                  <p></p>
                </div>
              </div>
            </div>

            <div className="v-col-12">
              <div className="experience">
                <div className="v-col-12 v-col-sm-2"><img src="https://placebear.com/50/50" /></div>
                <div className="v-col-12 v-col-sm-10">
                  <b>Business owner at Entity51</b>
                  <small>Nov 2013 - Present * 5 years</small>
                  <p></p>
                </div>
              </div>
            </div>

            <div className="v-col-12">
              <div className="experience vmal0">
                <div className="v-col-12 v-col-sm-2"><img src="https://placebear.com/50/50" /></div>
                <div className="v-col-12 v-col-sm-10">
                  <b>Developer at Nodes</b>
                  <small>Dec 2009 - Oct 2013 * 3 years 11 months</small>
                  <p></p>
                </div>
              </div>
            </div>

            <div className="v-col-12">
              <div className="experience">
                <div className="v-col-12 v-col-sm-2"><img src="https://placebear.com/50/50" /></div>
                <div className="v-col-12 v-col-sm-10">
                  <b>Developer at Decaro</b>
                  <small>June 2007 - July 2009 * 2 years 2 months</small>
                  <p></p>
                </div>
              </div>
            </div>

            <div className="v-col-12">
              <div className="experience vmal0">
                <div className="v-col-12 v-col-sm-2"><img src="https://placebear.com/50/50" /></div>
                <div className="v-col-12 v-col-sm-10">
                  <b>Webintegrator</b>
                  <small>June 2007 - July 2008</small>
                  <p>Studied generic webdeveloment, not limited to but including coding, UI design, and project management.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="section-title">Human languages</h2>
          <ul className="skills-section">
            <li className="v-skill v-col-sm-6"><span>Danish</span></li>
            <li className="v-skill v-col-sm-6"><span>English</span></li>
          </ul>


          <h2 className="section-title">Programming languages and variations</h2>
          <ul className="skills-section">
            <li className="v-skill"><span>Javascript / ES6+</span></li>
            <li className="v-skill"><span>Typescript</span></li>
            <li className="v-skill"><span>Actionscript 3</span></li>
            <li className="v-skill"><span>PHP</span></li>
            <li className="v-skill"><span>C#</span></li>
            <li className="v-skill"><span>Java</span></li>
            <li className="v-skill"><span>HTML5</span></li>
            <li className="v-skill"><span>CSS3</span></li>
            <li className="v-skill"><span>Sass</span></li>
            <li className="v-skill"><span>LESS</span></li>
            <li className="v-skill"><span>PostCSS</span></li>
            <li className="v-skill"><span>JSON</span></li>
            <li className="v-skill"><span>XML</span></li>
          </ul>

            
          <h2 className="section-title">Tools & databases</h2>
          <ul className="skills-section">
            <li className="v-skill"><span>Git</span></li>
            <li className="v-skill"><span>NodeJS</span></li>
            <li className="v-skill"><span>Unity3D</span></li>
            <li className="v-skill"><span>Flash CS</span></li>
            <li className="v-skill"><span>Photoshop</span></li>
            <li className="v-skill"><span>MySQL</span></li>
            <li className="v-skill"><span>MongoDB</span></li>
          </ul>
            
          <h2 className="section-title">Build tools</h2>
          <ul className="skills-section">
            <li className="v-skill"><span>Bower</span></li>
            <li className="v-skill"><span>Gulp</span></li>
            <li className="v-skill"><span>Webpack</span></li>
            <li className="v-skill"><span>Babel</span></li>
          </ul>     

          <h2 className="section-title">Libraries / frameworks - abriviated</h2>
          <ul className="skills-section">
            <li className="v-skill"><span>Angular</span></li>
            <li className="v-skill"><span>AngularJS</span></li>
            <li className="v-skill"><span>React</span></li>
            <li className="v-skill"><span>Cordova (Phonegab)</span></li>
            <li className="v-skill"><span>Jest</span></li>
            <li className="v-skill"><span>Karma</span></li>
            <li className="v-skill"><span>jQuery</span></li>
            <li className="v-skill"><span>PhantomJS</span></li>
          </ul>

          <h2 className="section-title">Soft/misc skills, and concepts</h2>
          <ul className="skills-section">
            <li className="v-skill"><span>SEO</span></li>
            <li className="v-skill"><span>Responsive layouts</span></li>
            <li className="v-skill"><span>Graceful degradation</span></li>
            <li className="v-skill"><span>Continuous integration</span></li>
            <li className="v-skill"><span>E2E testing</span></li>
            <li className="v-skill"><span>Unit testing</span></li>
            <li className="v-skill"><span>RESTfull API</span></li>
            <li className="v-skill"><span>Websockets</span></li>
            <li className="v-skill"><span>Project-management</span></li>
            <li className="v-skill"><span>Game design</span></li>
            <li className="v-skill"><span>Internationalization</span></li>
            <li className="v-skill"><span>Push notification android and iOS</span></li>
            <li className="v-skill"><span>Cross platform development</span></li>
            <li className="v-skill"><span>Linux / Debian system administration</span></li>
            <li className="v-skill"><span>Data security</span></li>
          </ul>

          <h2 className="section-title">Port folio</h2>
          <div className="portfolio-section"></div>
        </div>
      </div>
    );
  }
}

export default Index;