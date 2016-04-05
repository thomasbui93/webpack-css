const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const cssnano = require('cssnano');
const cssnext = require('postcss-cssnext');
const precss = require('precss');
const oldie = require('oldie');

const scssLoaders = [
  'css-loader',
  'postcss-loader'
]

const config = {
  entry: {
    app: ['./src/index']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: []
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', scssLoaders.join('!'))
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './build'),
    publicPath: '/build'
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  postcss: [
    precss,
    //cssnano,
    cssnext,
    oldie
  ],
  resolve: {
    extensions: ['', '.js', '.scss'],
    modulesDirectories: ['src', 'node_modules']
  }
}

module.exports = config
