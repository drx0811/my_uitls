// 使用useRef 可以封装获取上一次渲染的数据；

 const usePrevious= (props) => {
   const [val,setVal]=useState(props);
   const refs=useRef(null);
   useEffect(()=>{
     setVal(props);
     refs.current=val;
   },[props]);
   return refs.current
 };
