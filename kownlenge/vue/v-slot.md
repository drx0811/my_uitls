### v-slot
- 最新的api规定只有 template才可以使用v-slot
- slot可以写在组件上面,在父组件内部可以通过this.$slot去获取相应的节点
```vue
// 下面三种作用相同
<social-sign-box>
  <template #names>
   <social-sign />
  </template>
</social-sign-box>

<social-sign-box>
  <template v-slot:names>
   <social-sign />
  </template>
</social-sign-box>

<social-sign-box>
  <social-sign slot="names" />
</social-sign-box>
```
