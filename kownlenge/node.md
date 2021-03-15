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
  

