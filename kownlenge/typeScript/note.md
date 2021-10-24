### ts 支持 commonjs 和 esMudule
> 配置的时候 可以设置成 umd；这是一种兼容模式；通过创建命名空间的形式来兼容；

### 开发中常用到的工具
- cnpm install -g  nodemon
- cnpm i -g ts-node
### TypeScript中遇到的问题：error TS2451: Cannot redeclare block-scoped variable 'name'
- 1
> 将运行环境由 DOM typings 更改成其他运行环境。
  可以在 tconfig.json 文件中声明：
```json
{
    "compilerOptions": {
        "lib": [
            "es2015"
        ]
    }
}
```
- 2
> 方法二
  在脚本文件最后一行，添加 export {};。将文件声明为模块，
  变量name限制在了 模块作用域下，就不会与全局作用域下的name产生冲突。
### 在Typescript中使用Object.assign报错：Property ‘assign’ does not exist on type ‘ObjectConstructor’
>  解决办法，可以进行断言   (<any>Object).assign(obj1, obj2);
- 3

TS中的一些关键词总结
### ！断言
> ! 的作用是断言某个变量不会是 null/undefined，告诉编辑器停止报错
```tsx
const obj = {
    name: '牧码的星星'
}
const a = obj!.name; // 假设 obj是你从后端获取的获取
```
### ?. 链判断运算符
> const orderId = response?.result?.data?.orderId || '';
```tsx
obj?.prop // 对象属性
obj?.[expr] // 对象属性
arr?.[index] // 获取数据中 index 下标对应的值
func?.(...args) // 函数或对象方法的调用
```
### type 类型别名
```tsx
type SetUser = (name: string, age: number) => void;
// 类型别名常用于联合类型
type UploadType = 'drag' | 'select';
// interface 和 type 的用法其实差不多，interface 也是用来定义类型的
interface SetUser {
  (name: string, age: number) => void;
}

```
### type和interface的区别
```tsx
interface Name {
  name: string;
}
interface User extends Name {
  age: number;
}

type Name = {
  name: string;
}
type User = Name & { age: number  };
```
### typeof 可以获取一个变量的声明类型
```tsx
const obj = { a: '1' };
type Foo = typeof obj;
// type Foo = { a: string }
```
### keyof 可以获取一个对象接口的所有 key 值
```tsx
type Obj = { a: string; b: string }
type Foo = keyof obj;
// type Foo = 'a' | 'b';
```
### in 可以遍历枚举类型
```tsx
type Keys = 'a' | 'b' | 'c';
type Obj = {
    [ T in Keys]: string;
}
// in 遍历 Keys，并为每个值赋予 string 类型

// type Obj = {
//     a: string,
//     b: string,
//     c: string
// }
```
### Partial<T> 将类型的属性变成可选
```tsx
// 错误使用方式  因为 id是必须的
interface UserInfo {
    id: string;
    name: string;
}
const xiaoming: UserInfo = {
    name: 'xiaoming'
}
// 使用  Partial<T>可以解决上面的问题
type NewUserInfo = Partial<UserInfo>;

const xiaoming: NewUserInfo = {
    name: 'xiaoming'
}
// 这个  NewUserInfo 就相当于
interface NewUserInfo {
    id?: string;
    name?: string;
}
```
### Partial<T> 有个局限性，就是`只支持处理第一层`的属性
```tsx
// Partial<T> 错误使用
interface UserInfo {
    id: string;
    name: string;
    fruits: {
        appleNumber: number;
        orangeNumber: number;
    }
}
type NewUserInfo = Partial<UserInfo>;
// Property 'appleNumber' is missing in type '{ orangeNumber: number; }' but required in type '{ appleNumber: number; orangeNumber: number; }'.
const xiaoming: NewUserInfo = {
    name: 'xiaoming',
    fruits: {
        orangeNumber: 1,
    }
}

```
### DeepPartial 处理深层
````tsx
type DeepPartial<T> = {
     // 如果是 object，则递归类型
    [U in keyof T]?: T[U] extends object? DeepPartial<T[U]>: T[U]
};

