import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';
import { connect } from '../../utils/react-redux';

class Content extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor () {
    super()
    this.state = { themeColor: '' }
  }

  componentWillMount () {
    const { store } = this.context;
    this._updateTheme()
    store.subscribe(() => this._updateTheme())
  }

  _updateTheme () {
    const { store } = this.context;
    const state = store.getState()
    this.setState({
      themeColor: state.themeColor
    })
  }

  render () {
    return (
      <div>
        <p style={{ color: this.state.themeColor }}>测试内容</p>
        <ThemeSwitch />
      </div>
    )
  }
}

class ThemeSwitch extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor () {
    super()
    this.state = { themeColor: '' }
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme(e) {
    const {color} = e.target.dataset;
    const {store} = this.context;
    store.dispatch({
      type: 'CHANGE_COLOR',
      themeColor: color
    })
  }

  render () {
    return (
      <div>
        <button type="button" className="btn btn-danger mr-2" data-color="red" onClick={this.props.changeTheme}>Red</button> 
        <button type="button" className="btn btn-primary" data-color="blue" onClick={this.changeTheme}>Blue</button>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeTheme: (e) => {
      const {color} = e.target.dataset;
      dispatch({
        type: 'CHANGE_COLOR',
        themeColor: color
      })
    }
  }
}

ThemeSwitch = connect(() => {}, mapDispatchToProps)(ThemeSwitch);

class Header extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  render () {
    return (
      <h1 style={{ color: this.props.themeColor }}>测试</h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}

Header = connect(mapStateToProps)(Header);

export {
  Content,
  Header
}