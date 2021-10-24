

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


interface Iname{
  name:string;
}
interface Iage extends Iname {
  age:number;
}
let drx:Iage={

}

type Tname={
  name:string;
}
type Tage = {age:number} & Tname;

let drxT:Tage={
  // age:10,
  // name:'drx'
}

interface Foobar {
  foo: number;
  bar: {
    baz: boolean;
    qux: string;
  };
}
type DeepPartial<T>={
  [U in keyof T]?: T[U] extends object ? DeepPartial<T[U]> : T[U]
}
let ddd: DeepPartial<Foobar>={
  foo:111,
  bar:{
    baz:false,
    qux:'drx'
  }
}

type Tm={
  name?:string;
  age:number;
}
let dd:Required<Tm>={
  name:'drx',
  age:10
}

// Required把一个类型中所有可选的变为必选;

type Tmm={
  name:string;
  myObj:{
    age?:number;
    sex:boolean;
  }
}
type DeepRequired<T>={
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]>:T[P]
}
type Tnn = DeepRequired<Tmm>
let mjd:Tnn={
  name:'drx',
  myObj:{
    sex:false,
    age:10,
  }
}
type Tmud= Pick<Tmm,"name">
let ddds: Tmud={
  name:'drx'
}
function getName<T,U>(message:T,value:U):T{
  return message;
}
getName('drx',111)
interface IallType<U,V>{
  age:U;
  name:V
}
function getAge<T,U>(age:T,name:U,...parmas):IallType<T,U>{
  return {
    age,
    name,
  }
}
getAge(112,'drx')

interface IRetrun<U>{
  value:U;
  getInstance:()=>U;
}
class MyInfo<T> implements IRetrun<T>{
  value:T;
  constructor(value:T){
    this.value=value;
  }
  getInstance(){
    return this.value
  }
}
interface IPerson{
  name:string;
  age:number;
  isN:boolean
}
type k1= keyof IPerson;
let kk1:k1='age'

type k2 = keyof IPerson[];
let kk2:k2="concat"

type k3 = keyof {[age:string]:false}

interface IAi<T = string>{
  name:T
}
let nadme:IAi<number>={
  name:1212
}
let nadmee: IAi = {
  name: '1212'
}
interface Dictory<T = any>{
  [key:string]:T
}
type deed<T> = T extends Dictory<infer V> ? V : never;
let dda:deed<number>={name:111}

const add=(x:string,y:number) => x+y;
type t=ReturnType<typeof add>;// type t=string;
type Ihas={
  length:number
}
function getanmae<T extends Ihas>(valv:T){
  return valv.length
}
getanmae('dddd')

type Unpack<T> = T extends Array<infer U>?U:T;
type mm=string[];
type nn=boolean[];
let ff:Unpack<mm>='false'
let ee:Unpack<nn>=false;

type kk=[string,number];
let ds:Unpack<kk>='1'

type ksd=Array<string|number|boolean>
let hh:Unpack<ksd>=String(false)
