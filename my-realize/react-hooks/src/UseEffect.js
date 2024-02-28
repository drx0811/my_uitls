
import React from 'react';

let _depArray;
function UseEffect(callback,deps) {
  let noDeps=!deps;
  let hasDepsChange= _depArray?!deps.every((el,i)=>el===_depArray[i]):true;
  if(noDeps || hasDepsChange){
    callback();
    _depArray=deps;
  }
}

function UseEffectFn(props) {
  const {RenderFn}=props;
  UseEffect(()=>{
    console.log('11111 :>> ', 11111);
  },[])
  

  return (
    <div>
    1112222
    </div>
  );
}
export default UseEffectFn;



