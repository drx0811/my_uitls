<script>
export default {
  name: "ewe"
}
</script>

<template>
  <img :id="roll.location" @click="onClickRoll($event,roll)"
       :class="['image_roll_new',currentWare=='4'?'image_roll_out_new':'',getRollClass(roll),selRoll.packageNo==roll.data.packageNo ? 'roll_active_new' : '']"
       v-for="roll in val.list"
       :style=" 'bottom:' + roll.y + '%;left:' + roll.x + '%;' + 'z-index:' + (roll.col+roll.lay) +'; transform:'+ scaleX(-1) "/>
</template>

<style scoped lang="scss">

</style>
