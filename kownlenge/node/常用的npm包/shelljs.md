## shelljs
> npm install shelljs --save-dev
>
shelljs 常用于自动化部署,帮助我们编写一些自执行命令;
### 使用方式 (打包并push到远程分支上)
- 新建一个shell.js文件
```js
//局部模式
var shell = require('shelljs');
if (shell.exec('npm run start').code !== 0) {//执行npm run build 命令
  shell.echo('Error: Git commit failed');
  shell.exit(1);
}

//由于我的用另外一个仓库存放dist目录，所以这里要将文件增量复制到目标目录。并切换到对应目录。
shell.cp ('-r', './mock/*', './myshell');
shell.cd('./myshell');

shell.exec('git add .');
shell.exec("git commit -m 'autocommit'")
shell.exec('git push')
```
- 在package.json 的script中直接运行
```md
// 下面的内容是 删除dist文件  运行webpack,打印出进度条,进入自定义的文件,
{
  "scripts": {
    "shell": "node scripts/shell.js",
  }
}
```


