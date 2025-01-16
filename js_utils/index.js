/**
 * 判断数据类型,全局去掉 string大的trim方法
 * @param obj
 * @returns {*}
 */
const getTypeFn = (obj) => {
  const typeMap = {
    '[object Null]': 'null',
    '[object Undefined]': 'undefined',
    '[object String]': 'string',
    '[object Number]': 'number',
    '[object Boolean]': 'boolean',
    '[object Object]': 'object',
    '[object Array]': 'array',
    '[object Set]': 'set',
    '[object Map]': 'map',
    '[object Symbol]': 'symbol',
    '[object BigInt]': 'bigInt',
    '[object Function]': 'function',
    '[object Date]': 'date',
  };
  return typeMap[Object.prototype.toString.call(obj)];
};
const trimObjFn = (_ob) => {
  if (getTypeFn(_obj) === 'object') {
    return Object.keys(_obj).reduce((pre, cur) => {
      let v = _obj[cur];
      const type = getTypeFn(v);
      if (['object', 'array', 'string'].includes(type)) {
        v = trimObjFn(v);
      }
      pre[cur] = v;
      return pre;
    }, {});
  } else if (getTypeFn(_obj) === 'array') {
    return _obj.map((item) => {
      let _item = item;
      const type = getTypeFn(_item);
      if (['object', 'array', 'string'].includes(type)) {
        _item = trimObjFn(_item);
      }
      return _item;
    });
  } else if (getTypeFn(_obj) === 'string') {
    return _obj.trim();
  } else {
    return _obj;
  }
};


/**
 * 虚拟滚动
 */
class FsVirtuallist {
  constructor(containerSelector, listSelector) {
    this.state = {
      dataSource: [], // 模拟数据源
      itemHeight: 100, // 固定 item 高度
      viewHeight: 0, // container 高度
      maxCount: 0, // 虚拟列表视图最大容纳量
    };
    this.scrollStyle = {}; // list 动态样式（高度，偏移）
    this.startIndex = 0; // 当前视图列表在数据源中的起始索引
    this.endIndex = 0; // 当前视图列表在数据源中的末尾索引
    this.renderList = []; // 渲染在视图上的列表项
    // 根据用户传入的选择器获取 DOM 并保存
    this.oContainer = document.querySelector(containerSelector);
    this.oList = document.querySelector(listSelector);
  }
  init() {
    this.state.viewHeight = this.oContainer.offsetHeight;
    this.state.maxCount = Math.ceil(this.state.viewHeight / this.state.itemHeight) + 1;
    this.bindEvent();
    this.addData();
    this.render();
  }
  computedEndIndex() {
    const end = this.startIndex + this.state.maxCount;
    this.endIndex = this.state.dataSource[end] ? end : this.state.dataSource.length;
    if (this.endIndex >= this.state.dataSource.length) {
      this.addData();
    }
  }

  computedRenderList() {
    this.renderList = this.state.dataSource.slice(this.startIndex, this.endIndex);
  }
  computedScrollStyle() {
    const { dataSource, itemHeight } = this.state;
    this.scrollStyle = {
      height: `${dataSource.length * itemHeight - this.startIndex * itemHeight}px`,
      transform: `translate3d(0, ${this.startIndex * itemHeight}px, 0)`,
    };
  }
  render() {
    this.computedEndIndex();
    this.computedRenderList();
    this.computedScrollStyle();
    const template = this.renderList.map((i) => `<div class="fs-virtuallist-item">${i}</div>`).join("");
    const { height, transform } = this.scrollStyle;
    this.oList.innerHTML = template;
    this.oList.style.height = height;
    this.oList.style.transform = transform;
  }
  bindEvent() {
    // 注意需要改变 this 指向 -> bind
    this.oContainer.addEventListener("scroll", this.handleScroll.bind(this));
  }

  handleScroll() {
    const { scrollTop } = this.oContainer;
    this.startIndex = Math.floor(scrollTop / this.state.itemHeight);
    this.render();
  }
  addData() {
    for (let i = 0; i < 10; i++) {
      this.state.dataSource.push(this.state.dataSource.length + 1);
    }
  }
}
const vList = new FsVirtuallist(".fs-virtuallist-container", ".fs-virtuallist-list");
vList.init();




/**
 * 前端压缩图片
 */
