const path = require('path');



const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body' //inserts script tag right before closing </body> tag
})

module.exports = {
  entry: './src/main.js',
  output: {
     path: path.resolve(__dirname, "build"),
    path: './src',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
     
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
