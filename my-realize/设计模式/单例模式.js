// 使用代理来实现单例模式；
// 代理中  我们需要利用一个 自执行函数 来保存这个单例，
class CreateDiv{
  constructor(name){
      this.name=name;
      this.init(name);
  }
  init(name){
      let div=document.createElement('div');
      div.innerHTML=name
      document.body.appendChild(div);
  }
}
let getInstance=(function (){
  let instance;
  return function(name){
      if (!instance) {
          instance= new CreateDiv(name)
      }
      return instance;
  }
})()
let d= new getInstance('d')
let c= new getInstance('c')
console.log(`d===c`, d===c)
/********************惰性单例模式*****************************/
// 惰性单例是指:在需要的时候才去创建;
//demo1 点击按钮创建弹窗

let createDiv = (function () {
  let div
  return function(){
    if (div) {
      return div
    }
    div = document.createElement('div')
    div.innerHTML = '创建弹窗'
    document.body.appendChild(div);
    return div
  }

})()
document.getElementById('root').onclick=function () {
  let layerDom = createDiv()
}

// demo2 点击生成 span div  或者 iframe 等标签
/**
 * 通用单例模式 把创建单例的方法抽象出来
 * @param fn
 * @returns {function(): *}
 */
let createSingle = function (fn) {
  let ele;
  return function () {
    if (!ele) {
      ele = fn.apply(this,arguments)
    }
    return ele
  }
}
let createIframe = function(elementType,parentDom){
  return function () {
    let element = document.createElement(elementType)
    parentDom.appendChild(element);
    return element
  }
}
let sinleIframe = createSingle(createIframe('iframe'))
document.getElementById('root').onclick=function () {
  let layerDom = sinleIframe()
}






















