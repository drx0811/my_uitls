const path = require('path');
const express = require('express');
const compression = require('compression');
const { createProxyMiddleware } = require('http-proxy-middleware');
const fs = require('fs');
const chalk = require('chalk');
const { log } = console;

const app = express();

app.use(compression());

app.use(express.static(path.resolve(__dirname, '/Users/dongrongxing/workspace/modular/fide-modular-uniapp/unpackage/dist/build/h5')));

app.use(
  '/',
  createProxyMiddleware({
    target: 'http://192.168.5.24:8883',
    changeOrigin: true,
    // pathRewrite: { '^/api': '' },
  }),
);

app.listen(3000, function () {
  log(chalk`
  已开启 vital 模式，请点击下面链接并访问\n
  host: {red http://localhost:3000}
  `);
});
