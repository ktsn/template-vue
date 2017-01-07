const webpack = require('webpack')
const path = require('path')
const glob = require('glob')

const options = require('./webpack.config.base').options
const config = require('./webpack.config.base').config

config.devtool = 'source-map'

config.entry = ['es6-promise/auto'].concat(glob.sync('./test/**/*.js'))
config.output = {
  path: path.resolve(__dirname, '.tmp'),
  filename: 'test.js'
}

config.plugins.push(
  new webpack.LoaderOptionsPlugin({
    options
  })
)

module.exports = config