class CompressImage {
  getImgInfo(url, rate, callback) {
    const _img = new Image();
    const that = this;
    _img.src = url;
    _img.onload = function () {
      const _canvas = document.createElement("canvas");
      const w = this.width / rate;
      const h = this.height / rate;
      _canvas.setAttribute("width", w);
      _canvas.setAttribute("height", h);
      _canvas.getContext("2d").drawImage(this, 0, 0, w, h);
      const base64 = _canvas.toDataURL("image/jpeg");
      _canvas.toBlob(
        (blob) => {
          if (blob.size > 1024 * 1024) {
            that.getImgInfo(base64, rate, callback);
          } else {
            // callback(base64);
            const url = URL.createObjectURL(blob);
            callback(url);
            URL.revokeObjectURL(url);
          }
        },
        "image/jpeg",
        0.8
      );
    };
  }
}





/**
 * getBoundingClientRect 获取的是dom距离 浏览器页面的top,left 的值,
 * 当需要计算B位置移动的时候,可以利用两个元素A,B,,A位置不动,B的位置移动,计算两个的差值,
 * 得到比如tabs组件的下划线
 *
 */

/**
 需要得到一个列表的所有dom,那么可以通过react的ref的回调函数的形式得到
 <div ref={ele => tabItemObj[`tab${index}`] = ele}></div>
 *
 */

/**
 * 点击按钮 的dom 操作  e.target.currentTarget 的区别
 *
 * target是指目标本身,元素本身
 * currentTarget >= 本身,因为会冒泡,有可能是父元素
 *
 * 应用: 比如modal弹窗的时候,我们点击,mask则关闭,但是我们把click事件绑定到的其实不是mask,
 * 而是弹窗的父级,
 *
 *通过函数 Modal.info({title:'111',content:'567890'});生成一个弹窗的实现;
 * 1.通过动态创建一个dom,然后append到body下;
 * 2. ReactDOM.render的方式把一个弹窗的内容,渲染到新创建的dom上;
 * 3.关闭的时候,先要通过ReactDOM去卸载渲染的动态dom;ReactDOM.unmountComponentAtNode(div),然后
 * div.parentNode.removeChild(div);手动移除该真实的dom;
 *
 *
 */

/***
 * classname库使用下列方式配置className比较清晰
 * const classStr = cx(
   prefixCls,
   {
      [`${prefixCls}-${newPlacement}`]: newPlacement,
      [`${prefixCls}-triangle`]: hasTriangle
    },
   className
   )
 *
 *
 *
 *
 *
 */





/**
 * 获取当前body的滚动条的宽度
  * @returns {number}
 */
const getScrollBarWidth = () => {
  const scrollDiv = document.createElement('div')
  scrollDiv.style.cssText =
    'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;'
  document.body.appendChild(scrollDiv);
  const scrollBarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv)
  return scrollBarWidth
}


/**
 * 判断浏览器是否出现了滚动条
 */
const hasScrollBar = () => {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight)
}
/**
 * 获取dom的所有css属性值
 *  tips: 获取的值不一定跟
 */
const dom = <div></div>
getComputedStyle(dom)



/**
 * 用于合并table中的行,当不需要向下合并的时候返回1,
 * 需要合并的时候计算相同的,后面几个变为0;
 * @param arr
 * @returns {[]}
 */
const rowSpanFn = (arr) => {
  const nums = [];
  for (let i = 0; i < arr.length; i++) {
    let _num = 1;
    for (let j = i+1; j < arr.length+1; j++) {
      if (arr[i] === arr[i-1] && i!==0) {
        _num = 0;
        break
      }else if (arr[i] === arr[j]&& j!==arr.length) {
        _num++
      }else {
        break
      }
    }
    nums.push(_num)
  }
  // [1,1,3,0,0,3,0,0,2,0,1];
  console.log(nums)

  return nums;
}
rowSpanFn( ['人相关', null, '人相关', '人相关',undefined])




/**
 * pathToObject('a.b.c.d');  => {a: {b: {c: {d: {}}}}
 * @param path
 * @param value
 * @returns {{}}
 */
const pathToObj = function(path, value) {
  const depths = path.split('.');
  const obj = {};
  toSubObject(obj);
  function toSubObject(sub) {
    const shifted = depths.shift();
    sub[shifted] = {};
    if (depths.length) {
      toSubObject(sub[shifted]);
    } else {
      sub[shifted] = value || {};
    }
  }
  return obj;
};

/**
 * var myObj = {
      a: {
          b: 5
      }
  };
 pathToObject.value(myObj, 'a.b'); // 5
 * @param obj
 * @param path
 * @param value
 * @returns {*}
 */
