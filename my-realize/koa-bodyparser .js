function body() {
  return async (ctx,next)=>{
    await new Promise((resolve,reject)=>{
      const arr=[];
      ctx.req.on('data',function (thunk) {
        arr.push(thunk);
      });
      ctx.req.on('end',function () {
        ctx.request.body= Buffer.concat(arr).toString();
        resolve();
      })
    })
    await next();
  }
}
module.exports=body;
