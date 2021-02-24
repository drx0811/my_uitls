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
