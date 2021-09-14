## 发包步骤
- 设置npm账号
- 设置忽略项
- 使用babel cli
- 发布
- 组件质量认证

### 账号
首先，要在npm发布包，首先得注册一个账号，与github一样，npm对于公共包是免费的。
第二步，添加账号。在我们的Dos环境下，输入命令npm adduser，然后键入你在npm上注册的账号和密码。另外，npm config ls可以查看你的npm配置。
接下来，使用npm publish就可以发布你的包了。但在发布之前，我们还有一些工作要做。
### 设置忽略项
npm会发布除了.gitignore所忽略的文件之外的所有的文件。也可以使用.npmignore来覆盖.gitignore配置。不过，有一种更便捷的方式，就是在package.json中设置你要发布的文件或路径：
```json
{
  files:[
    'lib','dist'
  ]
}
```
### 使用babel cli
1. 安装babel cli
2. 配置.babelrc
3. 在script中配置脚本
```json
{
  scripts:{
    lib: "npm run clean && babel src --out-dir lib" 
  }
}
```
### 发布
在DOS项目目录下输入npm publish就能发布你的组件了。每次发布时，需要注意更新版本号:

