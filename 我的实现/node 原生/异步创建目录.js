const fs=require('fs');
const path=require('path');
/**
 * 递归创建目录
 * @param dir
 */
const mkdirFn=(dir)=>{
  const arr=dir.split('/');
  let index=0;
  let dirPath=arr[index];
  const next=(dir)=>{
    fs.mkdir(dir,function (err,fd) {
      if (err) {
        console.log(err);
        return
      }
      index++;
      if (index===arr.length) {
        return;
      }
      dirPath=`${dir}/${arr[index]}`
      next(dirPath)
    })
  }
  next(dirPath);
}
// mkdirFn('aaa1/eee/22221/22');
/**
 * 循环创建目录
 * @param {*} path 
 * @param {*} callback 
 */
const ayncMkdirFn= async (path,callback)=>{
  let arr=path.split('/');
  let newPath='';
  for (let i = 0; i <arr.length ; i++) {
    if (newPath==='') {
        newPath=`${arr[i]}`
    }else {
      newPath=`${newPath}/${arr[i]}`;
    }
    try {
      await fs.access(newPath)
    }catch (e) {
      fs.mkdir(newPath,function (err,fd) {
        if (err) {
          return callback(err,undefined)
        }
        callback(undefined,newPath+'创建成功!')
      })
    }
  }
}
// ayncMkdirFn('aaa1/eee/22221/22/3334/33332')