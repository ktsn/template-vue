const path = require('path')
const webpack = require('webpack')
const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin')

const vueOptions = exports.vueOptions = {
  esModule: true,
  loaders: {
    scss: 'style-loader!css-loader'
  },
  preLoaders: {
    scss: 'sass-loader'
  }
}

exports.config = {
  resolve: {
    modules: [
      path.resolve(__dirname, '../src'),
      'node_modules'
    ],
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      { enforce: 'pre', test: /\.vue$/, loader: 'eslint-loader', exclude: /node_modules/ },
      { enforce: 'pre', test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ },
      { enforce: 'pre', test: /\.scss$/, loaders: ['postcss-loader', 'sass-loader'] },
      { enforce: 'pre', test: /\.css$/, loader: 'postcss-loader' },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.vue$/, loader: 'vue-loader', options: vueOptions }
    ]
  },
  plugins: [
    new FlowStatusWebpackPlugin({
      failOnError: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  devServer: {
    contentBase: 'dist',
    historyApiFallback: true
  }
}
