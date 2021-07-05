### react-hooks，useState为啥不能在条件判断中使用？
> 优于useState中的状态是存在一个数组里面的，通过数组下标定位状态，
> 如果放在了条件判断中后，假设条件判断不成立，没有执行里面的 setState 方法,可能会导致数组下标改变，错乱
### useCallback
> useCallback 性能对比使用
```js
// 直接在function component里定义函数，下次render时会新创建函数，老函数没有引用会被GC回收
function Todo1(){
  const dispense1 = (a) => {
    console.log(a);
  };
  return <div>1</div> 
}
// useCallback中使用 引用function 下次render时会新创建函数，但老函数还在被引用，老函数不会被GC会有额外内存开销
function Todo2(){
  const dispense = (a) => {
    console.log(a);
  };
  const dispense2 = React.useCallback(dispense, []);
  return <div>1</div> 
}

// 下次render时会不会创建新函数
function Todo3(){
  const dispense3 = React.useCallback((a) => {
    console.log(a);
  }, []);
  return <div>1</div> 
}
```
### useState 和 setState 
当使用了 PureComponent 的时候 只有组件中props 和 state发生变化的时候才会触发
```jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// 输出：
// A1
// B1
// C1
// update
// A1
// B1

const A = () => {
  console.log('A1');
  return <div>A</div>;
};

const B = () => {
  console.log('B1');
  return <div>B</div>;
};

class C extends React.PureComponent {
  render() {
    console.log('C1');
    return <div>C</div>;
  }
}

const Home = () => {
  const [a, setA] = useState(0);
  useEffect(() => {
    console.log('update');
    setA(1);
  }, []);
  return (
    <div>
      <A />
      <B />
      <C />
    </div>
  );
};

ReactDOM.render(<Home />, document.getElementById('root'));
```

