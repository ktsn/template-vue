/* eslint-env node */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = require('./webpack.config.base')

config.context = path.resolve(__dirname, 'src')
config.entry = ['./main.css', './main.js']
config.output = {
  path: path.resolve(__dirname, 'dist'),
  filename: 'main.js'
}

config.plugins.push(
  new HtmlWebpackPlugin({
    template: '../index.html'
  })
)

if (process.env.NODE_ENV === 'production') {
  const ExtractTextPlugin = require('extract-text-webpack-plugin')

  config.module.loaders.push({ test: /\.{{#if_eq style "SCSS"}}s?{{/if_eq}}css$/, loader: ExtractTextPlugin.extract('css') })
  {{#if_eq style "SCSS"}}
  config.vue.loaders.scss = ExtractTextPlugin.extract('css!sass')
  {{/if_eq}}
  config.vue.loaders.css = ExtractTextPlugin.extract('css')

  config.plugins = config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('main.css')
  ])
} else {
  const Dashboard = require('webpack-dashboard')
  const DashboardPlugin = require('webpack-dashboard/plugin')
  const dashboard = new Dashboard()

  config.plugins.push(
    new DashboardPlugin(dashboard.setData)
  )

  config.devtool = 'source-map'

  {{#if_eq style "SCSS"}}
  config.vue.loaders.scss = 'style!css!sass'
  {{/if_eq}}
  config.module.loaders.push({ test: /\.{{#if_eq style "SCSS"}}s?{{/if_eq}}css$/, loader: 'style!css' })
}

module.exports = config
