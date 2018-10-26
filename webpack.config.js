/*
* @Author: Kasper Sebb' brandt
* @Date:   2018-10-23 19:50:27
* @Last Modified by:   Kasper Sebb' brandt
* @Last Modified time: 2018-10-26 20:01:29
*/
var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
 
const env = process.env.NODE_ENV

const config = {
   mode: env || 'development'
}

console.log(config.mode)

module.exports = (env, argv) => { 
  // argv.mode -> production | dev

  return {
    entry: './src/index.ssr.js',
    devtool: 'source-map',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),

      /* IMPORTANT!
       * You must compile to UMD or CommonJS
       * so it can be required in a Node context: */
      libraryTarget: 'umd'
    },

    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                publicPath: '../'
              }
            },
            "css-loader"
          ]
        },
        {
          enforce: "post",
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        }
      ]
    },
   
    plugins: [
      new MiniCssExtractPlugin(),
      new StaticSiteGeneratorPlugin({
        paths: [
          '/',
          '/home'
        ],
        crawl: true,
        globals: {
          window: {}
        },
        locals: {
          // Properties here are merged into `locals`
          // passed to the exported render function
          greet: 'Hello'
        }
      })
    ]
  };
}