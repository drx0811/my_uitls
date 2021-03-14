let path = require("path");
let vm = require("vm");
let fs = require("fs");

function req(filename) {
  let absPath = path.resolve(__dirname, filename);
  let extnames = Object.keys(Module._extensions);
  let old = absPath;
  if (Module._cache[absPath]) {
    return Module._cache[absPath].exports;
  }
  let index = 0;// 优先解析 js，再解析 json 最后解析
  //运用到一个小递归来匹配 req 方法不传入文件后缀名的兼容方法
  function find(filename) {
    if (index === extnames.length) {
      return filename;
    }
    try {
      fs.accessSync(filename);// 该文件是否可以访问
      return filename;
    } catch (ex) {
      return find(old + extnames[index++]);
    }
  }
  absPath = find(absPath);
  let module = new Module(absPath);
  Module._cache[module.id] = module;
  tryModuleLoad(module);
  return module.exports;
}

function Module(pathname) {
  this.id = pathname;
  this.exports = {};
}

function tryModuleLoad(module) {
  let extname = path.extname(module.id);
  Module._extensions[extname](module);
}

Module._cache = {};
Module.wrap = [
  "(function(exports, module, require, __filename, __dirname){",
  "})"
];

Module._extensions = {
  ".js"(module) {
    let content='';
    try {
      content=fs.readFileSync(module.id);
    } catch (ex) {
      throw new Error("文件不存在");
    }
    let fnStr = Module.wrap[0] + content + Module.wrap[1];
    let fn = vm.runInThisContext(fnStr);
    console.log(fn.toString(),'1111');
    fn.call(module.exports, module.exports, module, req);
  },
  ".json"(module) {
    let content='';
    try {
      content=fs.readFileSync(module.id);
    } catch (ex) {
      throw new Error("文件不存在");
    }
    module.exports = JSON.parse(content);
  }
};

let a = req("../package.js");
console.log(a);

// a();
// 实现require方法；
/*
* 主要通过 fs方式去读取文件，
* 再通过 eval方法，node中为vm.runInThisContext()方法将字符串转为函数，
* 不同后缀的文件实现方式不同，主要包括json和js，
* */