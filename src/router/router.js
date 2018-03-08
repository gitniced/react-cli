import React from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Bundle from "./Bundle";

import Home from "bundle-loader?lazy&name=home!pages/Home/Home";
import Mall from "bundle-loader?lazy&name=mall!pages/Mall/Mall";
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
    <Route exact path="/mall" component={createComponent(Mall)} />
    <Route path="/userinfo" component={createComponent(UserInfo)} />
    <Route path="/lifecycle" component={createComponent(LifeCycle)} />
  </Switch>
);

export default getRouter;
