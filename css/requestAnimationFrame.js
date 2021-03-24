var e = document.getElementById("e");
  var flag = true;
  var left = 0;

  function render() {
    if(flag == true){
      if(left>=100){
        flag = false
      }
      e.style.left = ` ${left++}px`
    }else{
      if(left<=0){
        flag = true
      }
      e.style.left = ` ${left--}px`
    }
  }

  /*
  1、requestAnimationFrame 会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，
      并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，一般来说，这个频率为每秒60帧。
  2、在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，
      这当然就意味着更少的的cpu，gpu和内存使用量。
  3、停止requestAnimationFrame？
      cancelAnimationFrame()接收一个参数 requestAnimationFrame默认返回一个id，
      cancelAnimationFrame只需要传入这个id就可以停止了。
  */
  function animloop() {
    render();
    window.requestAnimationFrame(animloop);
  }
  animloop();



/*

  setInterval(function(){
    render()
  },1000/60)
  */
//使用定时器之所以是 1000/60 是因为 大多数屏幕每秒是60帧；
