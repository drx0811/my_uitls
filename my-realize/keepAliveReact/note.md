## 手动实现keep-alive的方法
vue中 keep-alive 是通过把组件缓存到内存中 并同时添加了 deactive和 actived两个钩子函数
### 基于样式实现 display:none 和dispaly:block;
但是 切换组件时，无法使用动画；或者使用像 Mobx 和 Redux 这样的数据流管理工具，由于数据绑定到组件上,比较麻烦;
### 基于渲染的 React.createPortal();
我们把要缓存的组件 通过React.createPortal渲染到react根组件之外;但是同时我们还要自定义两个钩子函数 deactive 和 actived

