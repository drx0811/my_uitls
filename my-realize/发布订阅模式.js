class Envent {
  constructor() {
    this.arr = {};
  }

  on(type, fn) {
    if (!this.arr[type]) {
      this.arr[type] = [];
    }
    this.arr[type].push(fn);
  }

  emit(type, ...args) {
    if (!this.arr[type]) {
      throw '无该订阅者'
    } else {
      this.arr[type].forEach(item => {
        item.call(this, args)
      })
    }
  }
}

let envent = new Envent();
envent.on('data', function (args) {
  console.log("调用了data", args);
});
envent.emit('data', "11", "22");
envent.emit('data', "111", "222");
