<template>
  <drx-button @click="show($event)" icon="https://img01.yzcdn.cn/vant/ipad.jpeg" disabled  type='primary'>
    测试button
  </drx-button>
</template>
<script>
  export default {
    name:'drx',
    data(){

    },
    methods:{
      show(e){
        console.log(e);
      }
    }
  }
</script>
