<template>
  <div class="box" v-if="titleList.length">
    <div class="box-title" v-for="item in titleList" :key="item.id">
      {{item.title}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "MessageCo",
    mounted(){
      this.id=0;
    },
    data(){
      return {
        titleList:[]
      }
    },
    methods:{
      add(data){
        let id=this.id++;
        let newData={...data,id};
        this.titleList.push(newData);
        newData.timer=setTimeout(()=>{
          this.del(newData)
        },newData.duration)
      },
      del(data){
        clearTimeout(data.timer);
        this.titleList=this.titleList.filter(item=>{
          return item.id!==data.id
        });
      }
    }
  }
</script>
