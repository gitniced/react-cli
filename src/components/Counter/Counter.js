import React, { Component } from "react";
import { increment, decrement, reset } from "../../actions/counter";

import { connect } from "react-redux";

class Counter extends Component {
  constructor(){
      super(...arguments);
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log('%c enter componentWillReceiveProps: ' + this.props.caption + ' nextProp: ' + nextProps.caption, 'color: #28a745');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log(`%c enter shouldComponentUpdate, nextProp: ${nextProps.caption}, nextState: ${nextState.count}`, 'color: #28a745');
    return (nextProps.caption !== this.props.caption) || (nextState.count !==this.state.count); 
}

  render() {
    console.log('%c enter render', 'color: #28a745');    
    return (
      <div>
        <div>当前计数为{this.state.count}</div>
        <button className="btn btn-light" onClick={() => this.increment()}>自增</button>
        <button className="btn btn-light" onClick={ () => this.props.changeProps() }>
          Click me to set props!
        </button>
      </div>
    );
  }

  increment() {
    this.setState({
        count: this.state.count + 1
    })
  }
}

export default Counter;
