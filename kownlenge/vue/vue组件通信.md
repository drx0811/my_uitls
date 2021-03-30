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
> 给组件添加ref可以直接获得组件的实例，进而调用组件的方法和数据，(一些常见的库，通过这种方法暴露一些方法)
```vue
<my-name ref="names"></my-name>
methods: {
  cut(uid){
// 我们通过 this.$refs.name 就可以拿到子组件，这样就可以调用子组件的方法和数据
// 这种方法经常用在封装一些常用库里面
    this.$refs.name
  }
}
```
### this.$bus
> 不推荐使用，混乱，通过$on 进行绑定的；
