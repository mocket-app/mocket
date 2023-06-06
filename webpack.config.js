const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader'],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.ttf$/i,
        // use: ['file-loader'],
        type: 'asset/resource',
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
    }),
  ],
  devServer: {
    // static: {
    //   directory: path.resolve(__dirname, 'dist'),
    //   publicPath: '/'
    // },
    compress: true,
    port: 8080,
    proxy: {
      '/': 'http://localhost:3000',
    },
  },
  resolve: {
    extensions: ['.*', '.ts', '.tsx', '.js', '.jsx', '.json'],
    fallback: {
      fs: false,
    },
  }

};
