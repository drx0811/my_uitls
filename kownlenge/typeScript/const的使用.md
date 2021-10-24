
## as const 
> as const 整体上是一个断言,可以让ts的类型变得更窄,更精确
- 当我们不适用as const 的时候会报错;
```javaScript
const args = [8, 5]
const angle = Math.atan2(...args);// error! Expected 2 arguments, but got 0 or more
console.log(angle);
```
- 当我们使用as const 的时候
```javascript
const args = [8, 5] as const
const angle = Math.atan2(...args);// 不报错
console.log(angle);
```
### 总结 
const args = [8, 5]; 会被并推断出number[]的类型,但是参数的长度都无法确定可能是0或者多个
但是我们加上断言之后  const args = [8, 5] as const; 我们可以断定 args的类型是是 readonly [8,5];这样
就不会出现长度的错误了




