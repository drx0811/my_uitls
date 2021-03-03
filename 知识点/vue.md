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

### template 
> vue2 中提供的template 标签和 react 中的Fragment的用法可以一样；
### v-model；
> v-model 并不等于value，onchange，vue已经对其进行了输入法的处理，

### vue3
> vue3 使用的 Proxy 进行代理 但是对于 嵌套的对象还是要进行递归的const state = reactive({bar: { a: 1 }})
> // 设置嵌套对象属性
> state.bar.a = 10 // no ok
### 作用域插槽 slot
> 作用域插槽 就是子组件内部的slot元素上可以自定义属性，并把子组件内部的数据传到 父组件，父组件通过v-slot定义一个变量并用 它；
 ### provide inject
> vue2源码解析之inject/provide原理
> 优点：跨组件传参
> 缺点：耦合高，提供的属性非响应式；
> 但是：我们可以在provide里面提供一个函数，函数的数据是响应式的，

### vue的render函数
> render函数 就是 通过 new Function("with(this){}");我们由ast语法树生成虚拟dom 通过的是new Function 和with 语法；new Function 会隔离作用域，with 用于改变作用域，但是有导致数据泄露的风险，同时性能不好； vue中的render函数；```function render () {
  with (this) {
    return _c('div',{on:{"click":change}},[_c('span',[_v(_s(number))]),_v(" "),_c('span',     [_v(_s(name))])])
  }
}；，```
> 但是我们通过 new Function 把作用域隔绝，所以可以在严格模式下运行；但是性能多少会有影响，最完美的方式去掉with；

### vue依赖收集的原因：
> vue中某个响应式数据如果在模板中并未使用，我们却在逻辑中修改了，为了阻止页面渲染，我们需要进行依赖收集，只有被依赖的数据修改了，我们才会重新渲染；

### vue 依赖收集的时机和运行的时候watcher是如何工作的；
1. vue是在对数据进行拦截的时候，即当我们进行数据取值操作也就是 执行get的时候如果 当前 属性上面有 watcher，那么我们就把watcher存起来；当我们 更改属性也就是 执行set操作的时候，我们就通知watcher去执行；watcher执行会执行 _v(_c)方法，进行页面渲染
2. 我们在dep中存watcher，目的是set的时候去执行watcher；在watcher中存dep，目的是 优化 dep的数量，当watcher中已经存在dep，就不用再次存了，这样可以避免重复执行watcher；

### vue中异步渲染：
1. vue是异步渲染，避免了数据连续更新触发多次渲染；性能更好；
2. 实现了nextTick方法；主要通过 降级的方式，首先promise -> MutationObserver-> setImmediate->setTimeout来实现的，这样只有同步方法执行完之后才会执行异步的方法；