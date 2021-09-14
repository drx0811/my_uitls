
import default from './vue3/useDebouncedRef';
export function 对象所有的key(){
  // Object.keys 只返回自己的 key
  // for..in 会遍历自己以及继承的键
}

export function 代替__proto__() {
  /*
    Object.create(proto, [descriptors]) —— 利用给定的 proto 作为 [[Prototype]] 和可选的属性描述来创建一个空对象。
    Object.getPrototypeOf(obj) —— 返回对象 obj 的 [[Prototype]]。
    Object.setPrototypeOf(obj, proto) —— 将对象 obj 的 [[Prototype]] 设置为 proto。
    应该使用这些方法来代替 __proto__。
  */
}

export function es6的class类() {
  /*
  * es6中的this绑定；
  * */
  class Button1 {
    constructor(value) {
      this.value = value;
    }
    click = () => {
      alert(this.value);
    }
  }
  let button1 = new Button1("hello");
  setTimeout(button1.click, 1000); // hello

  class Button2 {
    constructor(value) {
      this.value = value;
    }
    click() {
      alert(this.value);
    }
  }
  let button2 = new Button2("hello");
  setTimeout(button2.click, 1000); // undefined

}
