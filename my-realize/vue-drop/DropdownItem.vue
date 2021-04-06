<template>
  <div ref="get" class="drop-box">
    <div class="title-box" @click="showUlBox">
      {{list.find(item=>item.id===value).name}}
    </div>
    <div class="ul-box" v-if="showFlag">
      <div ref="listUl" class="drop-box-ul">
        <div  class="drop-box-list" v-for="li in list" :key="li.id">
          <div @click="selectItem(li.id)">
            {{li.name}}
          </div>
        </div>
      </div>
      <div @click="showUlBoxHei" :style="{height:bottomHei}" class="hei"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DropdownItem",
    props:['list','value'],
    data(){
      return{
        showFlag:false,
        bottomHei:0,
      }
    },
    mounted(){
      this.$nextTick(()=>{
        let listUl=this.$refs.get;
        document.addEventListener('click', (e)=> {
          if (!listUl.contains(e.target)) {
            this.showFlag=false
          }
        })
      })
    },
    methods:{
      showUlBoxHei(){
        this.showFlag=false;
      },
      showUlBox(){
        this.showFlag=!this.showFlag;
        if (this.showFlag) {
          this.$nextTick(()=>{
            let listUl=this.$refs.listUl.getBoundingClientRect();
            let clientHeight=document.body.clientHeight;
            let height=listUl.height;
            let top=listUl.top;
            let bottomHei=clientHeight-top-height;
            this.bottomHei=bottomHei+'px';
          })
        }
      },
      selectItem(id){
        this.showFlag=!this.showFlag;
        this.$emit('input',id)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .drop-box{
    .title-box{
      width: 100%;
      height: 1.5rem;
      line-height: 1.5rem;
      color: red;
      background: rgba(80, 59, 58, 0.09);
      box-shadow: aliceblue 1px 1px 1px;
    }
    .ul-box{
      width: 100%;
      height: auto;
      background: #fff;
      box-shadow: aliceblue 1px 1px 1px;
      .hei{
        width: 100%;
        background: rgba(0,0,0,0.6);
      }
    }
  }
</style>
