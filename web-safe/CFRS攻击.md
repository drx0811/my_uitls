## CFRS 攻击
### 浏览器跨域 主要是 ajax的跨域，form 表单没有跨域；
### 正常登入之后的cookie，通过钓鱼网站获取正常的cookie进行攻击 
> 解决：用 encodeURIComponent  对url进行转义；
### src属性内容添加的时候，注入一些脚本
> 用 encodeURIComponent  对url进行转义；

### 用户填写表单的时候
> 我们可以前端对表单数据进行转义，比如 <  >  这些特殊字符进行转义，然后服务器
>再次进行转义  即可避免 攻击

## 常见的 防止CFRS 攻击
- 尽量使用post，不要使用get，防止简单的加载图片就攻击
- cookie策略，但是并不是所有的浏览器都支持，（浏览器默认拦截第三方本地Cookie的发送，但并不是所有的浏览器都这样）
- 加验证码，
- Referer （防止图片盗链问题） 
- token的使用；
