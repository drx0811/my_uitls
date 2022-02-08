function getA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('a')
    }, 2000)
  })
}
function getB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('b')
    }, 4000)
  })
}


async function changeFnA() {
  console.time('drx')
  const infoA = await getA()
  const infoB = await getB()
  console.log(infoA);
  console.log(infoB);
  console.timeEnd('drx')
};
async function changeFnB() {
  console.time('drxB')
  const infoA = getA()
  const infoB = getB()
  let a = await infoA
  let b = await infoB
  console.log(a);
  console.log(b);
  console.timeEnd('drxB')
};
async function changeFnC(){
  console.time('drx')
  const result = await Promise.all([
    getA(),
    getB()
  ])
  console.log(...result);
  console.timeEnd('drx')
};
changeFnA();// 方法一
changeFnB();// 方法二
changeFnC();// 方法三

// 方法1 会导致执行的时间变长,成为几个执行所需要的时间的和;
// 方法2 执行的时间是其中一个最长的时间
// 方法3 执行的时间是其中一个最长的时间 与方法二一样,  建议使用方法三
