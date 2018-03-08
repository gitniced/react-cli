import React, { Component } from "react";
import { Link } from 'react-router-dom';

import LeftMenu from 'components/LeftMenu/LeftMenu';
import getRouter from "../../router/router";

import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="home-container row">
        <LeftMenu>
          <ul>
            <li><Link to="/lifecycle">生命周期展示</Link></li>
          </ul>
        </LeftMenu>
        <div className="main-content">
          { getRouter() }
        </div>
      </div>
    )
  }
}