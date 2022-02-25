## ref和reactive的区别
### ref
ref可以用来修饰引用类型,也可以用来修饰基本数据类型
### reactive
reactive 只能用来修饰引用数据类型,强行修饰基本数据乐行会有`警告`
### ref 和reactive 存在的意思
由于在vue3中 proxy 没有vue2 的根对象data,而是一个个的变量,对于基本数据类型的却无能为力,
只能通过ref来包装了

### 何时使用ref何时使用reactive
如果你确信你只可能去改引用类型数据的属性，那么一定要用reactive，
如果还有可能要整体重赋值，那还得用ref。
所以说：需要在组合式API里给变量重赋值的话，无论什么数据类型都必须用ref，不可以用reactive。

对于table这种类型的list值,我们可以使用ref来重新赋值,因为reactive重新赋值不会更新;
对于form,我们可以使用 reactive

