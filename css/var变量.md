## var
定义一个名为 "--main-bg-color" 的属性，然后使用 var() 函数调用该属性：
```css
:root {
  --main-bg-color: coral;
  --main-txt-color: blue;
  --main-padding: 15px;
}
 
#div1 {
  background-color: var(--main-bg-color);
  color: var(--main-txt-color);
  padding: var(--main-padding);
}
 
#div2 {
  background-color: var(--main-bg-color);
  color: var(--main-txt-color);
  padding: var(--main-padding);
}
```
