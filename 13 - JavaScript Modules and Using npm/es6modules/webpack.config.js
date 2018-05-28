const webpack = require('webpack');
const nodeEnv = process.node.NODE_ENV || 'production';

module.exports = {
  devtool: 'source-map',
  entry: {
    fileName: './app.js'
  },
  output: {
    fileName: 'build/bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: 'env'
      }
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv)
      }
    })
  ]
}