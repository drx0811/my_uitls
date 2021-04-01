const vueInstance=()=>{
  let vm=new Vue({
    data:{},
    render:h=>h(MessageCo)
  });
  vm.$mount();// 生成真实的dom
  document.body.appendChild(vm.$el);
  let compoennt=vm.$children[0];// 得到vue的实例
  return {
    add(data){
      compoennt.add(data)
    }
  }
};
/*
* 单例模式，减少创建
* */
let instance;
let instanceFn=()=>{
  if (!instance) {
    instance= vueInstance()
  }
  return instance
}

const Message={
  info(data){
    instanceFn().add(data)
  }
}
export {Message}

/*
* 以插件的形式进行封装
* */
let _Vue;
export default {
  install(Vue,options){
    if (!_Vue) {// 防止 重复install该插件；
      _Vue=Vue;
    }
    _Vue.prototype.$my_message=Message;
  }
}

