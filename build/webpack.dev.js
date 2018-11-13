/*
* @Author: Kasper Sebb' brandt
* @Date:   2018-10-31 00:18:45
* @Last Modified by:   Kasper Sebb' brandt
* @Last Modified time: 2018-11-13 18:17:23
*/
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');;

module.exports = (env, argv) => { 
  return {
    entry: './src/dev.index.js',
    devtool: 'source-map',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
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
   
    plugins: [
      new MiniCssExtractPlugin(),
      // Makes some environment variables available in index.html.
      // The public URL is available as %PUBLIC_URL% in index.html, e.g.:
      // <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
      // In production, it will be an empty string unless you specify "homepage"
      // in `package.json`, in which case it will be the pathname of that URL.
      //new InterpolateHtmlPlugin(env.raw),
      // Generates an `index.html` file with the <script> injected.
      new HtmlWebpackPlugin({
        inject: true,
        template: 'src/dev.index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      }),
    ]
  };
}