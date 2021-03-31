
### 自定义组件使用v-model
> v-model 在组件中使用，可以很方便的实现父子组件数据联动；
> 原理是：子组件 的props设置 value，然后再方法中设置 this.$emit("input",newvalue);
```vue
// 父组件
<div>
    <hello-world v-model="name">
       <template #title> <!-- 具名插槽 -->
         <div>121121212</div>
       </template>
    </hello-world>
    <van-button @click="addName" type="primary">
      increate{{name}}
    </van-button>
</div>

// 子组件

<template>
  <div>
    121212
    <div @click="addTwo">
      {{value}}
    </div>
    <slot name="title"></slot> <!-- 具名插槽 -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:['value'],
  methods: {
    addTwo(){
      let values=this.value;
      this.$emit('input',values+=2)
    }
  }
  
}
</script>
```
### 组件动态挂载（$mount）
> 弹窗，popup, 等有可能需要挂载某一个位置，那么我们就需要用到了 $mount api
```vue
mounted() {
    let dom=this.$el;
    document.getElementById('app').appendChild(dom)
},
```
