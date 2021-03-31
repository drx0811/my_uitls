<!--### 吸顶
> 吸顶的实现方式就是监听 滚动，然后根据滚动距离与 被吸顶的某个元素距离顶部的距离做
>比较，动态的添加和去除 class 类来进行样式调整；
```vue
// 父组件-->
<template>
  <div ref="ul" class="content">
    <p>我是内容列表卡</p>
    <p>我是内容列表卡</p>
    <my-sticky>
      <p style="color: red">我是内容列表卡</p>
    </my-sticky>

    <p>我是内容列表卡</p>
    <p>我是内容列表卡</p>
  </div>
</template>
<script>
  import MySticky from '../components/Sticky'
  export default {
    name: "Sticky",
    components:{
      MySticky
    },
  }
</script>
<style lang="scss" scoped>
  .content{
    width: 100%;
    height: 100%;
    p{
      background: #fff;
      width: 100%;
    }
  }
</style>

<!--// 子组件-->
<template>
  <div ref="content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "MySticky",
    mounted(){
      let content=this.$refs.content;
      let dom=this.$parent.$el;
      dom.style.overflow='auto';
      dom.style.position='relative';
      let top=content.getBoundingClientRect().top;
      dom.addEventListener('scroll',(e)=>{
        let l=e.target.scrollTop;
        if (l>=top) {
          content.classList.add('sticky-overflow');
        }else {
          content.classList.remove('sticky-overflow');
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .sticky-overflow{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
  }
  .content{
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
    p{
      background: #fff;
      width: 100%;
    }
  }
</style>
