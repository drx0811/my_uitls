## vuex
vuex 提供一个api  subscribeAction 用来处理调用action前后的逻辑,类似于 面向切片 AOP
```js
store.subscribeAction({
  before: (action, state) => {
    console.log(`before action ${action.type}`);
  },
  after: (action, state) => {
    console.log(`after action ${action.type}`);
  }
});
```
