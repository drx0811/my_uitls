// 1.Symbol 是一种基本数据类型,但是不能通过new的方式进行包装
/* 2. 唯一性
* 我们知道 Number,String,Boolean,Object Array 都可以通过new 方式,但是symbol不可以
* 没有注册的 symbol 永远不会相同;
* Symbol()!==Symbol();-----true
* Symbol("test")!==Symbol("test");-----true
* 
* */

/*3. 可注册
* 如果想要 共享和重用 symbol标识,我们可以通过Symbol.for(key)的方式注册到全局注册表中
* 全局注册 所有key 键值都是  字符串,每次注册的时候都会先检查,如果有则直接返回,如果没有
* 才重新 注册
* Symbol.for('test') === Symbol.for('test') -----true

* */
/* 4. 可查询
*我们可以通过 Symbol.keyFor(sym) 来查询 注册时候所使用的字符串
* let key1 = Symbol.for('test');
* Symbol.keyFor(key1) === 'test';
* 
* */
/* 5.可枚举
* 对于 对象数据 传统的 Object.keys() 和 forin 都不可以拿到Symbol的标识;
* 但是我们可以通过 Reflect.ownKeys() 可以拿到所有的 key,包括 symbol和普通的
* Object.getOwnPropertySymbols()可以拿到所有的symbol的数据
* 
* */

