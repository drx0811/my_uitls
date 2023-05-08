const shell = require('shelljs');
const fs = require('fs')
if (shell.which('git')) {// 判断是否安装了git
  // shell.echo('sss');//控制台输出
  // shell.exit(1);// 相当于退出了shell,不会再去执行其它了
}
// shell.rm('-rf','./index.html');// 删除 文件
fs.exists('./dist', function (err) {
  if (!err) {
    shell.mkdir('dist')
    shell.cp('-R', './qqq.html', './dist/');
  }
});

// 创建文件
shell
.touch('./build.js');


// 往文件中添加内容
shell
.ShellString(
  `const getNameInfoReqWrapFn = (props) => {
    return props+11
  }`
)
.to('build.js')





