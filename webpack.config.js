const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss|less|css)$/,         
        exclude: [ /client\/stylesheets\/modules/],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.ttf$/,
        use: [
          {
            loader: 'ttf-loader',
            options: {
              name: './font/[hash].[ext]',
            },
          },
        ]
      }, 
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'static'
            }
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader'],
      },
      {
        test: /\.mp3$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'static'
          }
        },
      },
      {
        test: /\.(ico)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static', 
          },
        }
      }
    ],
  },
  
  devServer: {
    host: "localhost",
    port: 8080,
    // match the output path
    static: {
      directory: path.resolve(__dirname, "dist"),
      // match the output 'publicPath'
      publicPath: "/",
    },
    // enable HMR on the devServer
    hot: true,
    historyApiFallback: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        secure: false,
      },
      "/static": {
        target: "http://localhost:3000",
        secure: false,
      },
      "/assets": {
        target: "http://localhost:3000",
        secure: false,
      },
    },
  },

  plugins: [
    new HtmlWebpackPlugin({ template: "./client/index.html" }),
  ],

  optimization: {
    minimize: true,
  },
};    