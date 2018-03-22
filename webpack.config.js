const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production';

const extractCSS = new ExtractTextPlugin('[name].bundle.css');

const plugins = [
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    comments: false,
    minimize: false
  }),
  new HtmlWebpackPlugin({
    title: 'WebGL Prototype',
    template: './index.html',
    filename: './index.html',
    showErrors: true
  }),
  new webpack.DefinePlugin({
    'process.env': {
      DEV: !PRODUCTION
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'commons',
    filename: 'commons.js'
  }),
  new CopyWebpackPlugin([
    { from: 'src/assets', to: 'assets' }
  ]),
  new webpack.NamedModulesPlugin(),
  extractCSS
];

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './src/app.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        }
      },
      {
        test: /\.scss$/,
        loader: extractCSS.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.(glsl|frag|vert)$/,
        loader: 'raw-loader', exclude: /node_modules/
      },
      {
        test: /\.(glsl|frag|vert)$/,
        loader: 'glslify', exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  stats: 'minimal',
  plugins
}
