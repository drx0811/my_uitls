
## 原型和原型链的几个问题
1. 什么是构造函数？
2. 构造函数与普通函数有什么区别？
3. 原型链的顶端是什么？
4. prototype、 __proto__ 、 constructor 在什么对象下存在？

### 构造函数跟普通函数一样,没有啥区别,只是一般便于分区 将构造函数首字母大写;

### 原型链就是 __proto__; 他的顶端就是 null

### prototype
只有函数才有prototype 
### __proto__
所有的对象都有一个__proto__(
  函数也属于对象,所以函数也有一个__proto__,函数的__proto__指向的是Function的原型;
  Function.prototype也是一个对象所以他还有一个__proto__,指向的是Object构造函数;
  而Object构造函数肯定也有一个__proto__ 那么就指向的是null
)

```js
function GetName(){
  this.name=null;
}
GetName.prototype.get=function(){
  return this.name
}
let getName=new GetName();
console.log(GetName.__proto__===Function.prototype);//true
console.log(Function.__proto__.constructor===Function);//true
console.log(Function.prototype.__proto__);//
console.log(Function.prototype.__proto__.__proto__);
console.log(getName.__proto__.__proto__.constructor);
// 所有的函数都是 Function的实例;也就是所有的函数的 __proto__ 都指向 Function的原型;
// 所有函数的原型的__proto__ 都指向 Object的构造函数;也就是 fn.prototype.__proto__====>Object
```

