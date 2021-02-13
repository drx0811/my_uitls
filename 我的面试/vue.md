### vue3与vue2的不同点
### Vue2 使用的是Object.defineProperty进行数据，不兼容IE8；要对整个data进行 递归 劫持导致性能浪费；
### Vue3 使用的是proxy来代理的，不兼容IE11，性能要好一些；
### 1.vue2相应是原理
#### 1.1数组
> Vue2 中对数组进行数据劫持的时候，为了能够使，push，unshift，splice调用后能够有响应式，
> 我们需要把 对数组进行监听的时候把this添加到数组中，比如可以  value._ _ Ob_ _ =this;
> 但是这样会有一个问题（超出内存），我们可以通过 
  Oject.defineProperty(value,_ _ ob _ _ ,{
    enumerable:false,//不可枚举
    configurable:false,// 不可被删除
    value:this
  })来进行不可枚举操作，解决这个问题；

### 2.vuex
> Vuex 的store是如何挂载到vue中的？
  vue中把vuex当做插件来使用，当vue.use(vuex)时，会调用vuex中install方法，
  install使用vue.mixin方法在beforeCreate钩子中通过递归的方式挂载到当前组件的每一个子组件中
  Vuex 的data和getter是如何实现响应式的？
  vuex会在 被实例化的时候 重新new一个vue的实例，然后把store中所有的state挂载到该vue实例中来实现响应式，getter是利用该vue实例的 computed计算属性来实现的；
  Vuex 的getters mutations，actions 通过观察者模式来，来实现数据方法调用的；

#### vuex的模块化
> vuex的store的模块化，默认是没有作用域的；
> 如果模块的名称 跟 外部 state的属性一样，那么内部的模块会覆盖掉外部的属性（尽量不要把模块的名称和state的属性一样）；
> 没有设置命名空间namespaced的模块的 getters 的取值都是直接取，不用考虑模块的名称；（用的发布订阅模式）
> 如果vuex添加了命名空间的话namespaced；

### vue2的缺陷
> vue2 对象嵌套过深的时候需要给每一个属性使用Object,defineProperty()来给其添加 gettter和setter ，
> 对象新增属性不具备自动含有响应式，需要我们替换整个对象，
> 或者使用 $set方法；删除属性还要使用$delete; 数组要重写7个原型方法；

### vue2 的$mount方法 的作用；
> 有时候我们需要把vue的实例挂载到根节点外部，（比如弹窗）等；

### vue2 的$watch方法 的作用；
> vue 的异步渲染queneWatcher会把属性对应的watcher存放起来；但是如果对应的是相同的则会被替换；
> 这就是我们多次执行$watch()如果监听的属性相同，则会执行最后的