pathToObj.value = function(obj, path, value) {
  const depths = path.split('.');
  let val;
  setDeep(obj);
  function setDeep(subObject) {
    let shifted = depths.shift();
    if (depths.length) {
      setDeep(subObject[shifted]);
    } else {
      if (value !== undefined) {
        subObject[shifted] = value;
      } else {
        val = subObject[shifted];
      }
    }
  }
  return val !== undefined ? val : obj;
};




/**
 * 先安装 后使用
 * import BigNumber from "bignumber.js";
 * @param num 可以传入纯数字,也可以是 字符串数字, 千分位字符串数字;
 *  如果num是数组 那么就是求和,
 * @param fixed  想要保留的小数位,精确度
 * @param format  是否想要进行千分位处理
 * @returns {string|*}
 */
function handleBigNumber(num,fixed = 0,format = false){
  if (num === null || num === undefined) {
    throw new Error('非数字不能转义')
  }
  let _num
  if(num && Array.isArray(num) && num.length){// 数组求和
    let [first,...last]= num;
    _num = new BigNumber(first)
    last.forEach(item=>{
      _num = _num.plus(item)
    })
  }
  if(BigNumber.isBigNumber(num)){
    _num = num
  }else {
    let reg = /^-?\d*(\.\d+)?$/
    let regFormat = /^-?[1-9]{1,3}(,\d{3})*(\.\d+)?$/
    if(typeof num === 'number'){
      _num = new BigNumber(num)
    }else if( typeof num === 'string' && reg.test(num)){
      _num = new BigNumber(num)
    }else if(typeof num === 'string' && regFormat.test(num)){
      num = num.replace(',','')
      _num = new BigNumber(num)
    }
  }
  _num = _num.toFixed(fixed);
  if(format){
    _num = new BigNumber(_num)
    return _num.toFormat(fixed)
  }else {
    return _num
  }
}
// let num = '111110.045000122112';
// let num5 = handleBigNumber(num,3,true);

 const toFixed = (n, m) => {
  if (n > 20 || n < 0) {
    throw new RangeError('toFixed() digits argument must be between 0 and 20');
  }
  const number = m;
  if (isNaN(number) || number >= Math.pow(10, 21)) {
    return number.toString();
  }
  if (typeof (n) == 'undefined' || n == 0) {
    return (Math.round(number)).toString();
  }

  let result = number.toString();
  const arr = result.split('.');

  // 整数的情况
  if (arr.length < 2) {
    result += '.';
    for (let i = 0; i < n; i += 1) {
      result += '0';
    }
    return result;
  }

  const integer = arr[0];
  const decimal = arr[1];
  if (decimal.length == n) {
    return result;
  }
  if (decimal.length < n) {
    for (let i = 0; i < n - decimal.length; i += 1) {
      result += '0';
    }
    return result;
  }
  result = integer + '.' + decimal.substr(0, n);
  const last = decimal.substr(n, 1);

  // 四舍五入，转换为整数再处理，避免浮点数精度的损失
  if (parseInt(last, 10) >= 5) {
    const x = Math.pow(10, n);
    if(result.indexOf('-')!==-1){
      result = -(Math.round((-parseFloat(result) * x)) + 1) / x;
      result = result.toFixed(n);
    }else{
      result = (Math.round((parseFloat(result) * x)) + 1) / x;
      result = result.toFixed(n);
    }
  }

  return result;
}

/**
 * 给树形结构添加 层级level
 *
 * 有时候我们拿到一个树形结构,要求我们只用前两层或者某层的数据,但是树 没有层级,
 */
function treeChangeLeve(treeList,level){
  return treeList.map(item=>{
    let levelCeng = level;// 这一步很重要
    return {
      ...item,
      level: levelCeng,
      children:item.children? treeChangeLeve(item.children, ++levelCeng):undefined
    }
  })
}
let tree=[
  {
    id:'1',
    children:[
      {
        id: '1-1',
        children:[
          {
            id: '1-1-1',
          },
          {
            id: '1-1-2',
          },
        ]
      },
      {
        id: '1-2',
        children:[
          {
            id: '1-2-1',
          },
          {
            id: '1-2-2',
          },
        ]
      },
    ]
  },
  {
    id:'2',
    children:[
      {
        id: '2-1',
        children:[
          {
            id: '2-1-1',
          },
          {
            id: '2-1-2',
          },
        ]
      },
      {
        id: '2-2',
        children:[
          {
            id: '2-2-1',
          },
          {
            id: '2-2-2',
          },
        ]
      },
    ]
  }
]
tree = treeChangeLeve(tree,1);



