import React, { Component } from 'react';

export default class Achieve extends Component {
  render(){
    return (
      <React.Fragment>
        <p>实现 Redux 的一些记录</p>

        Redux是如何做到可预测呢？
        <p>所有的数据修改必须通过<code> dispatch </code>，这样可以在<code> dispatch </code>中进行调试</p>
        <b>
          延伸出思考，如何将其抽象出来
        </b>
        <p>
          定义一个<code> createStore </code>,创建一个<code> Store </code>
        </p>
        <div className="code-content">
          <code>
{`function createStore (state, stateChanger) {
    const getState = () => state
    const dispatch = (action) => stateChanger(state, action)
    return { getState, dispatch }
}`}
          </code>
        </div>
        <b>数据修改了，如何使 view 层进行同步修改</b>
        <p>用一种通用的方式“监听”数据变化，然后重新渲染页面，这里要用到观察者模式</p>
        <div className="code-content">
          <code>
{`  function createStore (state, stateChanger) {
+   const listeners = []
+   const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
      stateChanger(state, action)
+     listeners.forEach((listener) => listener())
    }
    return { getState, dispatch, subscribe }
  }`}
          </code>
        </div>
        <p>通过<code> subscribe </code>传入需要在“监听”到数据变换后执行的函数，例：view更新</p>
        <b>这里有多余的性能消耗，当修改<code> store </code>的部分数据，会导致所有依赖<code> store </code>的 view 更新</b>
        <p>解决方法：</p>
        <p>在<code> listener </code>中比较<code> state </code>是否发生改变</p>
        <p>这里涉及到对象的比较，对象是引用类型 所以比较不出来，需要在 <code> stateChanger </code>返回新的<code> state </code>进行比较</p>
        <div className="code-content">
          <code>
{`  function createStore (state, stateChanger) {
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
+     state = stateChanger(state, action)
      listeners.forEach((listener) => listener())
    }
    return { getState, dispatch, subscribe }
  }
  

  function stateChanger (state, action) {
    switch (action.type) {
      case 'UPDATE_TITLE_TEXT':
        return { // 构建新的对象并且返回
          ...state,
          title: {
            ...state.title,
            text: action.text
          }
        }
      default:
        return state // 没有修改，返回原来的对象
    }
  }
  `}
          </code>
        </div>
        <b>这就基本实现了<code> redux </code></b>
        <p>至于<code> reducer </code>就是<code> state </code>和<code> stateChanger </code>的合并，并且规定<code> reducer </code>是个纯函数</p>
        <div className="code-content">
          <code>
{`  function createStore (reducer) {
+   let state = null
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
+     state = reducer(state, action)
      listeners.forEach((listener) => listener())
    }
+   dispatch({}) // 初始化 state
    return { getState, dispatch, subscribe }
  }`}
          </code>
        </div>
      </React.Fragment>
    )
  }
}