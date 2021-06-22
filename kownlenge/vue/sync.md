### 使用的场景
> 使用高阶组件的形式对已有的组件进行封装,以保持父组件和子组件的数据保持同步
> 或者保证 爷组件, 父组件,子组件 之间数据同步
>
当为了保持 `爷组件`,`父组件`,`子组件`数据同步的时候,首先爷组件通过sync 的形式传递
到父组件的props, 在父组件中同样要把 `该数据`(或者 `父组件中的计算属性数据`) 传递到子组件中,
父组件中的`计算属性` 可以设置成 `getter` 和 `setter` 的形式 以保持和 子组件的数据一致, 因为sync
传输数据,当子组件改变数据之后 会传到父组件 触发父组件的setter方法,在setter中触发到爷组件
```vue
<el-pagination
  :background="background"
  :current-page.sync="currentPage"
  :page-size.sync="pageSize"
  :layout="layout"
  :page-sizes="pageSizes"
  :total="total"
  v-bind="$attrs"
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
/>

<script > 
   new Vue({
      computed: {
       currentPage: {
         get() {
           return this.page
         },
         set(val) {
           // 只有孙子组件改变父组件的属性的时候会触发 set,
           this.$emit('update:page', val)
         }
       },
     }
  })
</script>

```

##sync
> sync和v-model有相似之处

vue 修饰符sync的功能是：当一个子组件改变了一个 prop 的值时，这个变化也会同步到父组件中所绑定。
```vue
<comp :foo.sync="bar"></comp>
// 等价于 
<comp :foo="bar" @update:foo="val => bar = val"></comp>
// 在子组件中通过$emit进行触发
this.$emit('update:foo', newValue)

```

