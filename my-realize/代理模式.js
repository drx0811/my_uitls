

// 代理模式，
/***
 *1. 如果我们直接调用函数，可以简单地就实现目的；
  2. 但是如果我们 想要缓存 之前的结果  则我们需要使用代理的方式
 *3. 我们的代理函数 应该是一个自执行函数 并且返回一个新的函数的闭包函数，
 *4. 我们之所以 使用自执行函数 的闭包 函数 目的是 获得一个 caches 变量
 *
 */
function jiSua(...args) {
  let a = 0;
  for (let i = 0; i < args.length; i++) {
      a += args[i];
  }
  console.log(`看看是否用缓存`, a);
  return a
}
// jiSua(1,2,3)
// jiSua(1,2,3)

let caCa = (function () {
  let caches = {};
  return (...args) => {
      if (caches[args]) {
          return caches[args]
      }
      let a;
      a = jiSua(...args)
      caches[args] = a;
  }
})()
caCa(1, 2, 3, 4)
caCa(1, 2, 3, 4)
// 利用代理模式 实现缓存；
