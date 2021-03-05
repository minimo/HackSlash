const webpack = require('webpack');
const path = require('path');

// console.log("******" + process.env.NODE_ENV);

module.exports = {
  entry: './src/index.js', // 入力元のファイル名(エントリポイント)
  plugins: [
      new webpack.ProvidePlugin({
          'PHINA': 'phina.js/build/phina.esm.js'
      }),
  ]
}