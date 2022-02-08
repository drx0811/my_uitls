//普通的类组件有实例所以可以用过 React.createRef() 挂载到节点或组件上，然后通过 this 获取到该节点或组件。
class RefTest extends React.Component{
  constructor(props){
    super(props);
    this.myRef=React.createRef();
  }
  componentDidMount(){
    console.log(this.myRef.current);
  }
  render(){
    return <input ref={this.myRef}/>
  }
}

/**
 正常情况下 ref 是不能挂在到函数组件上的，因为函数组件没有实例，但是 forwardRef可以将ref转发给子组件 ,那我们就可以拿到所有的
 子组件的方法和属性了,不符合封装性

 通过 useImperativeHandle 为我们提供了一个类似实例的东西。它帮助我们通过 useImperativeHandle 的第 2 个参数，
 所返回的对象的内容挂载到 父组件的 ref.current 上。
 这个组件能够将其接受的 ref 属性转发到其组件树下的另一个组件中。

 !!! 与vue3 的 expose方法很相似;
 */
import React, { forwardRef, useImperativeHandle, useEffect, useRef } from 'react'

const TestRef = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    open() {
      console.log("open")
    }
  }))
})
function App () {
  const ref = useRef()
  useEffect(() => {
    ref.current.open()
  },[])
  return(
    <>
      <div>石小阳</div>
      <TestRef ref={ref}></TestRef>
    </>
  )
}
export default App
