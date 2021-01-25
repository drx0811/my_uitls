### 1.在module 中设置noParse字段，
```ecmascript 6
/*
我们对类似jq这类依赖库，一般会认为不会  引用其他的包
对于这类不引用其他的包的库，我们在打包的时候就没有必要去解析，这样能够增加打包速率。
noParse:/jquery/
*/

```
### 2.设置exclude和include字段做排除
```ecmascript 6
/*
loader中我们可以设置这两个字段来判断是否是要解析的文件；
对于这类不引用其他的包的库，我们在打包的时候就没有必要去解析，这样能够增加打包速率。
noParse:/jquery/
*/
```
### 3.设置 webpack.IgnorePlugin ； 
```ecmascript 6
/*
webpack 自带插件去忽略某些文件；
*/
```
### 4.设置 DllPlugin 动态链接库文件；
```ecmascript 6
/*
设置两个配置文件，一个是用来打印dll文件 webpack.dll.config,js;
一个用来打包 webpack.config.js ；
*/
```
### 5.happypack 多线程打包；
```ecmascript 6
/*
是一个webpack 插件；
我们可以用来打包js，css 
*/
```
