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

### $set() 的原理
> 其实就是从新走了一遍 Object.defineProperty，进行数据劫持了一遍；

### vue-router 导航守卫
* vue-router的实例 含有 `导航卫士` 来控制进入页面的权限
* 我们可以在 `router.beforEach`（to,from,next）{}去判断是否可以跳转到指定的路由；
- `afterEach` 只有to 和 from; 没有next，所以`不能`改变路由的跳转


### 导入方式 通过 * as name的形式
```jsx harmony

    // filters.js
    export function getName() {
      console.log(111);
    }
    export function getAge() {
      console.log(222);
    }

    
    // 在index.js 中导入filters.js中的所有的方法；

    import * as filters from './filters'

```

### $attrs
> 在vue中通过v-bind:attrs 可以把所有的属性传递到子组件中
#### 事件传递
```html

    // 子组件 往父组件传递方法；
    this.$emit('getNew', evt);// 传递一个  getNew事件；
    

    // 父组件 通过属性接收该属性  有两种形式；
    <w-button v-on:getNew="getNew">
      wqwwwq
    </w-button>
    <w-button v-on="{getNew}">
      wqwwwq
    </w-button>
    methods: {
        getNew(e) {
          console.log(e)
        },
    }

    // 子组件 直接调用父组件的方法；
    methods: {
        childOnClick() {
          this.$parent.$emit('get', { name: 1 })
        }
    }

    // 父组件
    created() {
        this.$on('get', (e) => {
          console.log(e)
        })
    }
```

### $nextTick
> $nextTick存在的原因是，vue是异步渲染，当数据变化时候，vue会开启一个队列，会把同一个事件循环中观察到的
>数据变化的watcher放在这个队列中，这个队列会进行去重操作，在下一个事件循环的时候，vue会清空队列，进行DOM
>更新。所以当我们更改了数据之后，页面更新了，但是我们获得dom结构仍然是上一次的dom，我们需要通过$nextTick 获得最新的dom

### $route
> 当通过watch 中监听 $route 的时候，我们应该使用 immediate 的形式，因为刚进入当前页面的时候url变化，所以要立即监听；

### $attrs 和 $listeners
> `$attrs` 可以传递 所有（不包括 `class和` `style`）属性；`$listeners` 可以传递所有的 方法
- `父组件` 挂载在`子组件`上面的属性 我们再把属性传递到 `孙子组件`，只要在`子组件中 没有在props中显示声明`的属性都会 通过 `v-bind="$attrs"`的形式传递
- `$listeners` 可以把父组件所有的方法（除了 .native 修饰的）

### 父组件向子组件传递事件
> 有时候我们需要封装一个`公共组件`，该公共组件的为了满足`复用`的要求，`不能`有自己的 `事件` 和 `状态`，所有的属性和状态都是父组件传递过来的；
```vue
//父组件
<hamburger :toggle-click="toggleSideBar" :is-active="sidebar" class="hamburger-container" />
methods: {
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    },
}


// 子组件
<template>
  <div style="padding: 0 15px;" @click="toggleClick">
    <div
      :class="{'is-active':isActive}"
    >
      11111111
    </div>
  </div>
</template>
export default {  
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    toggleClick: {
      type: Function,
      default: null
    }
  }
}

```
### react的受控组件和非受控组件
> 受控组件 一般是维护一份自己的state和事件类似双向绑定；非受控组件一般是通过ref来获取值；一般情况下 受控组件比较灵活，非受控组件主要用于dom相关，动画相关
### /deep/
> vue中的样式 使用了scoped 之后，该样式只会影响当前组件的样式，并不会影响他的子组件的样式，我们为了能够 在父组件中修改子组件的样式，我们需要使用 /deep/来操作
>这样会更改当前父组件下的子组件，但是不会影响全局下的子组件
>
### watch
> 在组件中watch可以是一个对象，包括 handler函数 和 sync 或者 deep；也可以是一个数组（用的不多）
- 如果 watch监听的数据变化多次，`一般如果不写sync 只会监听最后一次（进行合并）`，写了sync会全部执行；
- 在组件中的watch 其实最终还是调用了实例上的$watch 也就是 vm.$watch(); 同样的是 当数据变化了，vm.$watch会去取值，也就是走了数据的getter方法；
#### 深度监听
```vue
    watch:{
      'kk.age.name':{
        handler(newvalue,oldvalue){
          console.log(newvalue,oldvalue);
        },
        immediate:true
      }
    },
    methods:{
      changeName(){
        this.kk={
          age:{
            name:'0'
          }
        }
      }
    }
```

### computed的原理
- watch会在内部对变量取值，但是computed不会；
- computed 依赖的值不变，那就不会执行
- computed值可以用于模板渲染；
> computed 也会在内部创建一个watcher来实现的，只是多了一个缓存机制和依赖收集；
