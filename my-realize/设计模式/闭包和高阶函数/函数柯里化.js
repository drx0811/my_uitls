/**
 * 概念：把接受多个参数的函数 变换成接受最初函数作为第一个参数，并且返回接受余下的参数且返回结果的新函数
 * 函数柯里化 （其中一个问题是必须要知道第一个参数函数的参数个数,这个length属性不能是展开运算符的...,必须是实实在在的）
 * 作用：
 * 1。参数复用（参数可以保存下来）
 * 2. 提前返回 （addEvent）
 * 3. 延迟计算 （ add ）
 * @param fn
 * @param args
 * @returns {数组}
 */
 const carryFn=(fn,args=[])=>{
  let length=fn.length;
  return (...ar)=>{
    args=args.concat(ar);
    if (args.length>=length) {
      return fn.apply(null,args)
    }
    return carryFn(fn,args)
  }
}
const add=(a,b,c,d)=>{
  return a+b+c+d
}
const result=carryFn(add)(1,2)(3)(4,5);

let addEvent = (function(){
  if (window.addEventListener) {
    return function(el, sType, fn, capture) {
      el.addEventListener(sType, function(e) {
        fn.call(el, e);
      }, (capture));
    };
  } else if (window.attachEvent) {
    return function(el, sType, fn, capture) {
      el.attachEvent("on" + sType, function(e) {
        fn.call(el, e);
      });
    };
  }
})();
// addEvent 函数可以提前返回确认 浏览器到底是否支持 addEventListener；
addEvent(document.getElementById('ok'),'click',function (e) {
  console.log(3);
},false);
