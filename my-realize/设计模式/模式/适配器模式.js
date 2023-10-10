// 适配器模式 ：
// 一般用于对接第三方接口，但是各种第三方接口的规格并不相同，那么我们就需要 给第三方一个
// 适配器，在适配器内部 再调用第三方提供的方法；这样可以避免  在调用的时候 写太多的ifelse
const googleMap={
  name:'谷歌地图',
  show:function(){
    console.log('打开了谷歌地图');
  }
}
const baiduMap={
  name:'百度地图',
  display:function(){
    console.log('百度地图打开了');
  }
}
function renderMap(instanceMap){
  if (instanceMap.show) {
    instanceMap.show();
  }else{
    console.log(`${instanceMap.name}没有该方法`)
  }
}
// renderMap(googleMap);
// renderMap(baiduMap);

// 给百度地图添加适配器------原理就是在在内部再次调用原先的百度地图的方法
const baiduMapAdapt={
  show:function(){
    baiduMap.display();
  }
}
renderMap(googleMap);
renderMap(baiduMapAdapt);
