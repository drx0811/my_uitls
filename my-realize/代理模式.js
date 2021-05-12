

// 代理模式，
/***
 *1. 如果我们直接调用函数，可以简单地就实现目的；
  2. 但是如果我们 想要缓存 之前的结果  则我们需要使用代理的方式
 *3. 我们的代理函数 应该是一个自执行函数 并且返回一个新的函数的闭包函数，
 *4. 我们之所以 使用自执行函数 的闭包 函数 目的是 获得一个 caches 变量
      代理模式场景
      ： 比如我们设置图片懒加载   设置计算缓存  相同请求结果的缓存
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



/**
 * 代理实现缓存
 */
const createImg = (() => {
  let imgDom = document.createElement('img')
  document.body.appendChild(imgDom)
  return {
    setSrc: function (src) {
      imgDom.src = src;
    }
  }
})()
// createImg.setSrc('https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data-gl/thumb/global-population-bar3d-on-globe.webp?_v_=1620173904172')


/**
 * 代理模式
 */
const createImgProxy = (function () {
  const img = new Image();
  img.onload = function () {
    createImg.setSrc(this.src)
  }
  return {
    setSrc: function (src) {
      createImg.setSrc('本地图片')
      img.src = src;
    }
  }
})()

createImgProxy.setSrc('https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data-gl/thumb/global-population-bar3d-on-globe.webp?_v_=1620173904172')
