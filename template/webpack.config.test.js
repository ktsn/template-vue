const path = require('path')
const glob = require('glob')

const config = require('./webpack.config.base')

config.devtool = 'source-map'

config.entry = glob.sync('./test/**/*.js')
config.output = {
  path: path.resolve(__dirname, '.tmp'),
  filename: 'test.js'
}

module.exports = config
