const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const {createReadStream, createWriteStream} = require('fs');
const ejs = require('ejs');
const debug = require('debug')('server');
const mine = require('mine');
const chalk = require('chalk');
const url=require('url');
const zlib=require('zlib')

// debug('hello');// 根据环境变量进行打印；
class Server {
  constructor(config) {
    this.port=config.port;
    this.host=config.host;
    this.directory=config.directory;
  }
  async handleRequest(req,res){
    const {pathname}=url.parse(req.url);
    const filepath=path.join(this.directory,pathname);
    console.log('filepath :>> ', filepath);
    try {
      let statObj=await fs.stat(filepath);
      if (statObj.isDirectory) {
        const newFilepath=path.join(filepath,'index.html');
        try {
          const newStatObj=fs.stat(newFilepath);
          this.sendFile(req,res,newFilepath,newStatObj);
        } catch (error) {
          // if no file ,so show file list
          this.showFileList(req,res,filepath,statObj)
        }
      } else {
        this.sendFile(req,res,filepath,statObj)
      }
    } catch (error) {
      this.showError(error,req,res);
    }
  }
  async showFileList(req,res,filepath,statObj){
    // 注意中文转码
    const dirList= await fs.readdir(filepath);
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    res.end(dirList.toString());
  }
  gzip(req,res,filepath,statObj){
    const headers=req.headers;
    let acceptEncodeing=headers['accept-encoding'];
    let flag;
    if (acceptEncodeing && acceptEncodeing.indexOf('gzip')!==-1) {
     flag=zlib.createGzip();
    } else {
      flag=false;
    }
    return flag;
  }
  sendFile(req,res,filepath,statObj){
    // 判断浏览器是否支持gzip；
    const gzip=this.gzip(req,res,filepath,statObj);
    if (gzip) {
      res.setHeader('Content-Type',mine.getType(filepath)+';charset=utf-8');
      createReadStream(filepath).pipe(gzip).pipe(res);
    } else {
      res.setHeader('Content-Type',mine.getType(filepath)+';charset=utf-8');
      createReadStream(filepath).pipe(res);
    }
  }
  showError(error,req,res){
    debug(error);
    res.statusCode='404';
    res.end('NOT FOUND');
  }

  start() {
    http
    .createServer(this.handleRequest.bind(this))
    .listen(this.port,this.host,()=>{
      console.log(chalk.yellow(`程序正在运行在${this.port}端口上\r\n`));
      console.log(chalk.green(`运行的 的地址：${this.host}`))
    })
  }
}

module.exports = Server
