## react17 
### react17 没有新功能
react17没有添加新的api
### react事件委托方式的更改
```jsx
<button onClick={handleClick}>
// 等价于
myButton.addEventListener('click', handleClick);
```
> 在React 17中，React将不再在该document级别附加事件处理程序。
相反，它将把它们附加到渲染您的React树的根DOM容器中;

在React 16和更早的版本中，React会document.addEventListener()
处理大多数事件。React 17将rootNode.addEventListener()在后台调用

