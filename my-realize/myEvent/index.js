const MyEvent =require('./myEvent.js');
class Girl extends MyEvent{
  constructor() {
    super();
  }
}
const girl=new Girl();
const cry=(...arg)=>{
  console.log(...arg,'哭了');
}
const eat=(...arg)=>{
  console.log(...arg,'吃了');
}

girl.on('lucy',cry);
girl.on('lucy',eat);

// girl.emit('lucy','失恋','难受0');
// girl.off('lucy',cry);
// girl.emit('lucy','失恋','难受1');

girl.once('gaga',cry);
girl.once('gaga2',cry);
girl.off('gaga',cry);
girl.once('gaga',eat);
girl.emit('gaga','发迟了1');
girl.emit('gaga2','发迟了2');
girl.emit('gaga','发迟了2');
