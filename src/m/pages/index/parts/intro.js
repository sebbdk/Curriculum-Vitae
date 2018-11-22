import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

const aboutMe = `
**OBS! i am currently updating and re-designing the page. Dont mind the cats with toast strapped to them! :)**

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

export default class extends Component {

  render() {
    return <div className="profile-section">
      <h2 className="section-title">Hi there!</h2>
      <ReactMarkdown source={aboutMe} />
    </div>
  }

}