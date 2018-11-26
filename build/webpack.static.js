const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, argv) => { 
  return {
    entry: './src/index.ssr.js',
    devtool: 'source-map',
    output: {
      filename: 'bundle.[contenthash].js',
      path: path.resolve(process.cwd(), 'dist'),

      /* IMPORTANT!
       * You must compile to UMD or CommonJS
       * so it can be required in a Node context: */
      libraryTarget: 'umd'
    },

    resolve: {
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        }
    },

    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            /*{
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                publicPath: '../'
              }
            },*/
            "to-string-loader",
            "css-loader",
            "postcss-loader"
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
        new UglifyJsPlugin({
          extractComments: true
        }),
        new OptimizeCssAssetsPlugin()
      ]
    },
   
    plugins: [
      /*new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
      }),*/
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