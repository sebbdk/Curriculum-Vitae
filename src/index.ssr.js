/*
* @Author: Kasper Sebb' brandt
* @Date:   2018-10-24 20:31:59
* @Last Modified by:   Kasper Sebb' brandt
* @Last Modified time: 2018-10-26 23:34:28
*
* Server side render entry
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';

import { App } from './app.js';
import MyRouter from './router.test.js';
import { Template } from './template.js';

if (typeof global.document !== 'undefined') {
  ReactDOM.hydrate(<MyRouter />, document.getElementById('root'))
}

export default (locals, callback) => {
  const app = renderToString(React.createElement(Template, locals));
  callback(null, ' <!DOCTYPE html>' + app)
}
