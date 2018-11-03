/*
* @Author: Kasper Sebb' brandt
* @Date:   2018-10-23 19:54:04
* @Last Modified by:   Kasper Sebb' brandt
* @Last Modified time: 2018-11-03 16:01:16
*/
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

const aboutMe = `
# Hi there!
My name is Sebastian Vargr, a mostly' autodidact developer from Copenhagen, Denmark.
I enjoy jogging, making games, building teck, like e-boards, GPU rigs, 3d-printers etc. in my workshop.

Professionally i take great pride i my work, especially when it comes to performance and building systems 
designed to not', turn the people i eventually turn it over to, into people that would want bad things to happen to me.


**About me professionally** Abbreviated, i consider my self a fullstack polyglot that have no qualms picking up new tools or taking on tasks that go outside
my domain of expertise. I am in it for the challenge.

**More information**
I have worked extensively as both a contractor and independant software developer, and fulltime employee before that.
I have worked with fintec, social media, startups, insurance, games, and other industries.
Teck wise i have architected single-page applications, implemented migration plans, done both backend and frontend work aswell as a fair deal linux stack system adminsitration.
Although the latter is not my most important skill i know my way around linux systems, VM's, docker etc.
`;

export class Index extends Component {

  componentDidMount() {
    console.log('Mount index!!');
  }

  render() {
    console.log('render index!');



    return (
      <div className="vt-index">
        <div class="title-section">
          <h1>Sebastian Vargr</h1>
          <p>Developer</p>
          <img src="https://placebear.com/300/300" />
        </div>

        <div class="contact-section">
          <h2>Contact</h2>
          Email: <a href="mailto:sebb@sebb.dk">sebb@sebb.dk</a><br />
          tlf: <a href="tel:+45 28491314">+45 28491314</a><br />
          <br />
          <a href="https://www.linkedin.com/in/sebbdk/" target="_blank">LinkedIn</a>
        </div>

        <div class="profile-section">
          <ReactMarkdown source={aboutMe} />
        </div>

        <div class="experience-section">
          <div class="experience">
            <img src="https://placebear.com/50/50" />
            <b>Senior frontend consultant at Saxobank</b>
            <small>Jan 2018 - Dec 2018 * 1 Year</small>
            <p>Optimizing and developing on their public facing websites.</p>
          </div>

          <div class="experience">
            <img src="https://placebear.com/50/50" />
            <b>Senior frontend consultant at Nordea</b>
            <small>Jul 2016 - Jan 2018 * 1 year 7 months</small>
            <p></p>
          </div>

          <div class="experience">
            <img src="https://placebear.com/50/50" />
            <b>Business owner at Entity51</b>
            <small>Nov 2013 - Present * 5 years</small>
            <p></p>
          </div>

          <div class="experience">
            <img src="https://placebear.com/50/50" />
            <b>Developer at Nodes</b>
            <small>Dec 2009 - Oct 2013 * 3 years 11 months</small>
            <p></p>
          </div>

          <div class="experience">
            <img src="https://placebear.com/50/50" />
            <b>Developer at Decaro</b>
            <small>June 2007 - July 2009 * 2 years 2 months</small>
            <p></p>
          </div>
        </div>

        <div class="education-section">
          <div class="experience">
            <img src="https://placebear.com/50/50" />
            <b>Webintegrator</b>
            <small>June 2007 - July 2008</small>
            <p>Studied generic webdeveloment, not limited to but including coding, UI design, and project management.</p>
          </div>
        </div>

        <div class="skills-section">

        </div>

        <div class="soft-skills-section"></div>
        
      </div>
    );
  }
}

export default Index;