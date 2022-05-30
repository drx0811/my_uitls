### 创建并复制文件
```shell script
mkdir -p /tmp/hello-world
cp -R ./dist /tmp/hello-world
```
### 配置nginx
```shell script
location / {
    root /Users/yurun/workspace/meetu/website/dist;
    index index.html;
    try_files $uri $uri/ /index.html;
}
# root 应用程序的部署目录。
# index 应用程序的默认请求页。对于构建完成单页面应用程序而言，仅有一个 index.html 页面文件
# try_files 假设应用内存在一个路由：/activity：如前文所述，应用部署目录内仅包含一个 index.html 文件；
# 如果使用浏览器直接访问 http://localhost/activity，
# 因为应用部署目录内并不存在名称为 activity 的页面文件，因此会提示 404。
# 类似这种情况，我们需要让 Nginx 内部将请求重定向至 /index.html，它内部的路由策略知道如何处理 /activity 请求。
   
```

