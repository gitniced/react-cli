import React from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Bundle from "./Bundle";

import Home from "bundle-loader?lazy&name=home!pages/Home/Home";
import Context from "bundle-loader?lazy&name=context!pages/React/Context/Context";
import UserInfo from "bundle-loader?lazy&name=userinfo!pages/UserInfo/UserInfo";
import LifeCycle from "bundle-loader?lazy&name=lifecycle!pages/React/LifeCycle/LifeCycle";

import ReduxBasic from "bundle-loader?lazy&name=redux!pages/Redux/Basic/Basic";
import ReactRedux from "bundle-loader?lazy&name=redux!pages/Redux/ReactRedux/ReactRedux";
import ReduxAchieve from "pages/Redux/Achieve/Achieve";
import Middleware from "pages/Redux/Middleware/Middleware";

const Loading = function() {
  return <div>Loading...</div>;
};

const createComponent = component => props => (
  <Bundle load={component}>
    {Component => (Component ? <Component {...props} /> : <Loading />)}
  </Bundle>
);

const getRouter = () => (
  <Switch>
    <Route exact path="/" component={createComponent(Home)} />
    <Route path="/context" component={createComponent(Context)} />
    <Route path="/userinfo" component={createComponent(UserInfo)} />
    <Route path="/lifecycle" component={createComponent(LifeCycle)} />
    <Route path="/reduxbasic" component={createComponent(ReduxBasic)} />
    <Route path="/reactredux" component={createComponent(ReactRedux)} />
    <Route path="/reduxachieve" component={ReduxAchieve} />
    <Route path="/middleware" component={Middleware} />
  </Switch>
);

export default getRouter;
