import { useEffect, useState, useRef,useCallback } from 'react';

const UseSetStateFn1 = (props) => {
  const [_state,_setState] = useState(props);
  const _setStateFn = useCallback((params)=>{
    const originState = typeof params === 'function'?{..._state,...params()}:{..._state,...params}
    return _setState(originState)
  },[])

  return [_state,_setStateFn]
}

const UseSetStateFn = () => {
  const [initState,setInitState] = UseSetStateFn1({
    loading:'true',
    num:0,
  });
  const handleFn = () => {
    setInitState({num:1})
  }
  return (
    <div>
      <div>{initState.loading}</div>
      <div>{initState.num}</div>
      <div>{initState.name}</div>
      <div onClick={()=>{handleFn()}}>btn</div>
    </div>
  )
}



export default UseSetStateFn


