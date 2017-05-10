const path = require('path');

const ASSET_PATH = '/app'

module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: ASSET_PATH
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
      }
    ]
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "app/components")
    ],
    extensions: [".js", ".jsx"]
  }
}
