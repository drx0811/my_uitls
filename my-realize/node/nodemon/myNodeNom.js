const chokidar = require('chokidar');// 用于监听某个文件的内容是否发生变化
const {exec,spawn} = require('child_process');
let childProcess
function debounce(fn,delay) {
  let timer
  return function(){
    if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(function(){
      fn()
    }, delay)
  }
}

function nodeStart(){
  childProcess && childProcess.kill()
  childProcess = exec('node index.js',function (err,std){
    if(err){
      return false;
    }
    console.log(std);
  })
}
let debounceStart = debounce(nodeStart,150)
chokidar.watch('index.js').on('all', (event, path) => {
  debounceStart()
});
