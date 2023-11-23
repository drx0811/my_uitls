

/*
*
* concurrent rendering;
* v16/17 中的concurrent mode变为了 v18中的 concurrent rendering
* 由模式改为了特性,默认不开启,就不会有breaking Change;
*
*18 新增 ReactDOM.createRoot 使用该方法将启用18的全部新特性;如果还用ReactDOM.render那么和17完全一致;
* 1.flushSync  18默认调用几次setState就会渲染几次,除非在定时器,或者promise中
* 2.transition 降低优先级,比如输入框 输入后立即渲染列表,会导致输入框卡顿,我们使用 startTransition 函数包裹可以降低
* const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
    startTransition(() => {
      setLiLen(e.currentTarget.value.length);
    });
  }
* 3. useDeferredValue 接收一个值并返回该值的新副本
  * useDeferredValue 只延迟传递给它的值。如果要防止子组件在紧急更新期间重新渲染，还必须使用 useMemo 来记录值。
  * const liLen = useDeferredValue(text.length);
    const longtime = useMemo(() => <Longtime liLen={liLen} />, [liLen]);
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
* */