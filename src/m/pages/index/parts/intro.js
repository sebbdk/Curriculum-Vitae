import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

const aboutMe = `
My name is Sebastian Vargr, a mostly' autodidact developer from Copenhagen, Denmark.
I enjoy jogging, making games, reading about machine learning and math, building more physical things like e-boards, GPU mining rigs, 3d-printers etc. in my workshop.

### What i do
I have been developing web-applications since 2007, and have been around the stack and back,
so do not mind going outside my specific role to get the work done, an can do so confidently when i need to.

I consider my self a highly independant problem solver with a fondness for finding simple solutions to difficult problems
and planning ahead to meet project goals and deadlines.

### What excites me
Topics that excite me include things like SSR SPA's, GraphQL, state-management, React/Preact (what this page is build on), game-development, 14kb performance-budgets, web-assembly, and so on.
`;

export default class extends Component {

  render() {
    return <div className="profile-section">
      <h2 className="section-title">Hi there!</h2>
      <ReactMarkdown source={aboutMe} />
    </div>
  }

}