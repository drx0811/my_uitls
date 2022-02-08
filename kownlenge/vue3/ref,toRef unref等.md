### refs
返回一个响应式并且可变的 ref 对象
### isRef
判断一个数据是否是ref数据,返回值boolean;
### unref
如果一个值是ref数据,那么该值有一个 .value属性;
我们通过 unref(xxx)取包裹一个ref数据,那么新返回的数据就不再是ref数据了;
### toRef 
可以用来为源响应式对象上的属性创建一个新的 ref,然后可以将 ref 传递进去，从而保持对其源属性的响应式链接。
```javascript
let state=reactive({
  count:1,
  name:'drx'
})
let refState=toRef(state,'count')
refState.value++;
```
`**当您要将 prop 的 ref 传递给复合函数时，toRef 很有用**`
```javascript
export default{
  setup(props,{attrs,emit,slots,expose}){
    getList(toRef(prop,"user"))
    // expose 
  }
}
```
### expose 可以把子组件的方法暴露给父组件
> 正常情况下,我们可以如果不使用expose的话,父组件通过ref可以直接拿到所有子组件的属性和方法,但是
>这不符合 `封装性`

expose({data1});修饰后,父组件只能拿到该 修饰后的属性;
