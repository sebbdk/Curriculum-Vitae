import React, { Component } from 'react';

export class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Hello there!!!'
    };

    console.log('Instantiate home!!')
  }

  componentDidMount() {
    console.log('Mount home!!');

    setTimeout(() => {
      this.setState({
        greeting: 'Welcome to this site!!'
      })
    }, 200)
  }

  render() {
    console.log('render home!');

    return (
      <div className="vt-home">
        This is the home page!!<br />
        {this.state.greeting}
      </div>
    );
  }
}

export default Home;