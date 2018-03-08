import React, { Component } from 'react';

import Counter from 'components/Counter/Counter';
import './LifeCycle.scss';
import { setTimeout, setInterval } from 'timers';

export default class LifeCycle extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      data: 'receiveProps'
    }
    this.changeProps = this.changeProps.bind(this)
  }
  
  changeProps(){
    this.setState({
      data: 'cess'
    })
  }

  render() {
    return (
      <div className="lifecycle-container">
        <p>一般 React 可能会有一下三个过程</p>
        <ul>
          <li> 装载过程 ( Mount ) : 组件第一次在 DOM 树中渲染的过程</li>
          <li> 更新过程 ( Update ) : 组件被重新渲染的过程</li>
          <li> 卸载过程 ( Unmount ) : 组件从 DOM 中删除的过程</li>
        </ul>
        <hr/> 
        <h5 className="text-primary">装载过程</h5>
        <ul>
          <li> <span className="font-weight-bold">constructor： </span>初始state, 绑定函数this</li>
          <li> <span className="font-weight-bold">getlnitialState：</span> 初始state（React. createClass 方法创造的组件类）</li>
          <li> <span className="font-weight-bold">getDefaultProps：</span> 返回值可以作为 props 的初始值（React. createClass 方法创造的组件类）</li>
          <li> <span className="font-weight-bold">componentWillMount:</span> this.setState 修改状态也不会引发重新绘制</li> 
          <li> <span className="font-weight-bold">render</span></li> 
          <li> <span className="font-weight-bold">componentDidMount:</span> 不是紧跟 render ,在当前页面的所有组件 render 后执行</li> 
        </ul>
        <hr/> 
        <h5 className="text-primary">更新过程</h5>
        <ul>
          <li> <span className="font-weight-bold">componentWillReceiveProps(nextProp)：</span> 只要是父组件的 render 函数被调用，在 render 函数里面被谊染的子组件就会 历更新过程，不管父组件传给子组件的 props 有没有改变</li>
          <li> <span className="font-weight-bold">shouldComponentUpdate(nextProp, nextState)：</span> 如果这个函数返回
true ，那就会继续更新过程，接下来调用 render 函数</li>
          <li> <span className="font-weight-bold">componentWillUpdate：</span></li>
          <li> <span className="font-weight-bold">render</span></li> 
          <li> <span className="font-weight-bold">componentDidUpdate:</span> </li> 
        </ul>
        <br/>
        <h6>
          componentWillReceiveProps：实例
        </h6>
        <p>看控制台输出</p>
        <Counter caption={this.state.data} changeProps={this.changeProps}></Counter>
        <br/>
        <h5 className="text-primary">卸载过程</h5>
        <ul>
          <li> <span className="font-weight-bold">omponentWillUnmount</span> </li>
        </ul>
      </div>
    )
  }

}