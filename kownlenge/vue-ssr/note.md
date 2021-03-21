## vue-ssr
### 原理
- vue-server-render 实现了vue在node中解析,实现了将vue实例渲染成字符串;
> 通过webpack 打包出两次代码；一份给node 解析成出字符串渲染出静态页面，另一份代码插入到页面实现点击等事件
### 缺点
- 占用服务端内存
- 一些浏览器api无法使用，比如 mounted（不存在挂载了）
- 能使用的钩子 主要有beforeCreate,created;

 

