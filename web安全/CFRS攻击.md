## CFRS 攻击
### 浏览器跨域 主要是 ajax的跨域，form 表单没有跨域；
### 正常登入之后的cookie，通过钓鱼网站获取正常的cookie进行攻击 
> 解决：用 encodeURIComponent  对url进行转义；
### src属性内容添加的时候，注入一些脚本
> 用 encodeURIComponent  对url进行转义；

### 用户填写表单的时候
> 我们可以前端对表单数据进行转义，比如 <  >  这些特殊字符进行转义，然后服务器
>再次进行转义  即可避免 攻击
>