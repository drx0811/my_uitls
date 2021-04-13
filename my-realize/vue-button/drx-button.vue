<template>
  <div @click="drxClick($event)" :class="['drx-button-box',disabled!==true?'drx-button-box-disabled':'']">
    <img class="drx-icon" :src="icon" alt="">
    <span class="drx-text" v-if="this.$slots.default">
      <slot>按钮</slot>
    </span>
  </div>
</template>
<script>
  export default {
    name:'drx-button',
    props:[
      'disabled',
      'icon',
      'type'
    ],
    methods:{
      drxClick(e){
        this.$listeners.click(e)
      }
    }
  }
</script>
