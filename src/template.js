/*
* @Author: Kasper Sebb' brandt
* @Date:   2018-10-24 21:46:25
* @Last Modified by:   Kasper Sebb' brandt
* @Last Modified time: 2018-10-26 23:17:09
*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { App } from './app';
import MyRouter from './router.test';

export class Template extends Component {
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
          <MyRouter path={this.props.path}></MyRouter>
        </div>

        {assets}
      </body>
      </html>
    );
  }
}
