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

exports.options = {
  postcss,
  vue: {
    postcss
  }
}

exports.config = {
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js', '.json', '.vue']
  },
  module: {
    rules: [
      { enforce: 'pre', test: /\.vue$/, loader: 'eslint', exclude: /node_modules/ },
      { enforce: 'pre', test: /\.js$/, loader: 'eslint', exclude: /node_modules/ },
      {{#if_eq style "SCSS"}}
      { enforce: 'pre', test: /\.scss$/, loader: 'postcss!sass' },
      {{/if_eq}}
      { enforce: 'pre', test: /\.css$/, loader: 'postcss' },
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
  devServer: {
    contentBase: 'dist',
    historyApiFallback: true
  }
}
