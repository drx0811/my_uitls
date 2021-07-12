### css伪元素不能直接添加hover,如果想给伪元素添加hover,那么需要在元素本身上面添加,

```html
<style>
    .box{
      width: 100px;
      height: 10px;
      border: 1px solid red;
    }
    .box::before{
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background-color: yellow;
    }
    .box:hover::before{
      background-color: green;
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
```
