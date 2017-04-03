const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { config, vueOptions } = require('./webpack.config.base')

config.context = path.resolve(__dirname, '../src')
config.entry = ['./main.css', './main.js']
config.output = {
  path: path.resolve(__dirname, '../dist'),
  filename: 'main.js'
}

config.plugins.push(
  new HtmlWebpackPlugin({
    template: '../index.html'
  })
)

if (process.env.NODE_ENV === 'production') {
  const ExtractTextPlugin = require('extract-text-webpack-plugin')

  const extractLoader = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: 'css-loader'
  })

  config.module.rules.push({ test: /\.s?css$/, loader: extractLoader })
  vueOptions.loaders.css = vueOptions.loaders.scss = extractLoader

  config.plugins = config.plugins.concat([
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('main.css')
  ])
} else {
  const DashboardPlugin = require('webpack-dashboard/plugin')

  config.plugins.push(
    new DashboardPlugin()
  )

  config.devtool = 'source-map'

  config.module.rules.push({ test: /\.s?css$/, loader: 'style-loader!css-loader' })
}

module.exports = config
