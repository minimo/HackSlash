const webpack = require('webpack');
const path = require('path');

// console.log("******" + process.env.NODE_ENV);

module.exports = {
  entry: './src/index.js', // 入力元のファイル名(エントリポイント)
  plugins: [
    new webpack.ProvidePlugin({
        'PHINA': 'phina.js/build/phina.esm.js'
    }),
  ],
  resolve: {
    alias: {
      '@scenes': path.resolve(__dirname, 'src/scenes'),
      '@elements': path.resolve(__dirname, 'src/elements'),
      '@extensions': path.resolve(__dirname, 'src/extensions'),
      '@phina' : path.resolve(__dirname, "node_modules/phina.js/build/phina.esm"),
    },
  },
  target: ["es6"],
}