import React, { Component } from 'react';
import { Content, Header} from 'components/ThemeSwitch/ThemeSwitch';
import PropType from 'prop-types'

function createStore(reducer){
  let state = null;
  let listeners = [];
  const getState = () => state;
  const subscribe = (listener) => listeners.push(listener);
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach( listener => listener())
  }
  dispatch({})
  return { getState, dispatch, subscribe}
}

function themeReducer(state, action){
  if(!state){
    return { themeColor: 'red' }
  }

  switch (action.type){
    case 'CHANGE_COLOR':
      return {
        ...state,
        themeColor: action.themeColor
      }
    default:
      return state;
  }
}

const store = createStore(themeReducer)

export default class ReactRedux extends Component{
  static childContextTypes = {
    store: PropType.object
  }

  getChildContext() {
    return { store }
  }

  render(){
    return (
      <React.Fragment>
        <p>react-redux 的实现就是讲<code> context </code>和<code> redux </code>结合起来使用</p>
        <p>例（代码参考ReactRedux）</p>
        <div className="code-content">
          <Header /> 
          <Content />
        </div>
        <b>在代码实现中发现代码存在重复逻辑且无法复用(必须要有context)</b>
        <p>解决方法</p>
        <p>写一个高阶组件，讲重复逻辑抽离出来通过<code> props </code>传递信息</p>
        <div className="code-content">
          <code>
{`export const connect = (mapStateToProps) => (WrappedComponent) => {
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
      store.subscribe(() => this._updateProps()); //需要bind this指向
    }

    _updateProps() {
      const { store } = this.context;
      let stateProps = mapStateToProps(store.getState())
      this.setState({
        allProps: {
          ...stateProps,
          ...this.props
        }
      })
    }
    
    render(){
      return <WrappedComponent {...this.state.allProps} />
    }
  }

  return Connect;
}  `}
          </code>
        </div>
        <b>这里实现了<code> store </code>的数据获取和更新，但是<code> dispatch </code>还没有抽离</b>
        <p>这里引入 <code> mapDispatchToProps </code>作为 connect 的第二个参数</p>
        <div className="code-content">
          <code>
{`_updateProps() {
  const { store } = this.context;
  let stateProps = mapStateToProps ? mapStateToProps(store.getState()) : {}
  let dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch) : {}
  this.setState({
    allProps: {
      ...stateProps,
      ...dispatchProps,
      ...this.props,
    }
  })
}`}
          </code>
        </div>
        <p>（可以查看代码 ThemeSwitch 比较）</p>
        <b>用了<code> connect </code>把 context 从子组件中抽离，但父组件还没有抽离</b>
        <p>我们可以额外构建一个组件来做这种脏活，然后让这个组件成为组件树的根节点，那么它的子组件都可以获取到 context 了</p>
        <div className="code-content">
          <code>
{`export class Provider extends Component {
  static propTypes = {
    store: PropTypes.object,
    children: PropTypes.any
  }

  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext () {
    return {
      store: this.props.store
    }
  }

  render () {
    return (
      <div>{this.props.children}</div>
    )
  }
}`}
          </code>
        </div>
      </React.Fragment>
    )
  }
}