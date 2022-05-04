const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
// const modeEnv = process.env.NODE_ENV === 'production' ? 'production' : 'development';
// development 開發者角度
// production 完成，會自動壓縮
// console.log('.....', process.env.NODE_ENV);
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;



module.exports = {
  // mode: modeEnv,
  mode: 'development',
  // 輸入的檔案位置
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    // 輸出的資料夾位置，如果沒有會自動新建
    path: path.resolve(__dirname, 'dist'),
    // 輸出的檔案名稱
    filename: '[name].[contenthash].js',
    publicPath: 'auto',
    clean: true, //清理輸出資料夾
    assetModuleFilename: '[name][ext]', //圖片檔保持原檔名
  },
  // 指定啟動資料夾
  devServer: {
    // static: './dist',
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000, //localhost:3000，不設置就是默認的8080
    open: true, //自動開啟頁面
    // hot: true, //不刷新頁面的狀態下修改code，目前版本可以不添加，會自動執行
    compress: true, //啟用 gzip 壓縮
    historyApiFallback: true, //用一個頁面取代404
  },
  module: {
    rules: [
      {
        // 正則表達式
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      // babel
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png | jpg | gif |avif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      // 取用的模板
      template: './index.html',
    }),
    new MiniCssExtractPlugin({
      // 匯出的檔案名稱
      filename: '[name].[hash].css',
    }),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    //   'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
    // }),
    // new BundleAnalyzerPlugin(),
  ],
};
