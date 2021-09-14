### 虚拟dom转变为真实数据;
- 所有的vue实例都有一个 $createElement 方法,该方法用于接收 ast 结构数据 结果返回一个虚拟dom
- 有了虚拟dom之后,我们可以通过 Vue.extend()方法,在render中接收 虚拟dom 会创建一个“子类”
- 在子类的基础上 new一个实例,
- 再通过 $mount 挂载 之后便可以得到真实的dom
```vue

let h = vue.$createElement;
let rh = h(...);
const testComponent = Vue.extend({
  data: function () {
    return { }
  },
  render(){
    return rh
  }
})
let renderFn=new testComponent().$mount();
let renderText=renderFn.$el.innerText;
```
