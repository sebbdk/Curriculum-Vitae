/*
* @Author: Kasper Sebb' brandt
* @Date:   2018-10-26 20:02:56
* @Last Modified by:   Kasper Sebb' brandt
* @Last Modified time: 2018-11-13 19:20:18
*/
import React from 'react'
import { MemoryRouter, BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './m/pages/home.js'
import Index from './m/pages/index.js'

import './app.css';

export default function App(props) {
  let initialPath = 0;
  if (props.path) {
    const paths = ["/", "/home"];
    const path = props.path.replace(/\/$/, '');
    initialPath = paths.indexOf(path);
    initialPath = initialPath < 0 ? 0 : initialPath;
  }

  const routerContent = (
    <div>
      <div style={{ display: "none" }}>
        <Link to="/">index</Link> | <Link to="/home">home</Link>
      </div>
      <Route exact path="/Curriculum-Vitae/" component={Index} />
      <Route exact path="/" component={Index} />
      <Route path="/home" component={Home} />
    </div>
  );

  const memRouter = (
    <MemoryRouter
      initialEntries={["/", "/home"]}
      initialIndex={initialPath}>
      {routerContent}
    </MemoryRouter>
  );

  const browserRouter = (
    <BrowserRouter>
      {routerContent}
    </BrowserRouter>
  );

  const router = props.isBrowser ? browserRouter : memRouter;

  return (
    <div>
    <div className="app">
      {router}
    </div>
    <div id="footer" className="print-hide">
      <p>
        This page was build as a prerendered single page application. <br />
        Check out the source-code here on Github <a href="https://github.com/sebbdk/Curriculum-Vitae" target="_blank">here</a>.</p>
    </div>
    </div>
  );
}