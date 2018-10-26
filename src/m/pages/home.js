/*
* @Author: Kasper Sebb' brandt
* @Date:   2018-10-23 19:54:04
* @Last Modified by:   Kasper Sebb' brandt
* @Last Modified time: 2018-10-26 23:45:58
*/
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
    }, 2000)
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