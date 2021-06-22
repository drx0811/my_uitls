
## scoped中样式穿透
### css中 >>>
> 在css中一般是通过  .a >>> .b { /* ... */ }
### scss中/deep/或者::v-deep
```scss
.a{
 /deep/ .b { 
  /******/
 }
}
.a{
 ::v-deep .b { 
  /* ... */ 
 }
} 
```
## 单页面样式作用于body元素
activated和 deactated 是当页面使用keep-alive时会触发的
```vue
new Vue({
  beforeCreate(){
     document.querySelector('body').setAttribute('style', 'background:red')
  },
  beforeDestroy(){
    document.body.removeAttribute('style')
  },
  activated(){
    document.querySelector('body').setAttribute('style', 'background:red')
  },
  deactivated(){
    document.body.removeAttribute('style')
  }
})
```


