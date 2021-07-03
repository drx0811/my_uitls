## express.js 源码
1. express 是一个函数，相对于koa来说大而全，封装了路由,静态文件，通过回调的方式执行；
2. express 设计模式也是发布订阅，
3. express 路由系统是分层的layer层和route层，layer中包含包含route （首先layer去匹配路径，route去匹配处理方法，可能会有多个方法）总结来说是一个二维数组的模型，
4. 中间件：一般放在路由之前，控制是否执行，；

## connect.js 与 express.js 的区别?
connect.js 扩展了node,提供了大量的node的中间件, 而express.js 则扩展了 connect.js
添加了 三个优秀的特性:路由分发,请求处理,视图渲染
