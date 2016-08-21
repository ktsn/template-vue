/* eslint-env node */
const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

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
      { test: /\.css$/, loader: 'postcss' }{{#if_eq style "SCSS"}},
      { test: /\.scss$/, loader: 'postcss!sass' }
      {{/if_eq}}
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
