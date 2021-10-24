## .d.ts是干嘛的
在.d.ts声明变量或者模块等东西之后，在其他地方可以不用import导入这些东西就可以直接用，用，而且有语法提示。
但是 ts需要预编译，所以需要在tsconfig.json文件里面的include数组里面添加这个文件后才可以使用
- * 匹配0或多个字符（不包括目录分隔符）
- ? 匹配一个任意字符（不包括目录分隔符）
- **/ 递归匹配任意子目录

## declare是干嘛的
`.d.ts` 文件中的顶级声明必须以 `"declare"` 或 `"export" `修饰符开头。

通过`declare`声明的类型或者变量或者模块，在include包含的文件范围内，都可以`直接引用`而不用去import或者import type相应的变量或者类型

### declare声明一个模块
`在编辑ts文件的时候，如果你想导入一个.css/.less/.png格式的文件，如果没有经过declare的话是会提示语法错误的`
```javascript
declare module '*.css'
declare module '*.less'
declare module '*.png'
```

### .declare声明一个变量
声明一个变量没有意义,只是在ts中不再报错(但是运行的时候还是报错,因为没有先声明再使用),
### 4.declare声明一个作用域
```javascript
declare namespace API{
  export class list extends Vue{}
  interface Mlist{}
}
// 声明模块之后就可以直接使用 API.Mlist 这个接口了
```
d.ts文件顶级声明declare最好不要跟export同级使用，不然在其他ts引用这个.d.ts的内容的时候，就需要手动import导入了
