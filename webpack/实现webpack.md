## tabable模块
> tabable的原理就是发布订阅设计模式；里面包含
>  syncHook，syncbailHook等同步方法还有async等异步方法；
## 实现webpack的步骤
1. npm link 把 自己代码跟项目代码链接
2. 通过 文件名称和文件路径利用(node 的 fs模块的 readFileSync)读取 项目源码；
3.  通过 babylon 把源码转换成ast 通过 traverse 把转换 把路径和 代码对应起来，同时得到依赖项；
4.  通过对 依赖项的递归 重复上一次的遍历； 
5.  对生成的代码按照  key-value的形式进行整理；key为路径，value为代码；
6.  生成真实代码（fs模块的 writeFileSync）将内存中代码写入到指定build目录；
   
## loader 的原理；
> laoder 其实就是一个函数；我们在 *实现webpack的步骤* 里面的读取源码的时候 *第二部*，我们要用laoder去转换我们的源码（通过webpack.config.js中的loader里面的test去匹配到源码）；

## 插件
- 我们使用插件的时候回用到 tabable库；同时要绑定webpack的各个钩子函数；
- 我们要在在插件中执行确定该插件是在按个生命周期函数中执行；
