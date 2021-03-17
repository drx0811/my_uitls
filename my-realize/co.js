const path = require('path');
const fs = require('fs');

/**
 * generator 函数
 * yyy yield xxx   其中yyy xxx 都是可选的;
 * next();传递的参数是传到 yyy；
 * 总结：
 * 第一个next() 会执行第一个yeild 右侧的表达式并返回 到value
 * 第一个next() 中传递的参数 不起作用；
 * 第二个next() 中传递的数据会 传到 第一个 yeild的左侧
 * 最后 的return
 * 如果没有 return 值的话，那么最后一个 next的打印结果是undefined ;
 * 如果有 return 值的话，那么最后一个 next的打印结果是 return 的值 ;
 *
 * @returns {Generator<*, void, ?>}
 */
function* gen(x) {
   let fileName = yield new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve("1111.ts"); // 假设有这么一个文件
      }, 1500);
   });
   let data = yield new Promise((resolve, reject) => {
      fs.readFile(fileName, "utf8", (err, data) => {
         if (err) {
           reject(err)
         }
         resolve(data);
      });
   });
   return data;
}

function coo(it) {
  return new Promise((resolve, reject) => {
    const next = (val) => {
      const {value, done} = it.next(val);// 把next传的数据传过去；
      if (done) {
        resolve(value);
      }else {
         Promise.resolve(value).then(data => {
            next(data);
         }, (err) => {
            reject(err)
         });
      }
    };
    next();
  })
}

coo(gen(5))
.then(res => {
  console.log(res,'res');
})
.catch(err=>{
   console.log(err,'err1');
})
