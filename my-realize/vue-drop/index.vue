<template>
  <dropdown-menu>
    <dropdown-item v-model="defaultId" :list="list"></dropdown-item>
  </dropdown-menu>
</template>
<script>
  import DropdownItem from "./DropdownItem";
  import DropdownMenu from "./DropdownMenu";
  export default {
    data(){
      return {
        defaultId:1,
        list:[
          {
            name:'drx',id:1,
          },
          {
            name:'sxm',id:2,
          }
        ]
      }
    },
    components: {
      DropdownItem,DropdownMenu
    }
  }
</script>
