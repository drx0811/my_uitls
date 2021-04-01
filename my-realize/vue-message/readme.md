
### message
> 我们写vue组件的时候不一定只写 vue组件，我们有时候也可以 将 js和vue结合起来
  定时器的名字不一定都挂载this上面，有时候我们可以把他绑定到对象上面，然后
  再把对象传过去，清理的时候也挺方便
```vue
methods:{
    add(data){
      let id=this.id++;
      let newData={...data,id};
      this.titleList.push(newData);
      newData.timer=setTimeout(()=>{
        this.del(newData)
      },newData.duration)
    },
    del(data){
      clearTimeout(data.timer);
      this.titleList=this.titleList.filter(item=>{
        return item.id!==data.id
      });
    }
 }
```
