### localStorage 和 sessionStorage
> 他们不能跨域，我们只能在当前域名端口协议下设置存储，不能给其他应用设置；
### cookie
>  http无状态 我们通过cookie来实现有状态（前端可以设置cookie，服务端也可以设置cookie）；但是
> cookie一般不安全（存储在前端，可以修改）
#### 针对cookie的不安全性质，我们解决办法
> 我们设置签名，也就是通过 `加盐算法`：进行签名，但是不能解密；
```js
const crypto=require('crypto');
crypto.createHmac('sha256','drx').update('my-text').digest('base64');
// express 用的是sha256，koa用的是sha1 ;   用于网络传输层的一般都用base64;    

```
```js
const http=require('http');
const querystring=require('querystring')
const app=http.createServer((req,res)=>{
  if(req.url==='/'){
    const cookies=JSON.parse(querystring.parse(req.headers.cookie,';','='));// 读取cookie
    res.end(JSON.stringify(cookies))
  }else{
    // domain 域名；默认设置的是当前域名
    // expires
    // httpOnly 防止js修改，但是仍然可以浏览器手动修改（不安全）
    res.setHeader('Set-Cookie',['name=drx','age=18']);// 设置cookie
  }
})
app.listen(3000,()=>{console.log('运行了')})
```
### session 
> session 基于 cookie，存储在服务端，重启服务丢失，可以用redis来存储；存在的问题是（多平台共享，数据丢失的问题）

### jwt
> json&web&token(不存在与服务器上)
