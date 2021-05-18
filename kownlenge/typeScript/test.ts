

// type 的作用，
// 一般用在声明一个函数上，这样比接口interface声明更方便；
// 用于声明联合类型的


// 声明一个函数
type userInfo=(age:string,name:string)=>void;

let getUserInfo:userInfo=(age:string,name:string)=>{
  console.log(`${age}___${name}`);
}

getUserInfo('drx','10')


type myInfos={
  name:string;
  age:number;
  isMy:boolean;
}
type myInfosFn=(obj:myInfos)=>void;
let myFn:myInfosFn=(obj)=>{
  console.log(11111);
}
const m:myInfos={
  name:'drx',
  age:10,
  isMy:false
}
myFn(m);

// 声明一个联合类型
type ColorList='red'|'yellow'|'green'
let colors:ColorList='red'
type nds={
  [T in ColorList]:string
}
let myColor:nds={
  red:'111',
  yellow:'111',
  green:'1111'
}

type myError={
  name:string;
  age:number;
  isMy:boolean;
}
type myType= keyof myError
let my:myType='age'


