import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './app';
import styles from './app.css';

export default class AppTemplate extends Component {
  render() {
    const assets = Object.keys(this.props.webpackStats.compilation.assets)
    const js = assets.filter(value => value.match(/\.js$/))
    const css = assets.filter(value => value.match(/\.css$/))

    const jsScript = js.reduce((name, val) => (<script async src={val}></script>), '');
    const cssLink = css.reduce((name, val) => (<link rel="stylesheet" href={val} />), '');

    return (
      <html lang="en">
      <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta property="og:url" content="http://sebbdk.github.io/Curriculum-Vitae/" />
          <meta property="og:image" content="http://sebbdk.github.io/Curriculum-Vitae/6aa4c6bd6da5eab7b0de6d9a33748081.png" />
          <meta property="og:description" content="Sebastian Vargrs Curriculum Vitae or resumé" />
          <meta property="og:title" content="Vargr Vitae" />
          <meta property="og:site_name" content="Vargr Vitae" />

          <meta name="theme-color" content="#A61132" />
          <meta name="Description" content="Curriculum Vitae for Sebastian Vargr" />

          <title>Vargr Vitae</title>
          {cssLink}

          <style type="text/css">{styles}</style>
      </head>
      <body>
      
        <div id="root">
          <App path={this.props.path}></App>
        </div>

        {jsScript}
      </body>
      </html>
    );
  }
}
