const promiseRequest=require('./utils/request');
const cheerio=require('cheerio');
const fs =require('fs');
const path=require('path');
promiseRequest({url:'https://www.baidu.com/'}).then(res=>{
  let html=res.toString();
  const $=cheerio.load(html);
  const ww=fs.createWriteStream(path.resolve(__dirname,'drx.txt'));
  $('a').each(function (index,item) {
    ww.write($(item).attr('href')+'\r\n','utf-8');
  });
  ww.end();
  ww.on('finish', function() {
    console.log("写入完成。");
  });
})