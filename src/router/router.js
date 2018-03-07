import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Bundle from './Bundle';

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Mall from 'bundle-loader?lazy&name=mall!pages/Mall/Mall';
import UserInfo from 'bundle-loader?lazy&name=userinfo!pages/UserInfo/UserInfo';

const Loading = function () {
    return <div>Loading...</div>
};

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);


const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/home">首页</Link></li>
                <li><Link to="/mall">Mall</Link></li>
                <li><Link to="/userinfo">UserInfo</Link></li>
            </ul>
            <Switch>
                <Route exact path="/home" component={createComponent(Home)}/>
                <Route path="/mall" component={createComponent(Mall)}/>
                <Route path="/userinfo" component={createComponent(UserInfo)}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;