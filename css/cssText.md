### cssText 的用法
```js
let dom=document.getelementByid('body');
    dom.style.cssText += ';cursor:move;'
    dom.style.cssText += ';top:0px;'
```

css 对于 inline和block元素
margin 对inline元素 的水平方向有用,垂直方向无用