/*
* @Author: Kasper Sebb' brandt
* @Date:   2018-10-23 19:54:04
* @Last Modified by:   Kasper Sebb' brandt
* @Last Modified time: 2018-11-02 21:44:22
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
        <div class="title-section"></div>
        <div class="profile-section"></div>
        <div class="contact-section"></div>
        <div class="experience-section"></div>
        <div class="skills-section"></div>

        <ReactMarkdown source={aboutMe} />
      </div>
    );
  }
}

export default Index;