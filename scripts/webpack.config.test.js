const path = require('path')
const glob = require('glob')

const { config } = require('./webpack.config.base')

config.devtool = 'source-map'

config.entry = ['es6-promise/auto'].concat(glob.sync('./test/**/*.js'))
config.output = {
  path: path.resolve(__dirname, '../.tmp'),
  filename: 'test.js'
}

module.exports = config