/**
 * Symbol 的使用,我们在对接口返回的数据进行处理的时候,添加的字段避免和
 * 接口返回的字段重复,我们可以使用symbol字符来做标识;
 */
const useSymbol = () => {
  let children  = Symbol.for('children');
  let list = [
    {
      name:'drx-1',
      age:1,
      children:'一个健康聪明的女孩',
      [children]:[
        {
          name:'drx-1',
          age:1,
          children:'一个健康聪明的女孩',
          [children]:null
        },
        {
          name:'drx-1',
          age:1,
          children:'一个健康聪明的女孩',
          [children]:null
        }
      ]
    },
    {
      name:'drx-2',
      age:2,
      children:'一个健康聪明的女孩',
      [children]:[
        {
          name:'drx-2',
          age:2,
          children:'一个健康聪明的女孩',
          [children]:null
        },
        {
          name:'drx-3',
          age:3,
          children:'一个健康聪明的女孩',
          [children]:null
        }
      ]
    }
  ];
}
/**
 * 树形结构转换成一维结构
 * @param {*} tree
 * @returns
 */
const treeToArray = (tree) => {
  let res = []
  for (const item of tree) {
    const { children, ...i } = item
    res.push(i)
    if (children && children.length) {
      res = res.concat(treeToArray(children))
    }
  }
  return res
}

/**
 * 截取树中某一个节点为父节点的树,缺点是可能会崩溃
 * @param data
 * @param parentId
 * @returns {*[]}
 */
function buildTree(data, parentId = null) {
  const tree = [];
  data.forEach(node => {
    if (node.parentId === parentId) {
      const children = buildTree(data, node.id);
      if (children.length > 0) {
        node.children = children;
      }
      tree.push(node);
    }
  });
  return tree;
}



/**
 * 一维函数转换成树形结构,前提是有自己的id和父id
 * ivsmNodeNum 自身id
 * PRNIVSMNODENUM 父id
 * @param {*} data
 * @returns
 */
const toTree = (data) => {
  let result = []
  let map = {};
  data.forEach(item => {
    map[item.ivsmNodeNum] = item;
  });
  data.forEach(item => {
    let parent = map[item.PRNIVSMNODENUM];
    if (parent) {
      (parent.children || (parent.children = [])).push(item)
    } else {
      result.push(item);
    }
  });
  return result;
}


/**
 *
 * @param {要转成千分位的字符串} num
 *
 * 缺点 : toLocaleString()对小数点会截断,所以如果带有小数点的不能用,除非固定几个小数点
 */
function formatNum(num){
  if (typeof num === 'number' || /^(-?\d+)(\.\d+)?$/.test(num)){
    let numStr;
    if (typeof num === 'number'){
      numStr = num.toString();
    }else{
      numStr=num;
    }
    let numArr=numStr.split('.');
    if(numArr && numArr.length===2){
      return Number(numArr[0]).toLocaleString() +'.'+ numArr[1]
    }else{
      return num.toLocaleString()
    }
  } else{
    throw new Error('此数据不能格式化')
  }
}
/**
 * compose 函数 和pipe函数相反；reducerRight 的使用；
 * @param  {...any} args
 */
function compose(...args) {
  return function (firstName) {
    return args.reduceRight((prev, nextV) => nextV(prev), firstName)
  }
}
const add = function (args) {
  return args + 10;
}
const muilt = function (args) {
  return args * 10
}

let fn = compose(muilt, add)(10);



/**
 * 12344-----> 12.344进行转换
 * @param {number类型数据} v
 */
