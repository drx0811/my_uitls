
### vue 的递归组件
- 常用的递归组件包括 菜单，树等；
- 递归组件中最重要的是  抽离出可递归的内容为一个组件，并给这个组件一个 name 最后在组件中 使用name即可
```vue
<template>
  <ul>
    <li v-for="(item,index) in list " :key="index">
      <p>{{item.name}}</p>
      <tree-menus :list="item.cList"></tree-menus>
    </li>
  </ul>
</template>
 <style>
   ul{
    padding-left: 20px!important;
   }
 </style>
<script>
	export default{
		name:'treeMenus',
		data:{
			list: []
		}
	}
</script>
```
