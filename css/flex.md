### justify-content: space-between
justify-content: space-between; 时，如果元素不够，元素与元素之间的间距就会拉长，因为要平均分布元素之间的间距。
一般来说，这个处理方式挺多的，用 margin 之类的也是可以处理，不过目前有一个兼容性并不是十分好的 gap 能完美解决这个问题。
.wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

### flex-item 和 flex-content
- flex-item 一般用于单行,flex-content 用于多行,并且包含有 属性 flex-wrap: wrap;
- 如果使用flex-item 最好父元素没有固定高度, 最好是单行
- 如果使用flex-content 最好给父元素添加 固定高度 否则无效果

### flex 
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto;
