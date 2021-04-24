<template>
  <div @click="show">
    {{name}}
  </div>
</template>

<script>
  export default {
    name: "SimpleHeader",
    props: {
      name: {
        default: '',
        type: String
      }
    },
    emits: ['callback'],
    setup(_, ctx) {
      const show = () => {
        ctx.emit('callback', 'tou')
      }
      return {
        show
      }
    }
  }
</script>

<template>
  <s-header :name="'订单详情'" @callback="showName"></s-header>
</template>
<script>
  export default {
    methods: {
      xxx(e) {
        console.log(e);
      },
      showName(e) {
        console.log('展示showName', e);
      }
    },
  }
</script>

