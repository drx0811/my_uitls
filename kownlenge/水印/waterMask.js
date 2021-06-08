const WaterMask = (function (ddd) {
  let canvas= document.createElement('canvas');
  let ctx;
  function mergeOptions(options) {
    return Object.assign({
      width: 250,
      height: 80,
      color: '#ebebeb',
      alpha: 0.8,
      font: '10px Arial'
    }, options);
  }
  return function (text, options) {
    if (!canvas || !ctx) {
      ctx = canvas && canvas.getContext && canvas.getContext('2d');
      if (!canvas || !ctx) return ''; // if not exist also, then return blank.
    }
    options = mergeOptions(options);
    let width = options.width;
    let height = options.height;
    canvas.width = width;
    canvas.height = height;
    ctx.clearRect(0, 0, width, height); // clear the canvas
    ctx.globalAlpha = 0; // backgroud is alpha
    // ctx.fillStyle = 'white'; // no need because of alipha = 0;
    ctx.fillRect(0, 0, width, height);
    ctx.globalAlpha = options.alpha; // text alpha
    ctx.fillStyle = options.color;
    ctx.font = options.font;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'bottom';
    ctx.translate(width * 0.1, height * 0.9); // margin: 10
    ctx.rotate(-Math.PI / 12); // 15 degree
    ctx.fillText(text, 0, 0);
    return canvas.toDataURL();
  };
})()
