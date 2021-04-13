### 主要运用的是 自定义指令的方式实现

### 立即执行函数，使用到的api是 MutationObserver
> 只要dom发生变化就会触发该api，不同的是当多个dom更新的时候，MutationObserver会
> 将其放入到一个数组中，最后一次性的从变化数组中执行其对应的回调函数。
### MutationObserver 和 MutationEvents
- MutationEvents 兼容性很不好，
- MutitionEvents 性能很不好，他是同步执行的，多个dom变化会立即执行，导致延迟，甚至崩溃

### MutationObserver api
```js
// 选择需要观察变动的节点
const targetNode = document.getElementById('some-id');

// 观察器的配置（需要观察什么变动）
const config = {
 attributes: true,
 childList: true,
 subtree: true 
};

// 当观察到变动时执行的回调函数
const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};
// 创建一个观察器实例并传入回调函数
const observer = new MutationObserver(callback);
// 以上述配置开始观察目标节点
observer.observe(targetNode, config);
// 之后，可停止观察
observer.disconnect();
```
