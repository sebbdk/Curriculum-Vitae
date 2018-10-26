/*
* @Author: Kasper Sebb' brandt
* @Date:   2018-10-26 20:02:56
* @Last Modified by:   Kasper Sebb' brandt
* @Last Modified time: 2018-10-26 23:34:01
*/
import React from 'react'
import { MemoryRouter, BrowserRouter, Route } from 'react-router-dom';

import Home from './m/pages/home.js'
import Index from './m/pages/index.js'

export default function RouterTest(props) {
  const paths = ["/", "/home"];
  let initialPath = paths.indexOf(props.path);
  initialPath = initialPath < 0 ? 0 : initialPath;

  console.log('initializing router')
  console.log(initialPath)

  return (
    <MemoryRouter
      initialEntries={["/", "/home"]}
      initialIndex={initialPath}>
      <div>
        <Route exact path="/" component={Index} />
        <Route exact path="/home" component={Home} />
      </div>
    </MemoryRouter>
  )
}