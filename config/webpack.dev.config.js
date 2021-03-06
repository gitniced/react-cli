const path = require('path');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common.config.js');

function resolve (dir) {
  return path.join(__dirname, '../', dir);
}

const devConfig = {
  devtool: 'inline-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      resolve('src/index.js')
    ]
  },
  output: {
    path: resolve('dist'),
    filename: '[name].[hash].js',
    // chunkFilename: '[name].[chunkhash].js'
  },
  module: {
    rules: []
  },
  devServer: {
    port: 3000,
    contentBase: resolve('dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
  },
}

module.exports = merge({
  customizeArray(a, b, key) {
      /*entry.app不合并，全替换*/
      if (key === 'entry.app') {
          return b;
      }
      return undefined;
  }
})(commonConfig, devConfig);