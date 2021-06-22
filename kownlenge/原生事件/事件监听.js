/**
 * 监听css事件
 * @param e
 * // 监听 CSS 完成过渡后 的事件
 */
function 监听css事件() {
  function myFunction(e) {
    if (e.propertyName === 'width') {
      // 当宽度变化的时候触发到这里
    }
  }
  document.getElementById("myDIV").addEventListener("transitionend", myFunction);
}
