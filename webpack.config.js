var webpack = require('webpack');

module.exports = {
  entry: ['./streams.lib.entry.js'],
  output: {
    filename: 'streams.lib.bundle.js',
    libraryTarget: 'umd',
    library: 'streams-lib'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: [' ', '.js']
  }
};