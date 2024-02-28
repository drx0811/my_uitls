### setState 是异步还是同步
> setState 同步还是异步主要看执行的环境
1. 定时器中执行时同步；
2. 在原生事件中是同步；
3. 在合成事件中是异步；
4. 在钩子函数中的是异步；

### fiber
> fiber是一种算法，原先的diff 是一种递归的方式，
> 这样当数据结构嵌套较深的时候，会导致渲染事件结果响应比较慢，出现假死的现象。
> fiber 是一种 遍历的方式，优先执行某些任务，不会出现假死

### diff算法
> diff算法分为 三个层级；
1. `tree diff` 只对比同级dom结构，忽略dom节点的跨级移动；如果发现不同，就会删除旧节点(包括其子节点)，生成新节点
2. `component diff`组件级别的对比，如果不是同一级别的组件那么就会删除旧的组件，生成新的组件；
3. `element diff` 元素级别的比较，比较同一层级下子节点，每个节点的唯一标识key ，如果没有key那么我们进行插入操作的时候会导致该id位置后面的内容重新渲染；

### 跨层级通信 context
> 主要记住两个方法 `createContext` `useContext`
```jsx
import React, { createContext, useContext } from 'react';
const themes = {
  light: { foreground: "#000000",background: "#eeeeee"},
  dark: {foreground: "#ffffff",background: "#222222"}
};
const ThemeContext = createContext(themes.light);
function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}
function Toolbar() {
  return <div><ThemedButton /></div>  
}
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
export default App;
```
### 父组件调用子组件的方法；
1. 在类组件中 通过 `createRef` 来实现；
```jsx
class Parent extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  onClick = () => {
    this.child.current.getAlert();
  };

  render() {
    return (
      <div>
        <Child ref={this.child} />
        <button onClick={this.onClick}>Click</button>
      </div>
    );
  }
}
class Child extends Component {
  getAlert() {
    alert('getAlert from Child');
  }
  render() {
    return <h1>Hello</h1>;
  }
}
```
2. 在函数组件中通过 `useRef` 和  `forwardRef` `useImperativeHandle`三者来实现
```jsx
const { forwardRef, useRef, useImperativeHandle } = React;
const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    getAlert() {
      alert("getAlert from Child");
    }
  }));
  return <h1>Hi</h1>;
});

const Parent = () => {
  const childRef = useRef();
  return (
    <div>
      <Child ref={childRef} />
      <button onClick={() => childRef.current.getAlert()}>Click</button>
    </div>
  );
};
```
### ref 转发（也叫透传） 
> 主要是通过forwardRef 来实现；
```jsx
import React, { useCallback, useRef } from 'react';
// 实现 ref 的转发
const FancyButton = React.forwardRef((props, ref) => (
  <div>
    <input ref={ref} type="text" />
    <button>{props.children}</button>
  </div>
));
// 父组件中使用子组件的 ref
function App() {
  const ref = useRef();
  const handleClick = useCallback(() => ref.current.focus(), [ ref ]);
  return (
    <div>
      <FancyButton ref={ref}>Click Me</FancyButton>
      <button onClick={handleClick}>获取焦点</button>
    </div>
  )
}
```
```jsx
const FancyInput = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} type="text" />
});
const App = props => {
  const fancyInputRef = useRef();
  return (
    <div>
      <FancyInput ref={fancyInputRef} />
      <button onClick={() => fancyInputRef.current.focus()}>父组件调用子组件的 focus</button>
    </div>
  )
}
```
### React有哪些优化性能的手段
1. 使用react提供的api `pureComponent` `shouldComponentUpdate`,`memo`,`useMemo` `useCallback`
2. map生成节点的时候给节点唯一的key而不是下标；
3. 使用css样式控制节点的显示，而不是判断是否渲染；
4. 使用Suspense 和 lazy进行代码的懒加载；

### 为什么 React 元素有一个 $$typeof 属性
> 给虚拟节点添加symbol 属性，而symbol无法序列化，这样就可以判断dom节点是否是外部来的，避免xss攻击；

### React 如何区分 Class组件 和 Function组件
> 所有的类组件都继承自 React.Componen 所以只要判断 `AComponent.prototype instanceof React.Component`
