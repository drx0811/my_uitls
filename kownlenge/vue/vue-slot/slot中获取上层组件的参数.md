### 我们组件中通过slot传递过来的参数获取的问题
1. 通过v-slot传递过来的参数可以直接使用,但是 如果内部再次嵌套 slot的话,那么内部是无法获取外部的参数的
解决方法可以是
- 拆分组件,这样就可以通过props传参解决
- 在slot的父组件添加 该属性 在内部的 slot中通过 ref来获取实例,再获取该属性 $refs.tabTable.$attrs.myName
```vue
<template>
  <div>
    <BaseCard>
      <template v-slot="props">
        <div>
          {{props.myName}}
          <vxe-table
            :data.sync='data'
            class='mytable-footer'
            ref='tabTable'
            :myName="props.myName"
          >
            <template v-for='item in activeColumns'>
              <vxe-table-column
                :key='item.field'
                v-bind='item'
              >
                <template #header>
                  <slot :name="'header-' + item.field" >
                    <div>
                      <div>{{ item.title }}---{{$refs.tabTable.$attrs.myName}} </div>
                    </div>
                  </slot>
                </template>
              </vxe-table-column>
            </template>
          </vxe-table>
        </div>
      </template>
    </BaseCard>
  </div>
</template>
<script>
  import Vue from 'vue'
  import BaseCard from '../components/BaseCard/BaseCard.vue'
  import TableMy from '../components/BaseCard/TableMy.vue'
  import XEUtils from 'xe-utils'
  import VXETable from 'vxe-table'
  Vue.use(VXETable)
  import 'vxe-table/lib/style.css'
export default {
  data() {
    return {
      activeColumns:[
        {
          title:'drx',
          field:'drx'
        },
        {
          title:'drx1',
          field:'drx1'
        }
      ],
      data:[
        {
          drx:'1111',
          drx1:'1111'
        },
        {
          drx:'2222',
          drx1:'2222'
        }
      ]
    };
  },
  components:{
    BaseCard,TableMy,
    VXETable,
    XEUtils,
  },
  methods: {

  },
};
</script>
```
