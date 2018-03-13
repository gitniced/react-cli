import React, { Component } from 'react';
const PropTypes = require('prop-types');

export const makeProvider = (data) => ( NewComponent ) => {
  class GetContext extends Component {
    // 验证getChildContext
    static childContextTypes = {
      data: PropTypes.object
    }

    constructor() {
      super()
      this.state ={
        data: data
      }
      this.handleContentChange = this.handleContentChange.bind(this);
    }

    // 设置context
    getChildContext () {
      return {data: this.state.data}
    }

    handleContentChange(e){
      this.setState({
        data: {
          name: e.target.value
        }
      })
    }

    render(){
      return <React.Fragment>
        <input value={this.state.data.name} onChange={this.handleContentChange}/>
        <NewComponent />
      </React.Fragment>
    }
  }

  return GetContext
}

export function Post(){
  return (
    <div>
      <Title />
    </div>
  )
}

class Title extends Component {
  // 验证需要获取的状态的类型
  static contextTypes = {
    data: PropTypes.object
  }
  render () {
    return (
      <h1 >Hello, { this.context.data.name }</h1>
    )
  }
}

