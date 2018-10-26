/*
* @Author: Kasper Sebb' brandt
* @Date:   2018-10-23 19:54:04
* @Last Modified by:   Kasper Sebb' brandt
* @Last Modified time: 2018-10-26 23:28:39
*/
import React, { Component } from 'react';

console.log('included?!?!?')

export class Home extends Component {

  constructor(props) {
    super(props);

    console.log('Instantiate home!!')
  }

  componentDidMount() {
    console.log('Mount home!!');
  }

  render() {
    return (
      <div className="vt-home">
        This is the home page!!
      </div>
    );
  }
}

export default Home;