type PartialedWindow = DeepPartial<Window>; // 现在window 上所有属性都变成了可选啦

````
### Required将类型的属性变成必选
```tsx
type Required<T> = {
    [P in keyof T]-?: T[P]
};
// 其中 -? 是代表移除 ? 这个 modifier 的标识。再拓展一下，除了可以应用于 ? 这个 modifiers ，还有应用在 readonly ，比如 Readonly<T> 这个类型
type Readonly<T> = {
    readonly [p in keyof T]: T[p];
}
```
Required 只能针对浅层,深层的不适用我们可以自定义实现
```ts
type DeepRequired<T>={
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]>:T[P]
}
```
### Pick 从某个类型中挑出一些属性出来
```tsx
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

interface UserInfo {
    id: string;
    name: string;
}
type NewUserInfo = Pick<UserInfo, 'name'>; // {name: string;}

```
### Record
> 可以获得根据 K 中所有可能值来设置 key 以及 value 的类型
```tsx
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
type CurRecord = Record<'a' | 'b' | 'c', UserInfo>;
 // { a: UserInfo; b: UserInfo; c: UserInfo; }
```
### Mutable<T> 将类型的属性变成可修改
> 功能是将类型的属性变成可修改，这里的 -指的是去除。-readonly 意思就是去除只读，也就是可修改啦。
```tsx
type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};
```
### Readonly<T> 类型的属性变成只读
```tsx
type Readonly<T> = {
    readonly [P in keyof T]: T[P]
};
```
### ReturnType 用来得到一个函数的返回值类型
```tsx
type ReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : any;
```
> infer在这里用于提取函数类型的返回值类型。ReturnType<T> 只是将 infer R 从参数位置移动到返回值位置，因此此时 R 即是表示待推断的返回值类型。
  下面的示例用ReturnType获取到 Func 的返回值类型为 string，所以，foo 也就只能被赋值为字符串了。
```tsx
type Func = (value: number) => string;
const foo: ReturnType<Func> = "1";
```
## 函数参数剩余参数
```jsx
const Fn=(...args:[]number):number=>{
  return a+b+c+d
}
Fn(1,2,3,4)

```
## 泛型常用的变量 T,U,V,K;
### 读懂一个泛型
- 先读取整体函数,不考虑类型;
- 再看类型
```javascript
function getName<T>(value:T){
  return value 
}
getName('drx')
```
### 泛型接口
```javascript
interface Iname<T>{
  name:T
}
```
### 泛型约束
通过extends 约束泛型的范围
```javascript
interface IhasLength{
  length:number
}
function Gta<T extends IhasLength>(value:T){
  return value.length
}
Gta('dddds')
```
### 泛型默认值
我们可以设定泛型默认值,当没有显示传递的时候就使用默认值
```javascript
interface IgetName<T = string>{
  name:T
}
```
### 泛型条件类型;
使用 extends 关键字 但是并不代表继承,只要结构兼容
### 泛型中的infer
infer 表示提取类型中所有可能的类型
```javascript
type Unpack<T> = T extends Array<infer U>?U:T;
type mm=string[];
type nn=boolean[];
let ff:Unpack<mm>='false'
let ee:Unpack<nn>=false;

type kk=[string,number];
let ds:Unpack<kk>='1'

type ksd=Array<string|number|boolean>
let hh:Unpack<ksd>=String(false)
```
### ts 中常见的dom结构的类型
- HTMLElement
- HTMLCanvasElement
- KeyboardEvent
### 项目中引入类型;
```javascript
import type {myType} from './xxx' //导出的是一个接口类型 
import { ThemeEnum } from '/@/enums/appEnum';// 导出的是一个枚举
```
