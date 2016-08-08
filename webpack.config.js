/* eslint-env node */
const path = require('path')
const webpack = require('webpack')

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.vue']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.json$/, loader: 'json' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  devServer: {
    contentBase: 'dist',
    historyApiFallback: true
  }
}

if (process.env.NODE_ENV !== 'production') {
  config.devtool = 'source-map'
}

module.exports = config
