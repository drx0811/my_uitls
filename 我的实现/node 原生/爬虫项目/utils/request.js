let request = require("request");
function promiseRequest(options){
  const op={
    url: "",
    method: "GET",
    encoding: null,
    header: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36",
      Referer: "https://www.meituri.com"
    },
    ...options
  };
  return new Promise((resolve,reject)=>{
    request(op,(err,response,body)=>{
      if (err) {
        reject(err)
      }
      if (response && response.statusCode === 200) {
        resolve(body)
      }else {
        reject('请求错误')
      }
    })
  })
}
module.exports=promiseRequest