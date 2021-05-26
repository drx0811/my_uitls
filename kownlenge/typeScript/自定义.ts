/**
 * 类型别名的作用 type
 */
type IUserInfo = {
  name: string;
  age: number;
  sex: boolean;
  info: {
    height: number;
    address: string;
  }
}
const userInfo: IUserInfo = {
  name: "drx",
  age: 30,
  sex: true,
  info: {
    height: 188,
    address: 'qh'
  }
}
// 实现partial;
type MyPartial<T> = {
  [U in keyof T]?: T[U]
}
// 重新定义一个 实际使用的类型别名;
type IUserInfoMy = MyPartial<IUserInfo>;
const drxUserInfo: IUserInfoMy = {
  name: 'drx',
  age: 30,
  sex: true
}

// 实现多层的 DeepPartial
type MyDeepPartial<U> = {
  [T in keyof U]?: U[T] extends Object ? MyDeepPartial<U[T]> : U[T]
}

// 重新顶一个 实际使用的类型别名;
type IUserInfoMyDeep = MyDeepPartial<IUserInfo>
const drxUserInfoMyDeep: IUserInfoMyDeep = {
  name: "drx",
  age: 12,
  sex: false,
  info: {
    height: 120
  }
}

/**
 * typeof 的作用 可以把一个对象的类型来作为接口来使用
 */

type IMyTypeOf = typeof drxUserInfoMyDeep;
const MyTypeOf: IMyTypeOf = {
  name: 'drx',
  age: 12,
  info: {
    height: 12
  }
}


/**
 * Required 可以将可选参数变为必选参数
 *  (
 *    适用场景 当我们对一个接口类型进行了 Partail 操作,
 *    那么就会使有些属性变成可选的,但是有时候我们又希望把所有的信息变为
 *    必选的,那么Required是必用之工具;
 * )
 */
type INotImportant = {
  name?: 'drx',
  age: number;
  info?: {
    height: number;
  }
}

// 适用Required
type IImportant = Required<INotImportant>;
const importantInfo: INotImportant = {
  name: 'drx',
  age: 10,
  info: {
    height: 1920
  }
}


// 封装自己的 Required
type MuRequired<U> = {
  [T in keyof U]-?: U[T]
}
type MyImportant = MuRequired<INotImportant>;
const myImportantInfo: MyImportant = {
  name: 'drx',
  age: 10,
  info: {
    height: 30
  }
}


interface Seal {
  name: string;
  url: string;
}
interface API {
  "/user": { name: string; age: number; phone: string };
  "/seals": { seal: Seal[] };
}



const api=<URL extends keyof API>(url):Promise<API[URL]>=>{
  return fetch(url).then(res=>res.json())
}

api('/seals').then(res=>[{name:'1',url:'111'}])


function inputFn(a: number, b: string, c: boolean) {
  return a
}

type Fn=(a:string,b:number)=>void;
type Params<Fn>=[string,number]

let sum1=(...args:number[]):number=>{
  return args.reduce((pre,next)=>{
    return pre+next
  },0)
}
sum1(1, 2, 3, 4, 5)

// https://blog.csdn.net/weixin_30402085/article/details/99272328

type PromiseType<T>= (args: any[]) => Promise<T>;
type ArgumentsType<T> =T extends PromiseType<infer U> ? U : never;


