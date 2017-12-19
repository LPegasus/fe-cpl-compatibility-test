/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const isProduction = process.env.NODE_ENV === 'production';

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin()
];

module.exports = {
  entry: './tests/index.test.js',
  output: {
    filename: "tests.js",
    path: __dirname + '/dist',
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx"],
    alias: {
      'dynamic-form': path.resolve(process.cwd(), 'components'),
      // moment: "moment/min/moment-with-locales.min.js",
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  stats: {
    assets: true
  },

  watch: true,

  devServer: {
    compress: true, // enable gzip compression
    historyApiFallback: false, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    watchOptions: {
      ignored: /node_modules/,
      poll: 1000
    },
    publicPath: '/dist',
    port: 8080,
    stats: {
      assets: true
    }
  },

  plugins: plugins
};
