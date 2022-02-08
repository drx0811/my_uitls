### extend 
> vue.extend() 调用返回的是一个构造函数

得到的虚拟dom,可以通过extend的render函数转换,最后将得到的实例进行挂载就可以得到真实的dom
```vue
const Profile = Vue.extend({
  data: function () {
    return {}
  },
  render() {
    return rh
  }
})
// 创建 Profile 实例，并挂载到一个元素上。
new Profile().$mount('##mount-point')
```

