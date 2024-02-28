// 默认属性值
const attributes = {
  delay: {
    default: 200
  },
  disabled: {
    default: false,
  },
  distance: {
    default: 10
  },
  immediate: {
    default: true
  },
};

/**
 * 获得最靠近的含有overflow样式的父元素； 通过递归的方式  主要涉及到
 * 1. parentNode; dom的父级
 * 2. getComputedStyle(dom); dom上面的所有的样式；
 * @param el
 * @returns {(() => (Node | null))|ActiveX.IXMLDOMNode|(Node & ParentNode)|Window}
 */
const getScrollContainer = (el) => {
  let parent = el;
  while (parent) {
    if (document.documentElement === parent) {
      return window
    }
    const overflow = getComputedStyle(parent)['overflow'];
    if (overflow === 'auto') {
      return parent
    }
    parent = parent.parentNode;
  }
};
/**
 * 整理所有的样式；reduce
 * 1. reduce 设定第一个参数，标识最终要形成的数据；
 * @param el
 * @param vm
 * @returns {[string, any] | *}
 */
const getScrollOptions = (el, vm) => {
  return Object.entries(attributes).reduce((map, [key, options]) => {
    let detaultValue = options.default;
    let value = el.getAttribute(`infinite-scroll-${key}`);
    map[key] = vm[value] ? vm[value] : detaultValue;
    return map
  }, {});
};
/**
 * 节流函数
 * @param fn
 * @param delay
 * @returns {function(...[*]=)}
 */
const throttle = (fn, delay) => {
  let flag;
  return () => {
    if (!flag) {
      flag = setTimeout(() => {
        fn();
        flag = null;
      }, delay);
    }
  }
};

const scrollKey = 'scrollKey';

/**
 * 处理滚动事件
 * @param cb
 * @returns {boolean}
 */
function handleScroll(cb) {// 如果是箭头函数，那么就没有this了；因为箭头函数没有this；
  const { container, vm } = this[scrollKey];
  const { disabled, distance } = getScrollOptions(container, vm);
  if (disabled) {
    return false
  }
  let scrollBottom = container.clientHeight + container.scrollTop;
  if (container.scrollHeight - scrollBottom <= distance) {
    cb();
  }
}
export default {
  name: "infinite-scroll",
  inserted(el, binds, vnode) {
    const cb = binds.value;
    const vm = vnode.context;
    // 1.先获取要滚动的元素，如果没有元素则直接结束；
    const container = getScrollContainer(el);
    el[scrollKey] = {// 将属性挂载到dom对象上，以方便取消监听的时候使用；
      onscroll,
      container,
      vm,
    }
    if (container !== window) {
      let { delay, immediate } = getScrollOptions(el, vm);
      let onScroll = throttle(handleScroll.bind(el, cb), delay);
      if (immediate) {
        const observer = new MutationObserver(onScroll);
        observer.observe(container, {
          childList: true,// 监控列表的变化
          subtree: true,// 当子dom发生拜年话也触发；
        })
        onScroll();
      }
      container.addEventListener('scroll', onScroll);
    }
  },
  unbind(el) {
    const { onscroll, container } = el[scrollKey];
    if (container) {
      container.removeEventListener('scroll', onscroll);
      el[scrollKey] = null;
    }
  }
}
