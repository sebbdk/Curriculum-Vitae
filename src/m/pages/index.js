/*
* @Author: Kasper Sebb' brandt
* @Date:   2018-10-23 19:54:04
* @Last Modified by:   Kasper Sebb' brandt
* @Last Modified time: 2018-11-14 20:06:56
*/
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import './index.css';
import ProfileImg from './profile_img.png';

const aboutMe = `
My name is Sebastian Vargr, a mostly' autodidact developer from Copenhagen, Denmark.
I enjoy jogging, making games, building more physical things like e-boards, GPU mining rigs, 3d-printers etc. in my workshop.

### What i do
I have been developing web-applications since 2007, and have been around the stack and back.
In short i have no problem jumping between debbuggin a legacy AngularJS app, 
setting up new docker images, and writing/extending restful API's, 
while juggeling the websites load metrics like, time to interactive, and kb'size budgets. 

Having been a freelancer for a few years i have also gotten a good understanding of balancing 
time, maintainebillity, and performance budgets to get the best posible product with availeble resources.

### What excites me
Topics that excite me include things like serverside SPA rendering, GraphQL, state-management, game-development, 14kb performance-budgets, web-assembly, and so on.
`;

export class Index extends Component {

  componentDidMount() {
    console.log('Mount index!!');
  }

