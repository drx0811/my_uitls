## redux 中间件
redux中间件实现的原理是 compose函数,类似于 reduce的调用;
b调用了之后结果给a,最后全部返回 
> 把 `dispatch` 这个方法`不断用高阶函数包装`，最后返回一个`强化过后的 dispatch`
```javascript
funciton compose(...funcs){
  return funcs.reduce((a,b)=>(...args)=>a(b(...args)))
}
```
### 实现一个mini-redux
```javascript
function compose(...funcs) {
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
function createStore(reducer, middlewares) {
  let currentState;
  function dispatch(action) {
    currentState = reducer(currentState, action);
  }
  function getState() {
    return currentState;
  }
  // 初始化一个随意的dispatch，要求外部在type匹配不到的时候返回初始状态
  // 在这个dispatch后 currentState就有值了。
  /* 注意！！！只修改了这里，用一个不匹配任何计划的 type，来获取初始值 */
  dispatch({ type: Symbol() })
  
  let enhancedDispatch = dispatch;
  // 如果第二个参数传入了middlewares
  if (middlewares) {
    // 用compose把middlewares包装成一个函数
    // 让dis
    enhancedDispatch = compose(...middlewares)(dispatch);
  }
  return {
    dispatch: enhancedDispatch,
    getState
  };
}

```
### 使用redux
```javascript
let store = createStore(reducers,['中间件合集,执行时从右向左'])
```
