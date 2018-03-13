import React, { Component } from "react";
import { Link } from 'react-router-dom';

import LeftMenu from 'components/LeftMenu/LeftMenu';
import getRouter from "../../router/router";

import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="home-container">
        <LeftMenu>
          <h4>React</h4>
          <Link className="level-2" to="/lifecycle">生命周期展示</Link>
          <Link className="level-2" to="/context">context</Link>
          <h4>Redux</h4>
        </LeftMenu>
        <div className="main-content">
          <div className="main-wrapper">
            { getRouter() }
          </div>
        </div>
      </div>
    )
  }
}