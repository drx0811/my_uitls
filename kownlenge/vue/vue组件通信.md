### $dispath
- 父子组件 我们可以通过 this.$emit("name",)来触发父组件的里面绑定到子组件上的事件；
- 祖父子组件 我们可以通过 this.$parent.$emit("name",)来触发父组件的里面绑定到孙子组件上的事件；
```vue
    Vue.prototype.$dispath=function(name,value){
      let parent=this.$parent;
      while(parent){
        parent.$emit(name,value);
        parent=parent.$parent;
      }
    }
```
### $broadCast;
> 原理跟 $dispath 类似，只不过用的是$children;进行广播
### .native
> .native 就是给组件的最外层绑定事件
### provide inject 
> 不推荐使用， 
### ref
> 父组件可以直接获得子组件的数据和方法
### this.$bus
> 不推荐使用，混乱，通过$on 进行绑定的；
