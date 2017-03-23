var webpack = require('webpack');

module.exports = {
  entry: ['./streams.lib.entry.js'],
  output: {
    filename: 'streams.lib.bundle.js',
    libraryTarget: 'umd',
    library: 'streams-lib'
  },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     compressor: {
  //       screw_ie8: true,
  //       warnings: false
  //     }
  //   })
  // ]
};