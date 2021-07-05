### 路由守护
> 众所周知react-router并没有路由守护的专门api,但是强大的react如何去实现一个类似的路由守护的功能呢?

答案是 `高阶组件` react实现路由守卫组要是对路由进行高阶组件的封装,进而对url进行匹配,if判断各种情况,跳转到相应的页面

- 定义高阶组件
```jsx
import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
class FrontendAuth extends Component {
  render() {
    const { routerConfig, location } = this.props;
    const { pathname } = location;
    const isLogin = sessionStorage.getItem("token");
    const targetRouterConfig = routerConfig.find(
      (item) => {
        return item.path.replace(/\s*/g,"") === pathname
      }
    );
    if (targetRouterConfig && !targetRouterConfig.auth && !isLogin) {
      const { component } = targetRouterConfig;
      return <Route exact path={pathname} component={component} />
    }
    if (isLogin) {
      // 如果是登陆状态，想要跳转到登陆，重定向到主页
      if (pathname === "/login") {
        return <Redirect to="/" />;
      } else {
        // 如果路由合法，就跳转到相应的路由
        if (targetRouterConfig) {
          return (<Route path={pathname} component={targetRouterConfig.component} />);
        } else {
          // 如果路由不合法，重定向到 404 页面
          return <Redirect to="/404" />;
        }
      }
    } else {
      // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
      if (targetRouterConfig && targetRouterConfig.auth) {
        console.log('跳转登录登录')
        return <Redirect to="/login" />;
      } else {
        // 非登陆状态下，路由不合法时，重定向至 404
        return <Redirect to="/404" />;
      }
    }
  }
}
export default FrontendAuth;
```
- 使用高阶组件
```jsx
import React from 'react';
import {Switch, BrowserRouter} from 'react-router-dom'
import FrontendAuth from './FrontendAuth'
import {routerObj} from '../views/index'
function router() {
  return (
    <BrowserRouter>
      <Switch>
        <FrontendAuth routerConfig={routerObj} />
      </Switch>
    </BrowserRouter>
  );
}

export default router;
```
