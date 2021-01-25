## webpack设置多入口

### entry
> 入口entry；
```javascript
{
  entry:{
    home:"home.js",
    index:"index.js"
  }
}
```
### 出口
> 入口outputy；
```javascript
{
  output:{
    filename:'[name].js'
  }
}
```
### htmlwebpackplugin
> 我们引用的时候注意有一个thunk字段，可以引用自身需要的文件；
