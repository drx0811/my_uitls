## $forceUpdate
> $forceUpdate 只会影响当前实例本身和插入插槽内容的子组件,并不是所有子组件
>
实例更新的前提是数据发生变化,数据发生变化后会进行 依赖更新,依赖更新就是收集依赖的
watcher 调用了update方法;
```vue
Vue.prototype.$forceUpdate = function () {
    const vm: Component = this
    if (vm._watcher) {
        vm._watcher.update()
    }
}
```
### 应用实例
```vue
// 在vue中,我们使用一些方法并不会触发vue更新,
// 我们可以通过 $set等方法, 同事我们也可以使用 $forceUpdate方法
change: function(index) {//增加性别属性
    this.list[index].sex = '男';
    this.$forceUpdate();
},
clear: function() {//清空数组
    this.list.length = 0;
    this.$forceUpdate();
}
```
