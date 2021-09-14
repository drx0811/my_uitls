### v-for 中设置key属性
vue中更新节点的时候会 从旧的虚拟节点中查找与新节点相同的节点进行更新,添加key可以提高查找的速度;
### v-if 和 v-else 设置key属性;
vue会利用已存在的dom进行高效更新,但是节点的一些属性有可能会保留这就可能带来某些副作用;
### 动态路由  /detail/:id 导致组件不会重新渲染;
由于动态路由所映射的组件是同一个,已经mounted的路由不会重新加载,但是不同的参数要求重新渲染数据;解决方法有二 :
- 路由守护`beforRouteUpdated` 我们可以在这里监听到变化,去执行需要更新的逻辑
- 为`router-view`添加key,简单暴力,但是性能不好
- 设置 `watch` 监听路由 `$route` 这又分为两种形式
- 分别监听 比如 `$route.query.id` 和 `$route.query.page`
- 统一监听 `'$route'(to,from){}`
### 给所有的路由添加统一的query
当我们页面是从上游跳转过来的时候,要求我们添加统一的quey,实现的方案有两种
- 在路由守护中添加,`beforeEach`中判断,缺点是会路由守护函数执行两次;
- 修改vue-router源码,很完美但是很危险;
```js
const query = { id: "1", name: "admin" }; //这是全局需携带的参数
const transitionTo = router.history.transitionTo; // 临时存储底层方法
router.history.transitionTo = function(location, onComplete, onAbort) {
  location =
    typeof location === "object"
      ? {
          ...location,
          query: { ...location.query, ...query }
        }
      : { path: location, query };
  transitionTo.call(router.history, location, onComplete, onAbort);
};
```
