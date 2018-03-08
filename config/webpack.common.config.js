const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '../', dir);
}

const commonConfig = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: [
      resolve('src/index.js')
    ],
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
  },
  output: {
    path: resolve('dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: "/"
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader?cacheDirectory=true'],
      exclude: resolve('node_modules')
    },
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [{
          loader: 'url-loader',
          options: {
              limit: 8192
          }
      }]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('src/index.html')
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),
  ],
  resolve: {
    alias: {
      pages:  resolve('src/pages'),
      components: resolve('src/components'),
      router: resolve('src/router')
    }
  }
}

module.exports = commonConfig;