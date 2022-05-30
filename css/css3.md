## 渐变 transition
transition: all 0.3 liner 延迟时间
> - 如果是写成all的话，只要在该元素上的某一项属性发生变化就会执行该渐变，
> - 但是:如果是宽高的话，比如从 20px 到200px可以，但是 20px到 auto 或者auto到20px就不可以了



## 1控制动画暂停
> 控制play-stat 当前的运动
```
play-stat:hover {
  animation-play-state: paused;
}    
```
## 2liner-gradient 方向，和颜色
- 多个颜色 liner-gradient(left,red,green)
- 方向和位置 liner-gradient(left,red 40%,green 30%)
- 角度 liner-gradient(30deg,red ,green)

## 3box-shaow
````
div{ 
 width:100px; 
 height:100px;
 background-color:green;
 box-shadow:12px 12px 10px 10px red,18px 18px 10px 10px yellow;
} 

box-shadow:阴影可以设置多重阴影；用逗号分隔即可；
    1，水平（必填）
    2，垂直（必填）
    3，模糊值（选填范围为0-正---0代表没有模糊，正数表示模糊的距离）
    4，扩散值（可正可负，正代表向外扩散，负代表向内扩散）
    5,颜色值
````
## 4谷歌浏览器表单填充
- 关闭浏览器自带填充表单功能
如果你的网站安全级别高一些, 可以直接关闭. 也不需要再调样式了.
<input type="text"autocomplete="off">
PS: 毕竟是一个很好的功能, 关了多不方便.
- 通过纯色的阴影覆盖底(huang)色
```css
input:-webkit-autofill { 
-webkit-box-shadow: 000px 1000px white inset; 
-webkit-text-fill-color: #333;
}
```
注: 这种只适用于纯色背景的输入框.
- 通过设置input样式动画
推荐使用这种的. 因为基本上没有人会等那么久…
input:-webkit-autofill,    
```css
input:-webkit-autofill:hover,   
input:-webkit-autofill:focus,   
input:-webkit-autofill:active {    
  -webkit-transition-delay: 99999s;     
  -webkit-transition: color 99999s ease-out, 
  background-color99999s ease-out;  
}
```
## 5ime-mode:disabled 禁止表单使用文本框输入法

> 近期做了手机项目，在用户输入号码的表单中，需要禁止用户输入中文、符号等，减少用户输入出错误的可能性，后来上网查了资料，原来有css属性有这样的功能。

  ```
ime-mode的语法解释如下：
  ime-mode : auto | active | inactive | disabled
  取值：
  auto  : 默认值。不影响IME的状态。与不指定 ime-mode 属性时相同
  active  : 指定所有使用IME输入的字符。即激活本地语言输入法。用户仍可以撤销激活IME
  inactive  : 指定所有不使用IME输入的字符。即激活非本地语言。用户仍可以撤销激活IME
  disabled  : 完全禁用IME。对于有焦点的控件(如输入框)，用户不可以激活IME
  于是
  在全局样式中定义如下：
  .ime-disabled{ime-mode:disabled;}/* 屏蔽输入法 */
  在手机充值页面级定义如下：
  <input type="text" name="mobile" class="ime-disabled" >
```
## toolTip
```html
<div class="poptip">
    <span class="poptip-arrow poptip-arrow-top"><em>◆</em><i>◆</i></span>
    <span class="poptip-arrow poptip-arrow-right"><em>◆</em><i>◆</i></span>
    <span class="poptip-arrow poptip-arrow-bottom"><em>◆</em><i>◆</i></span>
    <span class="poptip-arrow poptip-arrow-left"><em>◆</em><i>◆</i></span>
    Hi，知道吗？ <br>大前端D7主题很快就疯抢了！
</div>
```
```css
.poptip{position: absolute;top: 20px;left:20px;padding: 6px 10px 5px;*padding: 7px 10px 4px;line-height: 16px;color: #DB7C22;font-size: 12px;background-color: #FFFCEF;border: solid 1px #FFBB76;border-radius: 2px;box-shadow: 0 0 3px #ddd;}
.poptip-arrow{position: absolute;overflow: hidden;font-style: normal;font-family: simsun;font-size: 12px;text-shadow:0 0 2px #ccc;}

.poptip-arrow em,.poptip-arrow i{position: absolute;left:0;top:0;font-style: normal;}
.poptip-arrow em{color: #FFBB76;}
.poptip-arrow i{color: #FFFCEF;text-shadow:none;}

.poptip-arrow-top,.poptip-arrow-bottom{height: 6px;width: 12px;left:12px;margin-left:-6px;}
.poptip-arrow-left,.poptip-arrow-right{height: 12px;width: 6px;top: 12px;margin-top:-6px;}

.poptip-arrow-top{top: -6px;}
.poptip-arrow-top em{top: -1px;}
.poptip-arrow-top i{top: 0px;}

.poptip-arrow-bottom{bottom: -6px;}
.poptip-arrow-bottom em{top: -8px;}
.poptip-arrow-bottom i{top: -9px;}

.poptip-arrow-left{left:-6px;}
.poptip-arrow-left em{left:1px;}
.poptip-arrow-left i{left:2px;}

.poptip-arrow-right{right:-6px;}
.poptip-arrow-right em{left:-6px;}
.poptip-arrow-right i{left:-7px;}
```

## 浏览器滚动条
```css
.aside::-webkit-scrollbar-track{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
}
.aside::-webkit-scrollbar{
    width: 6px;
    background-color: #F5F5F5;
}
.aside::-webkit-scrollbar-thumb{
    background-color: #a001ff;
}
```










