### generator
```js
  /*  generator 函数 第一次调用是启用 generator函数；之后每一个
    * next都会返回 函数中 yield 的 右侧的内容
    * 至于yield左侧的值  是在下一次next 的时候传递过去的；
    * generator函数 只要遇到 return 就会彻底结束 generator函数 使值done变为true
    */
  function get2() {
      function* gen() {
          yield 100;
          const res = yield 200;
          console.log(`res`, res);//400
          yield 600;
          return res;
      }
      let it = gen();
      console.log(`it.next()`, it.next(300));// value:100;
      console.log(`it.next()`, it.next(300));// value:200;
      console.log(`it.next()`, it.next(400));// value:600;
      console.log(`it.next()`, it.next(500));// value:400;
  }
```
### generator函数遇到 throw 
```js
// generator 函数 除了可以用 next 还可以用 throw去抛出错误
// 但是 只要 throw出错误就会 彻底结束 generator函数；
async function gen() {
    // const res=await 111;
    try {
        throw new Error('粗我了')
    } catch (error) {
        console.log(`error`, error)
    }
}
gen()
.then(res => {
  console.log(`res`, res)
})
```




