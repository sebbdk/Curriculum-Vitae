/*
* @Author: Kasper Sebb' brandt
* @Date:   2018-10-31 00:18:27
* @Last Modified by:   Kasper Sebb' brandt
* @Last Modified time: 2018-11-11 18:25:25
*/
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const env = process.env.NODE_ENV

const config = {
   mode: env || 'development'
}

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
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192
              }
            }
          ]
        }
      ]
    },

    optimization: {
      minimizer: [
        new UglifyJsPlugin(),
        new OptimizeCssAssetsPlugin()
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
      }),
      //new BundleAnalyzerPlugin()
    ]
  };
}