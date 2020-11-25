## 手把手教你搭建shadowsocks科学上网 搭建ss翻墙****
> 优惠注册链接：www.vultr.com
> 红框选中的部分从上到下依次是IP，用户名和密码~
```
- 连接VPSWindows连接VPS
1.下载Xsehll直接在百度软件中心下载，下载后正常安装即可~
2.连接linux选择文件->新建：
在主机位置输入你的VPS IP：
确定后会让你输入你的Linux用户名：
之后是Linux用户密码：
如果显示如下图所示就表示连接成功了（如果是Vultr，那么连接成功标志应该是root@vultr）：

- Mac OS连接VPS

直接打开Terminal终端，输入：ssh root@43.45.43.21，之后输入你的密码就可以登录了（输入密码的时候屏幕上不会有显示）
一键搭建shaodowsocks

这里采用一键脚本一键脚本搭建shadowoscks并开启bbr内核加速

1.下载一键搭建ss脚本文件（直接复制这段代码运行即可）

git clone -b master https://github.com/Flyzy2005/ss-fly

2.运行搭建ss脚本代码

ss-fly/ss-fly.sh -i password 1024

其中password换成你要设置的shadowsocks的密码即可，密码最好只包含密码+数字，一些特殊字符可能会导致冲突。而第二个参数1024是端口号，也可以不加，不加默认是1024~（举个例子，脚本命令可以是ss-fly/ss-fly.sh -i qwerasd，也可以是ss-fly/ss-fly.sh -i qwerasd 8585，后者指定了服务器端口为8585，前者则是默认的端口号1024）。出现如下界面就说明搭建好了~

注：如果需要改密码或者改端口，只需要重新再执行一次搭建ss脚本代码就可以了~

开启BBR加速

BBR是Google开源的一套内核加速算法，可以让你搭建的shadowsocks速度上一个台阶。

1.检测Ubuntu内核版本

BBR支持4.9以上的，如果你的版本高于这个则会直接开启BBR加速，如果低于这个版本则会自动下载4.10的并重启，执行如下脚本命令：

ss-fly/ss-fly.sh -bbr

第一次会检测内核版本并自动更新，更新后会重启VPS，再根据连接VPS部分教程重新连接VPS即可。2.开启BBR加速

ss-fly/ss-fly.sh -bbr

重新连接后，再次运行一次这个命令即可开启bbr加速。```