const numberFormat = (v) => {
  const vStr = `${v}`;
  let longNumStr = '',
    flowNumStr = '',
    isFloat = false;

  if (vStr) {
    if (vStr.indexOf('.') > 0) {
      [longNumStr, flowNumStr] = vStr.split('.');
      flowNumStr = flowNumStr.substr(0, 2);
      isFloat = true;
    } else {
      longNumStr = vStr;
    }
  }
  const longFormat = longNumStr.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`);
  if (isFloat) {
    return `${longFormat}.${flowNumStr}`;
  }
  return longFormat;
};

/**
 * 函数柯理化；
 * @param {*} Vue
 */
export const CarryFn = (Vue) => {
  return class LazyFn {
    constructor(options) {
      this.options = options;
    }
  }
}
let carryFn = CarryFn('Vue');
let LazyFn = new LazyFn('options')


/**
 * 找找该节点的祖节点中含有滚动属性的节点；
 * @param {dom节点} node
 * 我们在vue-lazyload的源码中可能要用到；
 */
export const getParentCroll = (node) => {
  let parent = node.parentNode;
  while (parent) {
    if (/(auto)|(scroll)/.test(getComputedStyle(parent)['overflow'])) {
      return parent;
    }
    parent = parent.parentNode;
  }
  return parent;
}


/**
 * 用法
 const obj={
    n______ame______0:0,
    age_______0:11,
    height______0:111,
    height________12:111111111,
    name______1:2,
    age_______1:22,
    height______1:222,
  };
 let flag=dynamicData.flagFn('_',6);
 dynamicData.dataFn(obj,flag)

 */
export const dynamicData = {
  dataFn: (obj, flag) => {
    let realFlagList = [];
    let realKeyList = [];
    const sendData = [];
    Object.keys(obj).map(item => {
      if (item.includes(flag)) {
        let newItem = item.split('').reverse().join('');
        let splitIndex = newItem.indexOf(flag)
        let newItemArr = [newItem.slice(0, splitIndex), newItem.slice(splitIndex + flag.length)];
        let realKey = newItemArr[1].split('').reverse().join('');
        let realFlag = newItemArr[0].split('').reverse().join('');
        realFlagList.push(realFlag)
        realKeyList.push(realKey)
      }
    });
    realFlagList = [...new Set(realFlagList)];
    realKeyList = [...new Set(realKeyList)];
    realFlagList.forEach(item => {
      const itemObj = {};
      realKeyList.forEach(kk => {
        if (obj[`${kk}${flag}${item}`] !== undefined) {
          itemObj[kk] = obj[`${kk}${flag}${item}`]
        }
      });
      if (Object.keys(itemObj).length) {
        sendData.push(itemObj);
      }
    });
    return sendData
  },
  flagFn: (f, num) => {
    return f.repeat(num)
  }
}



/**
 * IE中默认坐标是从（2，2）开始的，所以要做兼容性；
 */
export const GetRect = (element) => {
  const rect = element.getBoundingClientRect();
  const top = document.documentElement.clientTop;
  const left = document.documentElement.clientLeft;
  return {
    top: rect.top - top,
    bottom: rect.bottom - top,
    left: rect.left - left,
    right: rect.right - left
  }
}

/**
 * 深克隆
 * @param params
 * @param has
 * @returns {any|RegExp|Date}
 */
export const deepClone = (params, has = new WeakMap()) => {
  //has 弱引用的目的是循环引用的时候，不用再次拷贝；
  if (params == null) {
    return params
  }
  if (params instanceof Date) {
    return new Date(params)
  }
  if (params instanceof RegExp) {
    return new RegExp(params)
  }
  if (typeof params !== "object") {
    return params;
  }
  const obj = new params.constructor();
  if (has.get(params)) {
    return has.get(params)
  }
  has.set(params, obj);
  for (let key in params) {
    if (params.hasOwnProperty(key)) {
      obj[key] = deepClone(params[key], has);
    }
  }
  return obj;
}
/**
 * 设置uuid
 * @param len
 * @param radix
 * @returns {string}
 */
export const uuidv4 = (len = 8, radix = 16) => {
  let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  const uuid = [];
  let i;
  radix = radix || chars.length;
  if (len) {
    for (i = 0; i < len; i++) {
      uuid[i] = chars[0 | Math.random() * radix];
    }
  } else {
    let r;
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16;
        uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];
      }
    }
  }
  return uuid.join('');
}

/**
 * 前端生成文件并下载
 * @param fileName
 * @param content
 */
export function createAndDownloadFile(fileName, content) {
  const aTag = document.createElement('a');
  const blob = new Blob([content]);
  aTag.download = `${fileName}.json`;
  aTag.href = URL.createObjectURL(blob);
  aTag.click();
  URL.revokeObjectURL(blob);
}

/**
 * rem计算适配
 */
(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

/**
 * 转义html标签
 * @param text
 * @returns {string}
 * @constructor
 */
export function HtmlEncode(text) {
  return text.replace(/&/g, '&').replace(/\"/g, '"').replace(/</g, '<').replace(/>/g, '>')
}

/**
 * 设置cookie值
 * @param name
 * @param value
 * @param Hours
 */
export function setCookie(name, value, Hours) {
  var d = new Date();
  var offset = 8;
  var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  var nd = utc + (3600000 * offset);
  var exp = new Date(nd);
  exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000);
  document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString() + ";domain=360doc.com;"
}

/**
 * 获取cookie值
 * @param name
 * @returns {string|null}
 */
export function getCookie(name) {
  var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
  if (arr != null) return unescape(arr[2]);
  return null
}

/**
 * 返回顶部的通用方法
 * @param btnId
 */
function backTop(btnId) {
  var btn = document.getElementById(btnId);
  var d = document.documentElement;
  var b = document.body;
  window.onscroll = set;
  btn.style.display = "none";
  btn.onclick = function () {
    btn.style.display = "none";
    window.onscroll = null;
    this.timer = setInterval(function () {
      d.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
      b.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
      if ((d.scrollTop + b.scrollTop) == 0) clearInterval(btn.timer, window.onscroll = set);
    }, 10);
  };
  function set() {
    btn.style.display = (d.scrollTop + b.scrollTop > 100) ? 'block' : "none"
  }
}
backTop('goTop');

/**
 * 获取数据类型，返回结果为 Number、String、Object、Array等
 * @param value
 * @returns {string}
 */
export function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1)
}
//getoRawType([]) ==> Array

/**
 * 横线转驼峰命名
 * @type {RegExp}
 */
let camelizeRE = /-(\w)/g;
function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  })
}
//ab-cd-ef ==> abCdEf

/**
 * 驼峰命名转横线命名：拆分字符串，使用 - 相连，并且转换为小写
 * @type {RegExp}
 */
let hyphenateRE = /\B([A-Z])/g;
function hyphenate(str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
}
//abCd ==> ab-cd

/**
 * base64数据导出文件，文件下载
 * @param filename
 * @param data
 */
export function downloadFile(filename, data) {
  let DownloadLink = document.createElement('a');
  if (DownloadLink) {
    document.body.appendChild(DownloadLink);
    DownloadLink.style = 'display: none';
    DownloadLink.download = filename;
    DownloadLink.href = data;
    if (document.createEvent) {
      let DownloadEvt = document.createEvent('MouseEvents');
      DownloadEvt.initEvent('click', true, false);
      DownloadLink.dispatchEvent(DownloadEvt);
    }
    else if (document.createEventObject) {
      DownloadLink.fireEvent('onclick');
    } else if (typeof DownloadLink.onclick == 'function') {
      DownloadLink.onclick();
    }
    document.body.removeChild(DownloadLink);
  }
}


/**
 * 全屏
 */
export function toFullScreen() {
  let elem = document.body;
  elem.webkitRequestFullScreen
    ? elem.webkitRequestFullScreen()
    : elem.mozRequestFullScreen
      ? elem.mozRequestFullScreen()
      : elem.msRequestFullscreen
        ? elem.msRequestFullscreen()
        : elem.requestFullScreen
          ? elem.requestFullScreen()
          : alert("浏览器不支持全屏");
}

/**
 * 退出全屏
 */
export function exitFullscreen() {
  let elem = parent.document;
  elem.webkitCancelFullScreen
    ? elem.webkitCancelFullScreen()
    : elem.mozCancelFullScreen
      ? elem.mozCancelFullScreen()
      : elem.cancelFullScreen
        ? elem.cancelFullScreen()
        : elem.msExitFullscreen
          ? elem.msExitFullscreen()
          : elem.exitFullscreen
            ? elem.exitFullscreen()
            : alert("切换失败,可尝试Esc退出");
}

/**
 * 禁止某些键盘事件
 */
document.addEventListener('keydown', function (event) {
  return !(
    112 == event.keyCode || //F1
    123 == event.keyCode || //F12
    event.ctrlKey && 82 == event.keyCode || //ctrl + R
    event.ctrlKey && 78 == event.keyCode || //ctrl + N
    event.shiftKey && 121 == event.keyCode || //shift + F10
    event.altKey && 115 == event.keyCode || //alt + F4
    "A" == event.srcElement.tagName && event.shiftKey //shift + 点击a标签
  ) || (event.returnValue = false)
});

// 48、禁止右键、选择、复制
['contextmenu', 'selectstart', 'copy'].forEach(function (ev) {
  document.addEventListener(ev, function (event) {
    return event.returnValue = false
  })
});

