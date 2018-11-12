/*
* @Author: Kasper Sebb' brandt
* @Date:   2018-10-23 19:50:27
* @Last Modified by:   Kasper Sebb' brandt
* @Last Modified time: 2018-11-12 21:38:27
*/
const devConfig = require('./build/webpack.dev.js');
const staticConfig = require('./build/webpack.static.js');

module.exports = staticConfig;