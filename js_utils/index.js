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
export const CarryFn=(Vue)=>{
  return class LazyFn{
    constructor(options){
      this.options=options;
    }
  }
}
let carryFn=CarryFn('Vue');
let LazyFn=new LazyFn('options')


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

