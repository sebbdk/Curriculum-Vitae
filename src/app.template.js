/*
* @Author: Kasper Sebb' brandt
* @Date:   2018-10-24 21:46:25
* @Last Modified by:   Kasper Sebb' brandt
* @Last Modified time: 2018-10-28 13:19:43
*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './app';

export default class AppTemplate extends Component {
  render() {
    const assets = Object
      .values(this.props.assets)
      .reduce((name, val) => (<script src={'/'+val} async></script>), '');

    return (
      <html>
      <head>
          <title>Vitae</title>
          <link rel="stylesheet" href="/main.css"/>
      </head>
      <body>

        <div>STUFF: {this.props.path}</div>
        <div id="root">
          <App path={this.props.path}></App>
        </div>

        {assets}
      </body>
      </html>
    );
  }
}
