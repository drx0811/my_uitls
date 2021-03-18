//  这里主要是通过reffer和host做对比，如果不是当前域，则给一张无用的图片
const fs = require('fs');
const path = require('path');
const url = require('url');
const getHostName = referStr => {
  const { hostname } = url.parse(referStr);
  return hostname
}
const server = require('http').createServer((req, res) => {
  const refer = req.headers['referer'] || req.headers['referrer'];
  // 判断是否又refer，有可能没有refer
  const { pathname } = url.parse(req.url);
  // p代表我们要找的文件
  const p = path.join(__dirname,  '.' + pathname); // 这里是请求文件
  fs.stat(p, err => {
    if (!err) {
      if (refer) {
        // 先看一下refer的值，还要看图片的请求路径
        const referHostName = getHostName(refer);
        const host = req.headers['host'].split(':')[0]
        if (referHostName !== host) {
          // 防盗链
          fs.createReadStream(path.join(__dirname,  '22.jpg')).pipe(res)
        } else {
          // 正常展示
          fs.createReadStream(p).pipe(res)
        }
      } else {
        // 正常展示
        fs.createReadStream(p).pipe(res)
      }
    } else {
      res.end()
    }
  })
}).listen(5000);
// 当服务器错误时调用
server.on('error', err => {
  if (err.code === 'EADDRINUSE') {
    server.listen(++port)
  }
  if (err) console.log(err)
})
// 当服务器关闭时调用
server.on('close', () => {
  console.log('服务端关闭')
})
