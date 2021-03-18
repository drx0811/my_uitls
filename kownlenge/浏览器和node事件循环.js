
// node 主线程是单线程，可以再开线程进行任务


// 宏任务：一般都是宿主环境提供的api方法；比如script，定时器，ui渲染 setImmediate  ；
// 微任务：一般是由语言提供的api方法；比如 promise的then方法，mutationObserver process.nextTick()
/*
* 先执行script宏任务加载，遇到微任务后会放到 栈 中，（后进先出）；
* 执行完本轮事件的最后一个微任务后进行渲染；渲染完毕之后  代表本轮事件执行完毕
* 接下来 开始执行下一事件，首先从宏任队列中取出一个开始；
* 0. 遇到宏任务会放到队列中，（先进先出）
* 1. script setTimeout ajax onClick 都是宏任务
* 2. promise的then 方法是 微任务；
* 3. 一轮任务执行完后开始执行下一轮
* 4. 一轮 微任务中 只会执行最后存在的dom渲染；
*
* */

// node 的setImmediate 是个宏任务；在poll阶段如果有发现有setImmediate 那么会立即进入check阶段，否则会进入下一轮
// 也就是 poll（I/O）---> setImmediate----> setTimeout

/*
*
* node事件环
* 主要包括 timer ----> poll -----> check阶段，node允许我们控制的也就这三个
* timer：主要包括setTimeout，setInterval 队列
* poll： 主要包括 I/O操作 如果在此阶段check 队列为空，那么会直接进入timer阶段；
* check：主要包括 setImmediate
* node 从上到下执行，先执行 微任务 promise---> process.nextTick----> promise的then方法，
*
* */
fs.readFile('...',(err,data)=>{
  if (err) {
    throw new Error('发生了错误！')
  } else {
    setTimeout(()=>{
      console.log(1111);
    },0)
    setImmediate(()=>{
      console.log(2222);
    })
  }
})
// 2222 ------> 1111

// 在node中的 process.nextTick() 比 Promise 执行的优先级更高；
setTimeout(()=>{
  Promise.resolve().then(res=>{
    console.log(1111);
  })
  process.nextTick(()=>{
    console.log(2222);
  })
})
// 2222----->11111


