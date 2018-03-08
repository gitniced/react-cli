const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const commonConfig = require('./webpack.common.config.js');

function resolve (dir) {
  return path.join(__dirname, '../', dir);
}

publicConfig = {
  devtool: 'cheap-module-source-map',
  module: {
    rules: []
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify('production')
       }
    }),
    new CleanWebpackPlugin('dist/*.*', {
      root: path.resolve(__dirname, '../'),    // 设置root
      verbose: true
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash:5].css',
      allChunks: true
    })
  ]
}

module.exports = merge(commonConfig, publicConfig);