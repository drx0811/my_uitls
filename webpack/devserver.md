### 移动端设置内网访问ip(用手机扫码)
> 我们需要做的是 在devServer 上面设置 public 为当前自己的电脑的ip地址；
```html
devServer: {
    open: true,  // npm run serve后自动打开页面
    host: '0.0.0.0',  // 匹配本机IP地址(默认是0.0.0.0)
    port: 8080, // 开发服务器运行端口号
    proxy: null,
    public:'30.45.132.101:8080',
}
```
