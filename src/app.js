/*
* @Author: Kasper Sebb' brandt
* @Date:   2018-10-23 19:51:01
* @Last Modified by:   Kasper Sebb' brandt
* @Last Modified time: 2018-10-26 00:20:52
*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './m/pages/home.js'
import Index from './m/pages/index.js'

import './app.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assets: {
        a: 'well cake is good',
        b: 'i really like caffeine',
        c: 'wonderchicken'
      },
      time: '0'
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: (new Date()).getTime()
      });
    }, 100);
  }

  render() {
    const assets = Object
      .values(this.state.assets)
      .map((value, index) => <li key={index}>{value}</li>, '');

    return (
      <div className="app">
        <div>
          <a href="/">/</a> | <a href="home">home</a>
        </div>

        <Router>
          <div>
            <Route path="/" component={Index} />
            <Route path="/home" component={Home} />
          </div>
        </Router>
        <ul>
          {assets}
        </ul>
      </div>
    );
  }
}
