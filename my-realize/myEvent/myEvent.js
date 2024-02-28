class MyEvent {
  constructor() {
    this._event={};
  }
  on(type,fn){
    if (!this._event[type]) {
      this._event[type]=[fn];
    }else {
      this._event[type].push(fn);
    }
  }
  emit(type,...args){
    console.log(this._event[type]);
    if (!this._event[type]) {
      throw new Error('没有订阅该事件')
    }else {
      this._event[type].forEach(item=>{
        item(...args)
      })
    }
  }
  off(type,fn){
    const callback=this._event[type];
    if (!callback) {
      throw new Error('没有订阅该事件')
    }else {
      this._event[type]=callback.filter(item=>{
        return item!==fn && item._f!==fn
      })
    }
  }
  once(type,fn){
    const onceFn=(...args)=>{
      console.log('1111');
      fn(...args);
      this.off(type,onceFn)
    };
    onceFn._f=fn;
    this.on(type,onceFn);
  }

}
module.exports=MyEvent;
