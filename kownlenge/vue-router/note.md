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
