const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  /*入口 */
  entry: [
    path.join(__dirname, 'src/index.js'),
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port: '8082',
    host: 'localhost',
    contentBase: './dist',
    historyApiFallback: true
  },
  optimization: {
    runtimeChunk: {
        name: "manifest"
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  /*插件 */
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  /*输出 */
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
              loader: 'style-loader'
          },{
              loader: 'css-loader'
          },{
              loader: 'postcss-loader',
              options: {
                  sourceMap: true,
                  config: {
                      path: 'postcss.config.js'
                  }
              }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
            {
                loader: 'style-loader', 
            },
            {
                loader: 'css-loader', 
            },
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true,
                    config: {
                        path: 'postcss.config.js'
                    }
                }
            },
            {
                loader: 'sass-loader', 
                options: { sourceMap: true }
            }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.m?js$/,
        include: path.resolve(__dirname, 'src'), // 只解析src下面的文件,不推荐用exclude
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  resolve: {
    alias: {
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        router: path.join(__dirname, 'src/router'),
        actions: path.join(__dirname, 'src/redux/actions'),
        reducers: path.join(__dirname, 'src/redux/reducers'),
        reduxs: path.join(__dirname, 'src/redux')
        
    }
  }
};