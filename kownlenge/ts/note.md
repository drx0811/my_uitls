### 在Typescript中使用Object.assign报错：Property ‘assign’ does not exist on type ‘ObjectConstructor’
>  解决办法，可以进行断言   (<any>Object).assign(obj1, obj2);
