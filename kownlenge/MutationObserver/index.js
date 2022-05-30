
let container = document.body;
const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
// 检查浏览器是否支持这个API
if (MutationObserver) {
  const args = arguments[0];
  let mo = new MutationObserver(function () {
    const __wm = document.querySelector('.__wm');
    // 只在__wm元素变动才重新调用
    if ((__wm && __wm.getAttribute('style') !== styleStr) || !__wm || container.style.position !== 'relative') {
      // 避免一直触发
      mo.disconnect();
      mo = null;
      watermark(args);
    }
  });
  mo.observe(container, {
    attributes: true, // 观察目标节点的属性节点
    subtree: true, // 观察目标节点的所有后代节点
    childList: true, // 观察目标节点的子节点
  })
}
