### vue3六大优势
1. 性能更好，使用proxy不用 进入就全部递归给数据进行Object.defineProperty();
2. 按需导入 使用tree-shaking；
3. 组合式api 比 选项式api更为紧凑
4. 支持ts
5. 自定义渲染api

### setup 执行时机
- setup 在 `beforeCreate和created` 之间，此时并没有达到created，所以 `没有thi`s；
- 此外为了避免使用data，vue特意将 `this置为undefined`；
- setup函数不能写成异步，也就是不能 是 `sync setup`，但是setup内部函数可以是异步的；
- setup 中 return 只能一次；
```js
 setup(){
    const data={};
    const initData=reactive(data);
    data.name=10;
    data.age={
      name:100,
    };
    return null;// 不可以return多次
    return {
      ...toRefs(initData)
    }
  }
```


### toRaw 
- 可以把 响应式数据变为原始数据，
> 使用场景；
> 如果是用包装数据去修改的话，当涉及到大量的数据更改的时候，所有的修改都会
> 触发proxy，那样太浪费性能，我么 可以把响应式数据进行toRaw一下，这样
> 变为原始数据，这样就可以随便修改
### reactive
>修改数据 直接修改`被包装后`的数据，这是可以的，修改原始的数据并`不能`触发响应式，
>除非 修改原始数据之后再立即修改被包装后的数据，这样可以得到全的响应式，
- 可包装引用数据，也可以包装基本数据（默认不这样用）;
- 通过 reactive之后的数据再次修改后，修改后的数据依旧是响应式的；
```js
 setup(){
    const data={};
    const initData=reactive(data);
    data.name=10;
    data.age={
      name:100,
    };
    return {
      ...toRefs(initData)
    }
  }
```

- setup中reactive 可以重复进行；
```js
// 答案是可以的；
 setup() {
    const data={};
    const initData=reactive(data);
    data.name=10;
    data.age={
      name:100,
    };
    const ss=reactive(initData);
    return {
      ...toRefs(ss)
      
    }
  }
```

-  reactive 在方法中新增属性`不具有响应式` 和修改属性具有响应式
```vue
setup() {
    const data={};
    const initData=reactive(data);
    data.name=10;
    data.age={
      name:100,
    };
    const addInitDataName=()=>{
      initData.name='nan';
    // 此处的name是由响应式的，因为setup第一次自上而下的运行的时候已经添加了响应式；
      initData.sex='女'
    // 没有响应式，因为执行完一遍之后没有为sex添加响应式；
    }
    return {
      ...toRefs(initData),
      addInitDataName
    }
  }
```

### 组合式api可以将函数写在外面
```vue
<template>
  <div v-for="item in arrObj" :key="item.id">
    {{item.name}}
  </div>
  <button @click="addArr">
    addArr
  </button>
</template>
<script>
  import {ref, onMounted} from 'vue'
  const changeArr=()=>{//函数抽出来
    const arr=[
      {name:1,id:1},
      {name:2,id:2},
    ];
    const arrObj=ref(arr);
    const addArr=()=>{
      arrObj.value.push({
        name:3,id:3
      })
    }
    return {
      arrObj,addArr
    }
  }
  export default {
    name: "comApi",
    setup(){
      const {arrObj,addArr}= changeArr();
      return {
        arrObj,addArr
      }
    },
  }
</script>
```

### shallowReactive 
> shallowReactive 只会对深层数据的最外一层进行响应式；当我们仅仅对内层的数据进行修改，是不会有响应式的
> 当我们对`内层`和`最外层`都进行的修改的时候那么都会具有响应式； 
```vue
<template>
  <div>
    {{obj.name}}---{{name}}
    <br>
    {{obj.height}}---{{height}}
    <br>
    {{obj.height.name}}---{{height.name}}
  </div>
  <div>
    <button @click="change"> change </button>
  </div>
</template>

<script>
  import {shallowReactive,toRefs,reactive,isReactive} from 'vue'
  export default {
    name: "ShallowReactive",
    setup(){
      const _obj={
        name:1,  age:10,
        height:{  he:10, name:{ age:10  }   }
      };
      const obj=shallowReactive(_obj);
      const change=()=>{
        // obj.name=11;
        // 如果注释掉上面一行，那么数据不会更新，
        // 当我们使用shallowReactive 的时候，只会对第一层进行响应式包装；
        obj.height.name.age=1000;
        console.log(obj);
      };
      return {
        obj,
        ...toRefs(obj),
        change
      }
    }
  }
</script>
```
### ref的dom中的用法；
```vue
<div style="background: green">
  <div ref="domRef">
    <span>ref 在dom中的用法；</span>
  </div>
</div>
const domRef=ref(null)
onMounted(()=>{
  console.log(domRef.value) // 在这里可以得到dom中内容；
})
```
### shallowRef 的用法
> shallowRef 只对 value进行了监听，并没有对下面的属性进行
```vue
const obj=shallowRef(_obj);
// 如果我们想要更改 数据，那么可以使用
// obj.value={... obj.value}来进行
// 我们也可以使用ref提供的api triggerRef；
  const change=()=>{
    obj.value.height.name.age=1000;
    triggerRef(obj)
  };
```

