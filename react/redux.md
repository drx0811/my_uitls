###redux 核心原则
- 单一数据源(整个应用只有一个store)
> 这样的好处是方便我们随时提取出整个数据来进行数据持久化, 单一数据源可能会导致我们会维护一个大的js对象,这也就产生了combinReducer方法,
>把众多的reducer合并成一个大的,再去createStore
- 状态是只读的()
> redux中没有提供setter 也就是我们不能直接修改数据;对数据的操作并不是修改,而是每次操作都返回一个新的对象,这也就是redux中的reducer使用...来操作数据的原因
- 状态的变更只能通过reducer纯函数来进行
```js
// reducer中不能修改传入的状态; 虽然也可能可以达到目的,但是 这回让状态不可预测,时间旅行无法完成
// 不能调用Date.now()等非纯函数
// 不能调用api等,因为是异步的,而reducer是同步的
function reuderfunc(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return ...
    default:
      return state
  }
}
 
```
> 使用纯函数修改状态的好处是 接收一定的输入就会返回一定的输出,这样状态的


### 全局只有一个store，一个reducer
- redux中只能有一个store，只能有一个reducer，
- 我们之所以把许多reducer分开来写，是为了拆分方便，最后这些reducer还是要通过combineReducers 进行合并；
- dispatch 会触发 subscribe执行,  所有的组件都会进行订阅，这也就是为什么react-redux 的connect是个高阶组件了，目的是在外层组件进行订阅，然后把数据传到业务组件中；
- bindActionCreators 可以将dispatch和 action 合并， combineReducers 把所有的reducer对象合并成一个reducer函数；

### 当我们没有使用redux-thunk 的时候，我们的dispath传过去的参数只能是一个对象(即使是函数，但返回值仍然是对象)，

> 使用了Redux-Thunk后dispatch不仅仅可以发出plain object，还可以发出这个异步的函数

- 总结：thunk 本质上就是是dispath的参数由原先的对象改为支持传函数和对象；
```function increment() {
  return {
    type: 'INCREMENT'
  }
};

store.dispatch(increment());

有了之后我们可以传递一个函数；
function increment() {
  return {
    type: 'INCREMENT'
  }
};

// 异步action creator
function incrementAsync() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  }
}
store.dispatch(incrementAsync());
```
