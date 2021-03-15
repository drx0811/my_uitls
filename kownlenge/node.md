### 3n
- nrm :可以切换，删除等控制npm包的下载源（比如，淘宝源 ，教育源，等），可以避免安装cnpm等；
- nvm: 切换本地所安装的node包的版本
- npm
- npm link 可以把本地bin目录下的执行文件连接到全局中， 使用#!/ usr/bin/env node 去执行

### gzip 
> gzip 主要作用是压缩重复率高的内容，但是视频，音频 一般不会使用它进行压缩；
```javascript
   zlib.gzip('buffer或者流',function(err,data){
     
   })；
   // 但是这种方式比较消耗内存；全部读取完毕；
```
- 我们可以使用流的方式，读取一定的数据再写入，递归；
```javascript
  zlib.createGzip();
  // 可以将流转换成gzip流；可以实现读取一点转换一点；
  fs.createReadStream('./express.md')//创建可读流
  .pipe(zlib.gzip())// 转变为gzip流；
  .pipe(fs.createWriteStream('./xxx.txt'));// 再次转化为可写流；
```
### form表单提交数据
- form表单不存在跨域，
- form表单只支持GET和POST两种；
- form表单默认的请求 enctype=application/-x-www-form-urlencoded
- form表单支持三种格式的数据；json和formData、file格式； 
- 表单提交数据如果保证安全？
- 一般会在前端做一个隐藏域，把一个默认的数据也提交上来，服务端根据隐藏域的数据做判断是否可信任；
  
### node 服务端处理跨域与 处理请求参数；
- 跨域的时候回 先发送一个options请求，所以我们要先处理options请求；
- 只要遇到 options请求，就直接end（）并且把status改为200；
- 服务端还要配置cors来实现源的跨域通过，res.setHeader('Access-Control-Allow-Origin','*');
- 如果客户端设置了headers 那么服务端也要设置header来避免跨域  res.setHeader('Access-Control-Allow-Headers','Content-Type,Author')
- 
- 我们要根据客户端的传过来的headers去判断参数的格式，比如 application/-x-www-form-urlencoded  则直接可以使用querrystring格式化数据为json, 
- 我们返回给客户端数据的时候也要设置返回数据格式设置 headers 比如  res.setHeader('Content-Type','application/json')


