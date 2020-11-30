## .idea 在.gitignore中添加却不能忽略
> - 把某些目录或文件加入忽略规则，按照上述方法定义后发现并未生效，
> - 原因是.gitignore只能忽略那些原来没有被追踪的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的。
> - 那么解决方法就是先把本地缓存删除（改变成未被追踪状态），然后再提交：
```
git rm -r --cached .
git add .
git commit -m 'update .gitignore'
```
##  git中fatal Authentication failed的问题
> 因为你的密码修改了，计算机本省却未改掉，
  按照步骤，但是要把计算机存储的密码修改过来，才能够从新用git
>
https://blog.csdn.net/qq_34665539/article/details/80408282


