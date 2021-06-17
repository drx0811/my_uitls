### Element-ui 中的参数的传递
```vue
// 此处的 changeStatus  无法传递  index;
<div v-for="(item,index) in itemList">
  <el-select v-model="item.value" @change="changeStatus(val, index)">
    <el-option v-for="op in options" :key="op.key" :label="op.label"
      :value="op.label"
    >
    </el-option>
  </el-select>
</div>
```
如果我们需要传递 index那么我们需要对函数进行包装一下;
@change="((val)=>{changeStatus(val, index)})"i
````vue
<div v-for="(item,index) in itemList">
  <el-select v-model="item.value" @change="((val)=>{changeStatus(val, index)})">
    <el-option v-for="op in options" :key="op.key" :label="op.label"
               :value="op.label"></el-option>
  </el-select>
</div>
<script >
  export default {
    props:{
      type:Object,// 当传递的是object的时候,需要以函数的形式来传递;
      default:function() {
        return {
          width:100,
          height:20
        }
      }
    }
  }
</script>
````
