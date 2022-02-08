let http = require('http')
let server = http.createServer(function(req,res){
  if(req.url === '/'){
    res.end('222')
  }
})
server.listen(3000,function(){
  console.log('正在运行');
})

