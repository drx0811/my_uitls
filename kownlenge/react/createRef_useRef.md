### createRef 
> createRef 每次渲染都会返回一个新的引用，而 useRef 每次都会返回相同的引用。
```js

const [count,setCount]=useState(0);
const refUse=useRef(null);//hooks每次渲染都是一个新的函数，但是useRef 可以保存上次的值，并不会重新声明
const refCreate=createRef(null);// hooks中 每一次渲染都会被重新渲染，
if (!refUse.current) {
  refUse.current=count;
}
if (!refCreate.current) {
  refCreate.current=count
}
console.log(refCreate.current);// 会一直变化；
console.log(refUse.current);// 永远是1

```
