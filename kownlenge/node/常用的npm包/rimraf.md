## rimraf
> npm install rimraf --save-dev

### 使用方式
- 在js文件中使用
    ```js
    let rimraf=require('rimraf');
    rimraf('./test.txt', function (err) { // 删除当前目录下的 test.txt
      console.log(err);
    });
    ```
- 在package.json 的script中直接运行
```md
// 下面的内容是 删除dist文件  运行webpack,打印出进度条,进入自定义的文件,
{
  "scripts": {
    "build": "webpack --progress  --config build/webpack.build.js && rimraf dist && node build/build.js"
  }
}
```


