const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
let FaviconsWebpackPlugin = require('favicons-webpack-plugin');

let webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './resources/js/index.js',
          /*
         './vendors/js/respond.min.js',
         './vendors/js/html5shiv.min.js',
         */
         './resources/js/jQuery/script.js', 
         './vendors/js/jquery.waypoints.min.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'resources/js/bundle.js',
    //publicPath: 'http://localhost:8081/'
    //publicPath: 'file:///C:/Users/Kening/Documents/MyWork/MyWebsite/dist/'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    
    new FaviconsWebpackPlugin('./vendors/img/flyingpig.gif')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: [/node_modules/, /original/],
        use: [
          'file-loader?name=/vendors/img/[name].[ext]'
        ]
      }
    ]
  }
};