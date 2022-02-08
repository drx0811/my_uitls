console.log(1);

setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3)
  });
});

new Promise((resolve, reject) => {
  console.log(4)
  resolve(5)
}).then((data) => {
  console.log(data);
})

setTimeout(() => {
  console.log(6);
})

console.log(7);


1,4,7,5,2,3,6
// ------

function foo(something){
  this.a = something
}

var obj1 = {
  foo: foo
}

var obj2 = {}

obj1.foo(2);
console.log(obj1.a); //2

obj1.foo.call(obj2, 3);
console.log(obj2.a);//undefined   x

var bar = new obj1.foo(4)
console.log(obj1.a);//undefined   x
console.log(bar.a);//4

// -----

function A(){
}
function B(a){
  this.a = a;
}
function C(a){
  if(a){
    this.a = a;
  }
}
A.prototype.a = 1;
B.prototype.a = 1;
C.prototype.a = 1;

console.log(new A().a);//undefined x
console.log(new B().a);//1   x
console.log(new C(2).a);// 2


// === 1,4,7,5,2,3,6 ===
// 2,3,2,4
// 1 undefined 2



// 在编写搜索框组件的过程中，要求搜索结果可以实时响应，然而每次用户输入都向服务器发请求会给服务器造成过大的压力，所以要求在用户不断的输入文本的同时，组件会按固定的频率发送搜索请求。请实现一个通用的函数，它接受第一个参数 action 代表一个函数，第二个参数 threshold 用于指定频率，它返 回一个新的函数，当新的函数在被不断调用时，action 会按指定频率运行。用例如下：
const yourFunction = function(func, threshold) {
  // your code.
}
const triggerSearch = yourFunction((val) => {
  console.log(val);
}, 300)
triggerSearch(searchText)


// 请实现一个具有延时功能的fetch, 不考虑跨域, 不考虑jsonp. 只要唯一标识一样,并且两次请求的的间隔在延时时间之内直接忽略上一次的请求.
/**
 * 具有延时功能的fetch
 * @param url {string} ajax 地址
 * @param options {object} 选项
 * @param options.id {string} 唯一标识,当前标识重复时会析构前面的实例
 * @param options.delay {number} 延时时间(ms)
 */
const mm = (url, options,fn)=>{
  const {id,delay}=options;
  let timer=0;
  return ()=>{
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(()=>{
      fn(url,id)
    },delay)
  }
}

const superFetch = (url, options) => {
  let fn = function(a,b){
    return new Promise((resolve,reject)=>{
      resolve(fetch(a,b).then(res=>res.json))
    })
  }
  mm(url, options,fn)
};


  for (let i = 0; i < 100; i++) {
    superFetch('ajax url', {
      id: 1688,
      delay: 100
    }).then(res => {
      if (res === 'destroy') {
        return {
          destroy: true
        }
      } else {
        return res.json();
      }
    }).then(json => {
      if (!json.destroy) {
        console.log(json) // 这边只执行一次
      }
    })
  }
