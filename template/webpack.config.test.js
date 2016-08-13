/* eslint-env node */
const path = require('path')
const glob = require('glob')

const config = require('./webpack.config')

config.context = path.resolve(__dirname)
config.entry = glob.sync('./test/**/*.js')
config.output = {
  path: path.resolve(__dirname, '.tmp'),
  filename: 'test.js'
}

config.plugins.pop()

module.exports = config
