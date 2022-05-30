### Function;
Function 可以创建函数,并传参;
```js
let Vue = {
  drx:"drx",
  sexFn:function () {
    return '1'
  }
}
let str = 'return ' + '`my name is ${Vue.drx},my sex is ${Vue.sexFn()}`';
let fn = new Function('Vue',str)(Vue);
console.log(fn)
// 第一个 字符串 Vue 表示 的是 在函数模板中的变量,第二个为参数Vue,传递过去之后,我们就可以在模板中直接使用变量

```
