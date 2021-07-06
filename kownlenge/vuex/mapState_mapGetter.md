### mapState mapGetters
```vue
<template>
 <p>
  <h4>vuex的状态管理数据</h4>
  <h5>博客标题</h5>
  <i>
    {{this.$store.state.blogTitle}}
  </i>
  <h5>todos里面的信息</h5>
  <ul>
    <li v-for = "item in todosALise" :key="item.id">
    <span>{{item.text}}</span> <br>
    <span>{{item.done}}</span>
    </li>
  </ul>
  <h5>初始化访问量</h5>
 <p>
  mapState方式 {{viewsCount}}；<br>
  直接使用views {{this.$store.state.views}}
 </p>
  <h4>blogNumber数字 </h4>
  <span>state中blogNumber：{{this.$store.state.blogNumber}}</span>
  <h4>总计</h4>
  <span>state中total：{{this.$store.state.total}}</span>
 </p>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
 data () {
  return {
    checked: true
  }
 },
 created () {
  // this.$store.dispatch('addViews') // 直接通过store的方法 触发action, 改变 views 的值
  this.blogAdd() // 通过mapActions 触发mutation 从而commit ，改变state的值
 },
 computed: {
  ...mapState({
    viewsCount: 'views'
  }),
  ...mapGetters({
      todosALise: 'getToDo' // getToDo 不是字符串，对应的是getter里面的一个方法名字 然后将这个方法名字重新取一个别名 todosALise
    })
 },
 methods: {
    ...mapMutations({
      totalAlise: 'clickTotal' // clickTotal 是mutation 里的方法，totalAlise是重新定义的一个别名方法，本组件直接调用这个方法
    }),
  　...mapActions({
      blogAdd: 'blogAdd' // 第一个blogAdd是定义的一个函数别名称，挂载在到this(vue)实例上，后面一个blogAdd 才是actions里面函数方法名称
    })
  }
}
 </script>
 ```
