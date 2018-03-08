var express = require('express')
var webpack = require('webpack')
var path = require('path')
var opn = require('opn')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.es6.configNew');
var bodyParser = require('body-parser')
var port=4000;
var proxyTable ={};
var app = express()
var compiler = webpack(webpackConfig)

var mocks = require('./mocks')


var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})


var hotMiddleware = require('webpack-hot-middleware')(compiler)

compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({action: 'reload'})
    cb()
  })
})


// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = {target: options}
  }
  app.use(proxyMiddleware(context, options))
})


app.use(require('connect-history-api-fallback')())

app.use(devMiddleware)


app.use(hotMiddleware)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', mocks)
module.exports =process.env.NODE_ENV !== 'testing' ? app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port+'/assets/'
  console.log('Listening at ' + uri + '\n')

  //if (process.env.NODE_ENV !== 'testing')
  opn(uri)
}) : app



































