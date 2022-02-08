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

### koa中间件原理：
> koa 会把所有的中间件组合成一个大的promise，
>当这个promise执行完毕之后会采用当前的ctx.body 进行结果响应； 
>所有的中间件必须有await 或者 retrun，否则会逻辑不清；
```js
(function*() {
  // middleware1
  console.log(1)
  yield function*() {
    // middleware2
    console.log(3)
    yield function*() {
      // middleware3
      console.log(5)
      yield (function*() {
        // middleware4
        console.log(7)
      })()
      // middleware3
      console.log(6)
    }
    // middleware2
    console.log(4)
  }
  // middleware1
  console.log(2)
})()
```
### koa异常捕获
koa要想捕获所有中间件的异常,需要将第一个中间件 设为捕获异常的中间件
```js
// 异常捕获处理
const handler = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    ctx.response.body = {
      code: '00000',
      message: '服务器异常',
      desc: error.message
    }
  }
}
// 异常捕获逻辑，一定要放在第一个中间件
app.use(handler)
app.use(async (ctx, next) => {
  console.log(1)
  await next()
  console.log(2)
})
app.use(async (ctx, next) => {
  console.log(3)
  await next()
  console.log(4)
})
```
