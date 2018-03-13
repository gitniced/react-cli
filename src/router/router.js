import React from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Bundle from "./Bundle";

import Home from "bundle-loader?lazy&name=home!pages/Home/Home";
import Context from "bundle-loader?lazy&name=context!pages/Context/Context";
import UserInfo from "bundle-loader?lazy&name=userinfo!pages/UserInfo/UserInfo";
import LifeCycle from "bundle-loader?lazy&name=lifecycle!pages/LifeCycle/LifeCycle";
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
  </Switch>
);

export default getRouter;
