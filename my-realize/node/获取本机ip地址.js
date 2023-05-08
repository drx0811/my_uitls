/**
 * node版本不同,获取的方式有变化,本例是14版本之后的方法
 */
const os = require('os');
function getIpAddress() {
  let ifaces = os.networkInterfaces()
  for (let dev in ifaces) {
    let iface = ifaces[dev]
    for (let i = 0; i < iface.length; i++) {
      let { family, address, internal } = iface[i]
      if (family === 'IPv4' && address !== '127.0.0.1' && !internal) {
        return address
      }
    }
  }
}
console.log(getIpAddress())
