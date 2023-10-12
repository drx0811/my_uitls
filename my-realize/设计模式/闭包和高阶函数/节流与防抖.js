/**
 * 节流函数：由于频繁触发函数，导致多次执行，我们的目的是控制 每次一定的时间间隔内执行一次，控制流速；
 * @param fn
 * @param wait
 */
 function throttle(fn,wait){
  let flag;
  return ()=>{
    if (!flag) {
      flag=setTimeout(()=>{
        fn();
        flag=null
      },wait)
    }
  }
}
function handle(){
  console.log(Math.random());
}
// let time1=setInterval(throttle(handle,2000),100);
// let time2=setInterval(()=>{
//   throttle(handle,2000)
// },100)
// time2 不会执行，因为此处的setinterval 每次都会返回一个匿名函数,执行完匿名函数后都 又都返回一个匿名函数（但却未执行）；
// time1 每次都执行 节流函数，第一次执行的节流函数返回的是一个匿名函数，定时器第二次执行的函数变为了 节流函数的匿名函数；所以
// 节流函数 里面的flag 只会被声明一次；

function getName(){
  console.log(`1111`, 1111)
}

function throttle(fn,delay=2000){
  console.log(`111222`, 111222)
  let flag=false;
  return ()=>{
    if(!flag){
      flag=setTimeout(()=>{
        fn();
        flag=false;
      },delay)
    }
  }
}

// 当我们的触发函数中还要执行其他逻辑则需要进行如下操作
const fn=()=>{
  return throttle(getName)
}
let fs=fn()
window.onresize=fs;
// 当直接使用节流的时候，我们可以直接将节流函数等于触发事件来执行
window.onresize=throttle(getName)

/**
 * 防抖函数 目的是禁止 频繁触动，导致抖动；
 * @param func
 * @param wait
 * @returns {function(...[*]=)}
 */
const decounce1 = function(func, wait,) {// 最后一次执行版
  let timer = null;
  return function() {
    if (timer) {
      clearTimeout(timer);
    }
    timer=setTimeout(()=>{
      func()
    },wait)
  }
}
const decounce = function(func, wait,) { //立即执行
  let timer = null;
  return function() {
    if (timer) {
      clearTimeout(timer);
    }
    let start=!timer;
    timer=setTimeout(()=>{
      timer=null;
    },wait);
    if (start) {
      func();
    }
  }
}
function scrollTap() {
  console.log('触动了');
}
document.addEventListener('scroll', decounce(scrollTap, 500))
/*
*
* 节流和防抖的实现区别;
* 节流是每隔s时间执行一次,也就是说定时器每隔s时间执行一次,那么定时器的清除要在定时器内部
* 防抖是,在s时间内一直触发只会执行一次,也就是 只要触发就清空定时器,不触发的时候定时器才去执行
*
*
*
*
*
*
*
*
* */
