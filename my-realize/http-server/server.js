const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const {createReadStream, createWriteStream} = require('fs');
const ejs = require('ejs');
const debug = require('debug')('server');
const mine = require('mine');
const chalk = require('chalk');
const url=require('url');

debug('hello');// 根据环境变量进行打印；
class Server {
  constructor(config) {
    this.port=config.port;
    this.host=config.host;
    this.directory=config.directory;
  }
  handleRequest(req,res){
    const {pathname}=url.parse(req.url);
    const filepath=path.join(this.directory,pathname);
    console.log('filepath :>> ', filepath);
  
  }

  start() {
    http
    .createServer(this.handleRequest.bind(this))
    .listen(this.port,()=>{
      console.log('1111 :>> ', 1111);
    })
  }
}

module.exports = Server
