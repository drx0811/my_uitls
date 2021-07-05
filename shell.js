var shell = require('shelljs');
// if (shell.exec('npm run shell').code !== 0) {//执行npm run build 命令
//   shell.echo('Error: Git commit failed');
//   shell.exit(1);
// }

//由于我的用另外一个仓库存放dist目录，所以这里要将文件增量复制到目标目录。并切换到对应目录。
// shell.cp ('-r', './mock/*', './myshell');
// shell.cd('./myshell');

shell.exec('git add .');
shell.exec("git commit -m 'autocommit'")
shell.exec('git push')
