// 策略函数
/**
 *策略模式本质 我们要把所有的策略枚举出来
 */
const strategies = {
  "S": function (salary) {
    return salary * 4;
  },
  "A": function (salary) {
    return salary * 3;
  },
  "B": function (salary) {
    return salary * 2;
  }
}
const fn=(type,base)=>{
  strategies[type](base)
}
fn('s',1000)
