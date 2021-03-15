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
>今天从git上down项目输错了一次账户和密码，然后就怎么也down不下来，直接报错，到处清除缓存，都没啥作用，实在是无奈，搞得人火大，最后终于在一篇文章找到了解决方法
 
 fatal: Authentication failed就是凭证失败的意思
 
 那么凭证失败自然想到的就是修改凭证了
 
 可是找了半天也没找到git的凭证修改在哪儿
 
 重要在一篇文章中找到了
 
 win7 下git的凭证存在windows系统，我日你个xx，怪不得找到，知道真相的我眼泪都掉下来了
 
 位置 控制面板

 管理windows凭据

https://blog.csdn.net/qq_34665539/article/details/80408282

### mac 如果遇到这种情况可以
> Command + 空格
  输入：keychain
  
  打开：keychain access.app 也就是钥匙串访问
  
  打开左侧的小锁头：右键解锁钥匙串，密码是开机密码
  重新设置github的密码，然后重启电脑；




