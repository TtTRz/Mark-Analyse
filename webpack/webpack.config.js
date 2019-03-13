const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: [
    "react-hot-loader/patch",
    path.resolve(__dirname, '../src/index.js')
  ],
  //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
  output: {
    path: path.resolve(__dirname, "../dist"), // 出口目录 绝对路径
    filename: 'bundle.js',
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(sass|scss)$/,
        loader: 'style-loader!css-loader',
        exclude: /node_modules/
      },{
        test: /\.css$/,
        loader : 'style-loader!css-loader'
      },
      { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000' },  // 限制大小5kb
      { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000'} // 限制大小小于5k
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}