### nginx请求超时时间默认60s 
`问题`: 有时候请求接口很慢,在本地设置axios 的timeout不管用?
`resolve`: nginx中有超时的限制
```txt
fastcgi_connect_timeout 300; 
fastcgi_send_timeout 300; 
fastcgi_read_timeout 300; 
```
### 上传图片 nginx默认文件上传大小限制为1M 
`问题`:在本地调试调试上传图片ok,在线上404
`resolve`: nginx有默认设置上传文件大小,我们需要手动调整

### 编码格式导致的问题
`问题`:在mac本地调试时，都是ok的，部署到windows服务器上后时，发现一个图片出现了404的问题 
`解决`:nginx设置的编码与操作系统的编码不一致会导致 中文路径无法访问,所以我们尽量使用中文做为路径
