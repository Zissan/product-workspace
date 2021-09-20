const miniCssExtractPlugin = require('mini-css-extract-plugin');
const purgecssPlugin = require('purgecss-webpack-plugin');
const path = require('path');
const glob = require('glob');

const PATHS = {
  src: path.join(__dirname, 'src')
};

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)/i,
        type: 'asset'
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sc|c)ss$/i,
        use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [
    new miniCssExtractPlugin(),
    new purgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
      safelist: ['html', 'body']
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port: 8080
  },
  devtool: 'source-map'
};
