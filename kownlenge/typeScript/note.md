### ts 支持 commonjs 和 esMudule
> 配置的时候 可以设置成 umd；这是一种兼容模式；通过创建命名空间的形式来兼容；
>

### 开发中常用到的工具
- cnpm install -g  nodemon
- cnpm i -g ts-node 
### TypeScript中遇到的问题：error TS2451: Cannot redeclare block-scoped variable 'name'
- 1
> 将运行环境由 DOM typings 更改成其他运行环境。
  可以在tconfig.json 文件中声明：
```json
{
    "compilerOptions": {
        "lib": [
            "es2015"
        ]
    }
}
```
2.
> 方法二
  在脚本文件最后一行，添加 export {};。将文件声明为模块， 变量name限制在了 模块作用域下，就不会与全局作用域下的name产生冲突。
