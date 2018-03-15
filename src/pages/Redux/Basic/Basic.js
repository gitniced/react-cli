import React, { Component } from 'react';

export default class Basic extends Component{
  render(){
    return (
      <React.Fragment>
        <h3> Redux 的概念</h3>
        <b>Action:</b>
        <p>它是 store 数据的唯一来源, 本质上是 JavaScript 普通对象,action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作</p>
        <b>Action 创建函数：</b>
        <p>就是生成 action 的方法， 这样做将使 action 创建函数更容易被复用和测试</p>
        <b>Reducer:</b>
        <p>就是一个纯函数，接收旧的<code> state </code>和<code> action</code>，返回新的 state。</p>
        <p>保持 Redux 的纯净，永远不要在<code> reducer </code>里做这些操作：</p>
        <ul>
          <li>修改传入参数；</li>
          <li>执行有副作用的操作，如 API 请求和路由跳转；</li>
          <li>调用非纯函数，如 Date.now() 或 Math.random()。</li>
        </ul><br/>
        <p>Redux 提供了 combineReducers() 工具类来合并<code> reducer </code>,每个<code> reducer </code>只负责管理全局 state 中它负责的一部分。每个<code> reducer </code>的<code> state </code>参数都不同，分别对应它管理的那部分<code> state </code>数据。</p>
        <div className="code-content">
          <code>
{`const todoApp = combineReducers({
  visibilityFilter,
  todos
})`}
          </code>
        </div>
        <p>这里的会自动执行，获取初始<code> state </code>的结构,类似下面的<code> state </code></p>
        <div className="code-content">
          <code>
{`state = {
  visibilityFilter： visibilityFilter.state,
  todos： todos.state
})`}
          </code>
        </div>
        <b>Store</b>
        <p><code> Redux </code>应用只有一个单一的<code> store </code></p>
        <p>有以下职责：</p>
        <ul>
          <li>维持应用的 state；</li>
          <li>提供 getState() 方法获取 state；</li>
          <li>提供 dispatch(action) 方法更新 state；</li>
          <li>通过 subscribe(listener) 注册监听器;</li>
          <li>通过 subscribe(listener) 返回的函数注销监听器。</li>
        </ul><br/>
        <b>Redux 数据流</b>
        <ul>
          <li>调用 store.dispatch(action)</li>
          <li>Redux store 调用传入的 reducer 函数。</li>
          <li>根 reducer 应该把多个子 reducer 输出合并成一个单一的 state 树。</li>
          <li>Redux store 保存了根 reducer 返回的完整 state 树。</li>
        </ul><br/>
      </React.Fragment>
    )
  }
}