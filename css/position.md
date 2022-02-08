## sticky
- sticky 粘性定位  等同于 滚动的时候 吸顶
position: sticky; 基于用户的滚动位置来定位。
粘性定位的元素是依赖于用户的滚动，在 position:relative 与 position:fixed 定位之间切换。
Internet Explorer, Edge 15 及更早 IE 版本不支持 sticky 定位。 Safari 需要使用 -webkit- 
- 设置position:sticky必须 同时给一个(top,bottom,right,left)之一,否则不生效
- 父元素不能添加 overflow:hidden 或者overflow:auto 属性
- 父元素的高度不能低于sticky元素的高度
- sticky元素仅在其父元素内生效

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>菜鸟教程(runoob.com)</title> 
<style>
div.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 5px;
  background-color: #cae8ca;
  border: 2px solid #4CAF50;
}
</style>
</head>
<body>

<p>尝试滚动页面。</p>
<p>注意: IE/Edge 15 及更早 IE 版本不支持 sticky 属性。</p>
<div class="sticky">我是粘性定位!</div>
<div style="padding-bottom:2000px">
  <p>滚动我</p>
  <p>来回滚动我</p>
  <p>滚动我</p>
  <p>来回滚动我</p>
  <p>滚动我</p>
  <p>来回滚动我</p>
</div>
</body>
</html>
```
### static
定位的默认值,表示没有定位,元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明），可以把已定位的元素取消定位 
> 主要用于 去 覆盖某些给了定位属性的元素  
