### File对象继承自Blob对象
```html
<img id="imagePreview">
<input id="imageSelector" type="file" accept=".png,.jpg,.jpeg,.gif">
```
```js
const imageSelector = document.getElementById('imageSelector');
imageSelector.addEventListener('change', (event) => {
  const file = event.target.files[0];
  console.log(file instanceof Blob);
  // URL.createObjectURL(file) 可以把file对象转换成 URL并加载到图片中去 来实现预览
});
```
### 现在浏览器支持ES Modules，使用Blob可以方便地实现通过代码来动态创建模块
```html
<script type="module">
function importCode(code) {
  const blob = new Blob([code], {type: "text/javascript"});
  const script = document.createElement('script');
  document.body.appendChild(script);
  script.setAttribute('type', 'module');
  script.src = URL.createObjectURL(blob);
  return import(script.src);
}

const code = `
  export default {
    foo: 'bar',
  }
`;

importCode(code).then((m) => {
  console.log(m.default); // {foo: 'bar'}
});
</script>
```
### canvas 可转 Blob
URL.createObjectURL(toBlob);
生成的 URL 仅在当前文档打开的状态下才有效。但如果你访问的 Blob URL 不再存在，则会从浏览器中收到 404 错误。映射在文档卸载时自动清除，因此 Blob 对象随后被释放,我们可以手动去卸载
URL.revokeObjectURL(url)
```js
canvas.toBlob((blob) => {
  const image = new Image();
  image.width = width;
  image.height = height;
  document.body.append(image);
  image.src = URL.createObjectURL(blob);
});
```


