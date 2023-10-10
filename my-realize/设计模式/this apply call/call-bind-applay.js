/**
 * call bind applay 的自我实现；
 * @type {number}
 */
var dd=12;
let obj={
  dd:11111,
};
Function.prototype.call1=function(...context){
  const [that,...args] = context;
  let _this = that||window;
  _this.fn=this;
  let result=_this.fn(...args);// call是要在内部自我调用
  delete _this.fn;
  return result
};
function names(n,m){
  console.log(this);
}


names.call1(obj, 12, {ba: 1111})
names.call1(null, 12, {ba: 1111})

Function.prototype.bind1=function(keys){
  let fn=this;//
  return function () {// bind 并没有调用，而是返回一个函数，这个函数的指针要指向一个对象，所以 let _this=this;
    fn.call1(keys)
  }
};
names.bind1(obj)();