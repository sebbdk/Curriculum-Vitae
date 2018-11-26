import React from 'react'
import { MemoryRouter, BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './m/pages/home.js'
import Index from './m/pages/index'

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
        The page was build in React and is hosted on <a className="ilink" rel="noreferrer" href="https://github.com/sebbdk/Curriculum-Vitae" target="_blank">Github</a>. <br />
      </p>
    </div>
    </div>
  );
}