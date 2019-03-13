'use strict'
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack/webpack.config');
const webpack = require('webpack');
const path = require('path');
const compiler = webpack(config);


const server = new WebpackDevServer(compiler, {
  contentBase: path.resolve(__dirname, '../dist'), //默认会以根文件夹提供本地服务器，这里指定文件夹
  port: 3000, //如果省略，默认8080
  publicPath: "/",
  hot: true,
  inline: true,
  disableHostCheck: true,
  historyApiFallback: {
    rewrites: [
      { from: /^\//, to: '/index.html' },
    ]
  },
  proxy: {
    '/': {
      bypass: function (req, res, proxyOptions) {
        console.log('Skipping proxy for browser request.')
        return `index.html`
      }
    }
  }
});

server.listen(3000, 'localhost', function (err) {
  if (err) throw err
})