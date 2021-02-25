
import React from 'react';
import ReactDOM from 'react-dom';

let _state=[],_index=0;
function useState(initialState) {
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



function App() {
  const [state,setState]=useState(0);
  const [number,setNumber]=useState(10);
  return (
    <div>
      <div>{state}</div>
      <div>{number}</div>
      <button onClick={()=>{setState(state+1)}}>点击state</button>
      <button onClick={()=>{setNumber(number+10)}}>点击number</button>
    </div>
  );
}

function RenderFn(params) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
RenderFn();



