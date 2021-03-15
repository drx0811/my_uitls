## koa.js 
1. 首先是一个类；
2. 通过`use`来调用中间件(把req,res 全部封装到ctx上下中)
3. 通过`listen`来监听服务
4. 内部用到了`发布订阅`模式，（把所有的中间件存储到一个数组中，在use中通过调用next方法，一步步递归执行中间件，如果剥洋葱）
5. 通过`compose`函数把中间件组装成一个函数；

### koa 是如何避免多个实例共享context，request,response 的？
> 通过在koa实例构建的时候在`constructor` 中通过 `Object.create(...)`;来实现的
### koa同一个实例如何避免 每次请求共享 context，request,response
> 通过在创建实例上下文 `createContext` 中，使用 `Object.create(...)`
