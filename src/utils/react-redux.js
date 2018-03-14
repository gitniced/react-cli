import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
  class Connect extends Component{
    static contextTypes = {
      store: PropTypes.object
    }
    // 会将所有的state数据传递到子组件，所以需要一个函数 mapStateToProps 来定义需要传递什么参数
    /* constructor() {
      super(...arguments)
      this.state = {
        props: this.context.store
      }
    } */

    constructor(){
      super(...arguments)
      this.state = {
        allProps: {}
      }
    }

    componentWillMount() {
      const { store } = this.context;
      this._updateProps()
      store.subscribe(() => this._updateProps());
    }

    _updateProps() {
      const { store } = this.context;
      let stateProps = mapStateToProps ? mapStateToProps(store.getState()) : {}
      let dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch) : {}
      
      this.setState({
        allProps: {
          ...stateProps,
          ...dispatchProps,
          ...this.props
        }
      })
    }
    
    render(){
      return <WrappedComponent {...this.state.allProps} />
    }
  }

  return Connect;
} 