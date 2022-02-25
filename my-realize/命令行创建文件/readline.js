let readline = require('readline')
let fs = require('fs')

let path = require('path')
// 问题
let questions = ['name', 'version', 'author'];
// 默认答案
let defaultAnswers = ['name', '1.0.0', 'none'];
// 用户答案
let answers = [];

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'OHAI> '
});
let placeholder = `
plese input
`


const createFile = () => {
  let packageObj = {};
  questions.forEach((item, index) => {
    packageObj[item] = answers[index]
  })
  try {
    fs.writeFileSync(path.join(__dirname, 'my.json'), JSON.stringify(packageObj, null, 4))
  } catch (error) {
    throw error
  }
}
let index = 0;

const loopFn = function () {
  if (index === questions.length) {
    createFile();
    rl.close();
    return
  }

  let question = `${questions[index]} : `;
  rl.question(question, function (ans) {
    answers[index] = ans || defaultAnswers[index];
    index++;
    loopFn();
  })
}
loopFn();
