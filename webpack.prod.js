const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Clean = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BabelMinify = require('babel-minify-webpack-plugin')
const BrotliPlugin = require('brotli-webpack-plugin')
const webpack = require('webpack');

module.exports = (env) => {
  return {
    entry: './src/app.js',
    mode: 'production',
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'bundle.js'
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
      new CopyWebpackPlugin([
        { from: 'src/html/', to: '.', ignore: '*.html' }
      ]),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env.NODE_ENV)
        }
      }),
      new HtmlWebpackPlugin({
        inject: true,
        filename: 'app.html',
        template: path.resolve(__dirname, 'src/html/index.html')
      }),
      new BabelMinify(),
      new BrotliPlugin(),
      new Clean(['dist'])
    ]
  }
}