  render() {
    return (
      <div>
        <div className="v-section vcol vsmrow">
          <div className="vsmlcol">
            <div className="vsmpar40">
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
          </div>

          <div>
            <div className="profile-section">
              <h2 className="section-title">Hi there!</h2>
              <ReactMarkdown source={aboutMe} />
            </div>

            <div className="pbbreak"></div>
            
            <h2 className="section-title">Experience</h2>
            <div className="experience-section">
              <div className="v-col-12">
                <div className="experience">
                  <b>Senior frontend consultant at Saxobank</b><br />
                  <small>Jan 2018 - Dec 2018 ● 1 Year</small>
                  <p>Refactored their build sollution for simplicity and performance and helped migrate their old site from a bloated SPA sollution to none SPA to improve load metrics, established code guidelines, as well as documenting their frontend components.</p>              
                </div>
              </div>

              <div className="v-col-12">
                <div className="experience vmal0">
                  <b>Senior frontend consultant at Nordea</b><br />
                  <small>Jul 2016 - Jan 2018 ● 1 year 7 months</small>
                  <p>
                    Refactored their build system and established basic coding standards to enable their rather sizable team working on their internal AngularJS based pension management tools.<br />
                    <br />Also worked on the first version of their Angular based Nora investment tool sollution.
                  </p>
                </div>
              </div>

              <div className="v-col-12">
                <div className="experience">
                  <b>Business owner at Entity51</b><br />
                  <small>Nov 2013 - Present ● 5 years</small>
                  <p>
                    My freelance business, currently on hold for new projects while i do fulltime consulting.<br />
                    <br />
                    Work consists mostly of subcontracts to make social media SPA's, compaign and Cordova based mobile applications. More interestingly i helped a few startups get going tecknically and also coded a few mobile games in collaboration with independant game designers.<br />
                  </p>
                </div>
              </div>

              <div className="v-col-12">
                <div className="experience vmal0">
                  <b>Developer at Nodes</b><br />
                  <small>Dec 2009 - Oct 2013 ● 3 years 11 months</small>
                  <p>
                    Worked as a developer pumping out Facebook applications, in the ~4 years i was there, i was involved in more than 200 applications or varying size.<br />
                    <br />
                    Problably the most varied place i have ever worked, one day i would be making a tool for people to record them self as two highpitched german nuts, complete with with facial tracking and southpark like animated mouths, and the next i would be placing a few million footballs in virtual space for an augmented reality application.
                    Also got to make obscure flash games, applications where people could make their own sausage face designs etc etc.<br />  
                    <br />
                    And most of it in a browser setting.
                  </p>
                </div>
              </div>

              <div className="v-col-12">
                <div className="experience">
                  <b>Developer at Decaro</b><br />
                  <small>June 2007 - July 2009 ● 2 years 2 months</small>
                  <p>
                    My first job as a web-developer, made Joomla based websites and Adobe Flex based flash applications.
                  </p>
                </div>
              </div>

              <div className="v-col-12">
                <div className="experience vmal0">
                  <b>Webintegrator</b><br />
                  <small>June 2007 - July 2008</small>
                  <p>Studied generic webdeveloment, not limited to but including coding, UI design, and project management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="v-section vcol vsmrow bggrey">
          <div className="vsmlcol"></div>
          <div>
            <p className="section-title">
              <b>Languages</b><br />
              <small>The human ones. :)</small>
            </p>
            <ul className="skills-section">
              <li className="v-skill v-col-sm-6"><span>Danish</span></li>
              <li className="v-skill v-col-sm-6"><span>English</span></li>
            </ul>


            <p className="section-title">
              <b>Programming languages & variations</b><br />
              <small>Languages and variants i have worked with in large or lesser extend, i know others but these are the ones i usually work in.</small>
            </p>
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

            <p className="section-title">
              <b>Tools & tecknologies</b><br />
              <small>An outake of some of the libraries, tools and patterns i have used.</small>
            </p>
            <ul className="skills-section">
              <li className="v-skill"><span>Git</span></li>
              <li className="v-skill"><span>NodeJS</span></li>
              <li className="v-skill"><span>Unity3D</span></li>
              <li className="v-skill"><span>Flash CS</span></li>
              <li className="v-skill"><span>Photoshop</span></li>
              <li className="v-skill"><span>MySQL</span></li>
              <li className="v-skill"><span>MongoDB</span></li>
              <li className="v-skill"><span>Bower</span></li>
              <li className="v-skill"><span>Gulp</span></li>
              <li className="v-skill"><span>Webpack</span></li>
              <li className="v-skill"><span>Babel</span></li>
              <li className="v-skill"><span>Angular</span></li>
              <li className="v-skill"><span>AngularJS</span></li>
              <li className="v-skill"><span>React</span></li>
              <li className="v-skill"><span>Cordova (Phonegab)</span></li>
              <li className="v-skill"><span>Jest</span></li>
              <li className="v-skill"><span>Karma</span></li>
              <li className="v-skill"><span>Jasmine</span></li>
              <li className="v-skill"><span>Protractor</span></li>
              <li className="v-skill"><span>jQuery</span></li>
              <li className="v-skill"><span>Backbone.js</span></li>
              <li className="v-skill"><span>Underscore.js</span></li>
              <li className="v-skill"><span>PhantomJS</span></li>
              <li className="v-skill"><span>Ionic framework</span></li>
              <li className="v-skill"><span>Wordpress</span></li>
              <li className="v-skill"><span>Redux</span></li>
              <li className="v-skill"><span>Flux</span></li>
            </ul>

            <p className="section-title">
              <b>Industry and other generel Knowhow</b><br />
              <small>These concepts are also worth mentioning.</small>
            </p>
            <ul className="skills-section">
              <li className="v-skill"><span>SEO</span></li>
              <li className="v-skill"><span>Single page applications</span></li>
              <li className="v-skill"><span>Backend developement</span></li>
              <li className="v-skill"><span>Frontend developement</span></li>
              <li className="v-skill"><span>Responsive layouts</span></li>
              <li className="v-skill"><span>Graceful degradation</span></li>
              <li className="v-skill"><span>Continuous integration</span></li>
              <li className="v-skill"><span>E2E testing</span></li>
              <li className="v-skill"><span>Unit testing</span></li>
              <li className="v-skill"><span>RESTfull API</span></li>
              <li className="v-skill"><span>Websockets</span></li>
              <li className="v-skill"><span>Scrum</span></li>
              <li className="v-skill"><span>Agile</span></li>
              <li className="v-skill"><span>Project management</span></li>
              <li className="v-skill"><span>Game design</span></li>
              <li className="v-skill"><span>Internationalization</span></li>
              <li className="v-skill"><span>Push notification android and iOS</span></li>
              <li className="v-skill"><span>Cross platform development</span></li>
              <li className="v-skill"><span>Linux / Debian system administration</span></li>
              <li className="v-skill"><span>Data security</span></li>
            </ul>
          </div>
        </div>

        <div className="v-section v-section-padded print-hide hide">
            <h2 className="section-title">Port folio</h2>
            <div className="portfolio-section"></div>
        </div>
      </div>
    );
  }
}

export default Index;