// 观察者模式
// 观察者模式：包含两个对象；1.观察者，2.被观察者
// 观察者：需要有一个自更新方法
// 被观察者 要维护一个观察者对象数组，并包含有一个通知方法；
class Watcher {
  constructor(cb) {
    if (typeof cb === 'function') {
      this.cb = cb
    } else {
      throw new Error('Observer构造器必须传入函数类型！')
    }
  }

  update() {
    this.cb();
  }
}

class UnderWatch {
  constructor() {
    this.arr = [];
  }

  addWatcher(w) {
    this.arr.push(w);
  }

  notice() {
    this.arr.forEach(item => {
      item.update();
    })
  }
}

let watcher_One = new Watcher(function (args) {
  console.log('第一个被观察者更新了');
});
let watcher_Two = new Watcher(function (args) {
  console.log('第二个被观察者更新了');
});
let underWatch = new UnderWatch();
underWatch.addWatcher(watcher_One);
underWatch.addWatcher(watcher_Two);
underWatch.notice();
