const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Clean = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    port: 8082,
    overlay: true,
    stats: { colors: true },
    host: '0.0.0.0'
  },
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: { loader: 'babel-loader' } },
      { test: /\.(scss|css)$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.(jpg|png|svg)$/, loader: 'file-loader', options: { name: '[path][name].[hash].[ext]' } },
      {
        test: /\.(ttf|eot|woff|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'file-loader'
        }]
      }
    ]
  },
  plugins: [
    // new CopyWebpackPlugin([
    //   // Directory  examples
    //   { from: 'src/html', to: '.',}
    //   // { from: 'src/html', to: '.', ignore: '*.html' }
    // ]),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/html/index.html')
    }),
    new Clean(['dist'])
  ]
};
