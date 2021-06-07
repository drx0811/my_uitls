## 如何在vue中使用vue-router
1. Vue使用插件，即调用Vue的use方法；
```js
  // router.js 
  Vue.use(Router);
```
2. 实例化router，并配置router的配置对象，含routes路由
```js
// router.js 
export default new Router({
    mode:"hash",
    routes:[
        {
            path:"/hello",
            component:HelloWorld
        },
        {
            path:"/",
            component:VuexTest
        },
        {
            path:"/form",
            component:Form
        }
    ]
})
```
3. 在vue实例上配置router实例
```js
// main.js
import router from "./config/router";
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
```
4. 使用
```js
<template>
  <div id="app">
    <router-link to="/">home</router-link>|
    <router-link to="/form">form</router-link>|
    <router-link to="/hello">HelloWorld</router-link>
    <router-view></router-view>
  </div>
</template>
``` 
5. 效果
```js
let Vue;
class KVueRouter {
    constructor(options){
        this.$options=options;
        this.$routerMap={}; //{"/":{component:...}}
        // url 响应式，当值变化时引用的地方都会刷新
        this.app = new Vue({
            data:{
                current:"/"
            }
        });
    }
    // 初始化
    init(){
        // 监听事件
        this.bindEvent();
        // 解析路由
        this.createRouteMap();
        // 声明组件
        this.initComponent();
    }
    bindEvent(){
        window.addEventListener('hashchange',this.onHashChange.bind(this));
    }
    onHashChange(){
        this.app.current = window.location.hash.slice(1) || "/";
    }
    createRouteMap(){
        this.$options.routes.forEach(route=>{
            this.$routerMap[route.path]=route;
        })
    }
    initComponent(){
        Vue.component('router-link',{
            props:{
                to:String,
            },
            render(h){
                return h('a',{attrs:{href:'#'+this.to}},[this.$slots.default])
            }
        });
        Vue.component('router-view',{
            render:(h)=>{
                const Component = this.$routerMap[this.app.current].component;
                return h(Component)
            }
        });
    }
}
// 参数是vue构造函数，Vue.use(router)时,执行router的install方法并把Vue作为参数传入
KVueRouter.install = function(_vue){
    Vue = _vue;
    //全局混入
    Vue.mixin({
        beforeCreate(){//拿到router的示例，挂载到vue的原型上
            if (this.$options.router) {
                Vue.prototype.$router=this.$options.router;
                this.$options.router.init();
            }
        }
    })
}
export default KVueRouter;
```
Vue.use(Router)时，会调用router的install方法并把Vue类传入，
混入`beforeCreate`方法，即在Vue实例化后挂载前在vue原型上挂个`$router`方法(因为这样后面才能用this.$router.push()
，然后调用router实例的init方法；

在init中把三件事情都干了，`监听路由`，`解析路由`（路由mapping匹配），`定义组件`；

需要注意的是，存储当前路由的变量this.app.current非一般的变量，而是借用Vue的响应式定义的，所以当路由变化时只需要给这个this.app.current赋值，而router-view组件刚好引用到这个值，当其改变时所有的引用到的地方都会改变，则得到的要展示的组件也就响应式的变化了。











### vue-router
> router本身携带的钩子
```js
export default {
    beforeRouterEnter(to,from,next){ // 做路由权限
      // 这里没有this  因为此时实例还没有创建，所以没有this
      next(vm=>{
        console.log(vm);
        // vm才是 vue的实例
      })
    },
    boforeRouterLeave(to,from,next){// 业务离开当前路由的时候调用；
      // 实例已经创建，所以有this;
    },
    beforeRouteUpdate(to,from,next){
      // 当路由跳转，但是组件是同一个的时候会执行；
      // 比如 对于一个带有动态参数的路径 /good/:id，在 /good/1 和 /good/2 之间跳转的时候
    }
}
```
### router-link 与 router-view
> 首先这两个 标签肯定 都是vue的 实例组件；因为可以当做标签使用
