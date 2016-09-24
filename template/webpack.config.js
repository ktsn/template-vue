const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const options = require('./webpack.config.base').options
const config = require('./webpack.config.base').config

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

  config.module.rules.push({ test: /\.{{#if_eq style "SCSS"}}s?{{/if_eq}}css$/, loader: ExtractTextPlugin.extract('css') })
  options.vue.loaders = {
    {{#if_eq style "SCSS"}}
    scss: ExtractTextPlugin.extract('css!sass'),
    {{/if_eq}}
    css: ExtractTextPlugin.extract('css')
  }

  config.plugins = config.plugins.concat([
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options
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

  config.module.rules.push({ test: /\.{{#if_eq style "SCSS"}}s?{{/if_eq}}css$/, loader: 'style!css' })
  options.vue.loaders = {
    {{#if_eq style "SCSS"}}
    scss: 'style!css!sass',
    {{/if_eq}}
    css: 'style!css'
  }

  config.plugins = config.plugins.concat([
    new webpack.LoaderOptionsPlugin({
      options
    })
  ])
}

module.exports = config
