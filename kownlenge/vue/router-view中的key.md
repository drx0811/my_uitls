## router-view的使用
```vue
<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.fullPath
    }
  }
}
</script>
```
### 不设置 router-view 的 key 属性
由于 Vue 会复用相同组件, 即 `/page/1 => /page/2 或者 /page?id=1 => /page?id=2` 这类链接跳转时, 
将不在执行created, mounted之类的钩子, 这时候你需要在路由组件中, 添加`beforeRouteUpdate`钩子来执行相关方法拉去数据
相关钩子加载顺序为:`beforeRouteUpdate`

### 设置 router-view 的 key 属性值为 $route.path
从/page/1 => /page/2, 由于这两个路由的$route.path并`不`一样, 所以组件被强制不复用, 
相关钩子加载顺序为:`beforeRouteUpdate => created => mounted`

从/page?id=1 => /page?id=2, 由于这`两个路由的$route.path一样`, 所以和没设置 key 属性一样, `会`复用组件,
相关钩子加载顺序为:`beforeRouteUpdate`

### 设置 router-view 的 key 属性值为 $route.fullPath
从/page/1 => /page/2, 由于这两个路由的`$route.fullPath`并不一样, 所以组件被强制不复用, 相关钩子加载顺序为:
`beforeRouteUpdate => created => mounted`

从/page?id=1 => /page?id=2, 由于这两个路由的`$route.fullPath`并`不`一样, 所以组件被强制`不复用`, 相关钩子加载顺序为:
`beforeRouteUpdate => created => mounted`
