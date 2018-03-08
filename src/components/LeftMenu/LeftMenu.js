import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./LeftMenu.scss";

export default class LeftMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main-menu">
        { this.props.children }
      </div>
    );
  }
}
