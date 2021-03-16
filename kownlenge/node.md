### 3n
- nrm :可以切换，删除等控制npm包的下载源（比如，淘宝源 ，教育源，等），可以避免安装cnpm等；
- nvm 主要用于windows系统，需要先卸掉所有的npm和node（很不友好）；
- mac用 n 来管理比较方便；
- npm
- npm link 可以把本地bin目录下的执行文件连接到全局中， 使用#!/ usr/bin/env node 去执行

### gzip 
> gzip 主要作用是压缩重复率高的内容，但是视频，音频 一般不会使用它进行压缩；
```javascript
   zlib.gzip('buffer或者流',function(err,data){
     
   })
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
- 如果客户端设置了headers 那么服务端也要设置header来避免跨域  res.setHeader('Access-Control-Allow-Headers','Content-Type,Author')；
- 服务端默认支持get和post，我们可以通过设置来支持Put，Delete等复杂请求；res.setHeader('Access-Control-Allow-Methods','PUT,DELETE');
- 服务端可以设置发送options请求的频率；一般情况下options请求发送并不是每次都发送，我们 可以通过服务端设置发送的频率
- res.setHeader('Access-Control-Max-Age','30*60');//设置30秒发送一次option请求；
- 我们要根据客户端的传过来的headers去判断参数的格式，比如 application/-x-www-form-urlencoded  则直接可以使用querrystring格式化数据为json, 
- 我们返回给客户端数据的时候也要设置返回数据格式设置 headers 比如  res.setHeader('Content-Type','application/json')；

### node作为中间层；
- node作为中间层 去访问其它服务器接口；
  ```javascript
    const client=http.request({
      url:'',
      method:'',
      port:'',
      header:{
        'Content-Type':'application/json'
      }
    },(res)=>{
      // 此处的内容就是接口返回值
      res.on('data',function(data){
        // 监听返回的数据；
      })
    })
    client.end(`客户端要传递的数据`)
    
  ```
### node设置缓存
> node的缓存分为强制缓存和协商缓存；
- 强制缓存（默认 首页(默认访问的页面)是不会进行缓存的，但是该页面引用的资源是可以进行缓存的）；有可能会修改后页面却无响应；
```javascript
  // 老版本浏览器支持； 要设置绝对时间
  res.setHeader('Expires',new Date(Date.now()).toUTCString());
  // 新版本浏览器 是设置 cache-control;
  res.setHeader('Cache-Control','max-age=10')；


  //如果没有设置缓存那么默认会设置如下的
  res.setHeader('Cache-Control','no-cache');// 代表 缓存但每次都向服务器发送请求；
  res.setHeader('Cache-Control','no-store');// 代表不缓存；
```
1. 对比缓存；（主要通过时间戳进行对比，如果缓存的时间范围内修改了那么会重新发送）;
> node 中的fs.stat(filepath);返回值有一个 ctime参数，我们可以 设置请求头；
```javascript
  // 1.发送请求的时候我们先要设置缓存模式；
  res.setHeader('Cache-Control','no-cache');
  // 2. 得到缓存设置的时间；
  const ifModifiedSince=req.headers('if-modified-since');
  // 3.对比设置缓存和文件修改的时间戳，如果相等，那么就返回空状态码为304；
  fs.stat(filepath,(err,fileObj)=>{
    const lastModified=fileObj.ctime.toUTCString();
    if(ifModifiedSince===lastModified){
      res.statusCode=304;
      res.end();
    }
    res.setHeader('Last-Modified',lastModified); 

  })
  // if-modified-since 与 Last-Modified 设置缓存的策略的缺点是，修改时间变了但是内容没有变化，同样会不缓存； 

```
2. 对比缓存（比较内容来判断是缓存）
> 通过md5摘要算法来进行；md5算法的特点有三个：不可逆、不同内容不一样的结果、转换过的结果都是一样长的、 相容的内容结果是相同的；雪崩效应（内容变化一点，结果变化翻天腹地）；
```javascript
  // 1. 设置缓存的标识；
  res.setHeader('Cache-Control','no-cache');
  let ifNoneMatch=req.headers['if-none-match'];
  // 2. 设置 hash
  const crypto=require('crypto'); 
  fs.stat(filepath,(err,fileObj)=>{
    const hash=crypto.createHash('md5');
    const contentHash=hash.update(fs.readFileSync(filepath)).digest('base64');
    res.setHeader('Etag',contentHash);
    if(ifNoneMatch===contentHash){
      res.statusCode=304;
      res.end();
    }
  })
  // 通过 if-none-match与 Etag 来设置的缓存 太耗性能；一般会取文件开头一部分内容加上 文件的大小来做； 
```

