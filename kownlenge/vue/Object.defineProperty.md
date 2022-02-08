```javaScript
// 数据监听
/*
vue2 对数据进行劫持的时候，有三个地方，
1. 循环第一层的时候，
2. 循环第一层的时候要对取到的key对应的value（如果value为对象还要再次进行监听，深层递归），
3：对数据修改的时候，也就是调用set方法的时候，如果newValue!==value，那么我们还要对 newValue进行监听
*/
```
### vue新增属性不具有响应式
vue中的数据 data 是在created之前添加的一个Observer观察者的,之后data中每个属性更新都会通知依赖收集的
通过Object.defineProperty()是对 对象上的属性进行劫持而非 对象本身;
