// 使用代理来实现单例模式；
// 代理中  我们需要利用一个 自执行函数 来保存这个单例，
class CreateDiv{
  constructor(name){
      this.name=name;
      this.init(name);
  }
  init(name){
      let div=document.createElement('div');
      div.innerHTML=name
      document.body.appendChild(div);
  }
}
let getInstance=(function (){
  let instance;
  return function(name){
      if (!instance) {
          instance= new CreateDiv(name)
      }
      return instance;
  }
})()
let d= new getInstance('d')
let c= new getInstance('c')
console.log(`d===c`, d===c)
