
import React from 'react';

let _state=[],_index=0;
function useState(initialState,RenderFn) {
  let curIndex = _index;
  _state[curIndex] = _state[curIndex] === undefined ? initialState : _state[curIndex];
  function setState(newValue) {
    _state[curIndex]=newValue;
    RenderFn();
    _index = 0;
  }
  _index +=1;
  return [_state[curIndex],setState];
}



function UseStateFn(props) {
  const {RenderFn}=props;
  const [state,setState]=useState(0,RenderFn);
  const [number,setNumber]=useState(10,RenderFn);
  return (
    <div>
      <div>{state}</div>
      <div>{number}</div>
      <button onClick={()=>{setState(state+1)}}>点击state</button>
      <button onClick={()=>{setNumber(number+10)}}>点击number</button>
    </div>
  );
}
export default UseStateFn;



