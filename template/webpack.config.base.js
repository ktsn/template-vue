const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
{{#flow}}
const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin')
{{/flow}}

const postcss = [
  autoprefixer({
    browsers: ['> 1%', 'last 2 versions', 'ie >= 9']
  })
]

module.exports = {
  resolve: {
    root: [
      path.resolve(__dirname, 'src')
    ],
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.vue']
  },
  module: {
    preLoaders: [
      {{#if_eq style "SCSS"}}
      { test: /\.scss$/, loader: 'postcss!sass' },
      {{/if_eq}}
      { test: /\.css$/, loader: 'postcss' }
    ],
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.json$/, loader: 'json' }
    ]
  },
  plugins: [
    {{#flow}}
    new FlowStatusWebpackPlugin({
      failOnError: true
    }),
    {{/flow}}
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
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
