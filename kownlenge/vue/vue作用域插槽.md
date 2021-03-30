### 组件传参
> 通过props传参的时候，我们可以设置 参数的类型type，也可以设置参数的默认值 default， 是否必传 required

```vue
    // 通过props的传值 如果是 引用数据类型 的，设置默认值必须是  通过函数返回
    props:{
      name:{
        type:string,
        default:'1111'
      },
      name:{
         type:Array,
         default: ()=>[]
      }
    }
```
### 作用域插槽
```vue
// 通过v-slot 可以获得子组件传过来的数据，即作用域插槽
<div>
    <my-name>
      <template v-slot="obj">
        <span>{obj.name}</span>
      </template>
    </my-name>
</div>
components:{
  myName:{
    template:`
    <div>
      <slot :name="'1111'"></slot>
    </div>
    `
  }
}



// 作用域插槽在封装组建的时候经常用到；
<bread>
  <bread-item title="list-1">内容1</bread-item>
  <bread-item title="list-2">内容2</bread-item>
  <bread-item title="list-3">内容3</bread-item>
</bread>
  Vue.component('bread',{
    template: `
      <div>
        <slot></slot> <!--存放 bread-item-->
      </div>
    `,
    methods: {
      cut(uid){
        this.$children.forEach(item=>{
          if (item._uid!==uid) {  <!-- 直接操作 子组件的方法和属性  this._uid -->
            item.isShow=false
          }else {
            item.isShow=true
          }
        })
      }
    }
  });
  Vue.component('bread-item',{
    props:[
      'title'
    ],
    data(){
      return{
        isShow:false,
      }
    },
    template: `
      <div>
        <div @click="goShow">{{title}}</div>
        <div v-if="isShow">
          <slot></slot> <!--存放 bread-item 的 内容-->
        </div>
      </div>
    `,
    methods:{
      goShow(){
        this.$parent.cut(this._uid); <!--调用父组件的方法， this._uid 方法黑科技 -->
      }
    }

  });
```
