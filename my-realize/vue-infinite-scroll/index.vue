<template>
  <ul
    class="infinite-box"
    v-infinite-scroll="load"
    infinite-scroll-disabled="disabled"
    infinite-scroll-delay="delay"
    infinite-scroll-distance="distance"
    infinite-scroll-immediate ="immediate"
    style="overflow-y: auto"
  >
    <li v-for="(c,index) in count" :key="index">
      {{c}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: "Scroll",
    data(){
      return{
        count:20,
        disabled:false,
        delay:100,
        distance:30,
        immediate:true,
      }
    },
    methods:{
      load(){
        this.count+=5;
      }
    }
  }
</script>
<style lang="scss" scoped>
  .infinite-box{
    height: 100%;
    width: 100%;
  }
</style>
