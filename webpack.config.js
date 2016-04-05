const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const scssLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?indentedSyntax=scss&includePaths[]=' + path.resolve(__dirname, './src')
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
        test: /\.scss$/,
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
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  resolve: {
    extensions: ['', '.js', '.scss'],
    modulesDirectories: ['src', 'node_modules']
  }
}

module.exports = config
