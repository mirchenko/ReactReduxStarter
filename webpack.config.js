/**
 * Created by macbookair on 08.02.17.
 */

var path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['react', 'react-dom', 'react-router', 'redux', 'react-redux', 'redux-thunk' ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname)
  },
  devServer: {
    contentBase: path.join(__dirname),
    compress: false,
    port: 8080,
    watchContentBase: true,
    watchOptions: {
      poll: true
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};