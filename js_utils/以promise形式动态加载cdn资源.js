/**
 * 方案中解决了ie的老版本中没有onload事件的兼容性问题,
 * 同时也利用发布订阅模式解决了可能加载多个cdn资源的问题;
 * @type {*[]}
 */
let callbacks = []
function loadedTinymce() {
  return window.tinymce
}

const dynamicLoadScript = (src, callback) => {
  const existingScript = document.getElementById(src)
  const cb = callback || function() {}
  if (!existingScript) {
    const script = document.createElement('script')
    script.src = src // src url for the third-party library being loaded.
    script.id = src
    document.body.appendChild(script)
    callbacks.push(cb)
    stdOnEnd()
  }

  if (existingScript && cb) {
    if (loadedTinymce()) {
      cb(null, existingScript)
    } else {
      callbacks.push(cb)
    }
  }

  function stdOnEnd(script) {
    script.onload = function() {
      this.onerror = this.onload = null
      for (const cb of callbacks) {
        cb(null, script)
      }
      callbacks = null
    }
    script.onerror = function() {
      this.onerror = this.onload = null
      cb(new Error('Failed to load ' + src), script)
    }
  }
}

export default dynamicLoadScript
