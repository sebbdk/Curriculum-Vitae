/*
* @Author: Kasper Sebb' brandt
* @Date:   2018-10-26 20:02:56
* @Last Modified by:   Kasper Sebb' brandt
* @Last Modified time: 2018-10-26 23:53:01
*/
import React from 'react'
import { MemoryRouter, BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './m/pages/home.js'
import Index from './m/pages/index.js'

export default function RouterTest(props) {
  const paths = ["/", "/home"];
  const path = props.path.replace(/\/$/, '');
  let initialPath = paths.indexOf(path);
  initialPath = initialPath < 0 ? 0 : initialPath;

  const routerContent = (
    <div>
      <div>
        <Link to="/">index</Link> | <Link to="/home">home</Link>
      </div>
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
      {router}
    </div>
  );
}