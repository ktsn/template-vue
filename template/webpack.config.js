/* eslint-env node */
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')

const postcss = [
  autoprefixer({
    browsers: ['> 1%', 'last 2 versions', 'ie >= 9']
  })
]

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: ['./main.css', './main.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    root: [
      path.resolve(__dirname, 'src')
    ],
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.vue']
  },
  module: {
    preLoaders: [
      { test: /\.css$/, loader: 'postcss' }
    ],
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.json$/, loader: 'json' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      template: '../index.html'
    })
  ],
  postcss,
  vue: {
    loaders: {},
    postcss
  },
  devServer: {
    contentBase: 'dist',
    historyApiFallback: true
  }
}

if (process.env.NODE_ENV === 'production') {
  config.module.loaders.push(ExtractTextPlugin.extract('css'))
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

  config.module.loaders.push({ test: /\.css$/, loader: 'style!css' })
}

module.exports = config
