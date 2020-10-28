const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

const pathToApp = path.resolve(__dirname, 'src', 'app');
const pathToNodeModules = path.resolve(__dirname, 'node_modules');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: true,
  title: 'React-Test',
});

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: [pathToApp, pathToNodeModules],
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss/,
        use: [
          ExtractCssChunks.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: path.resolve(__dirname, './postcss.config.js'),
              },
            },
          },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      }, {
        test: /\.(ttf|gif|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]',
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new ExtractCssChunks({
      hot: true,
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    HtmlWebpackPluginConfig,
  ],
  devServer: {
    compress: true,
    port: 5000,
  },
};
