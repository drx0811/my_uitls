### 更改url却不刷新页面
> 应用场景中我们需要更改url参数，却不需要重新刷新页面
```js
window.history.pushState({}, 0,  window.location.href + '?type=china');
```
