/*
* @Author: Kasper Sebb' brandt
* @Date:   2018-10-23 19:54:04
* @Last Modified by:   Kasper Sebb' brandt
* @Last Modified time: 2018-10-26 23:42:43
*/
import React, { Component } from 'react';

export class Index extends Component {

  componentDidMount() {
    console.log('Mount index!!');
  }

  render() {
    console.log('render index!');

    return (
      <div className="vt-index">
        this is the index page! 
      </div>
    );
  }
}

export default Index;