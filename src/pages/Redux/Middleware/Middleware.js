import React, { Component } from 'react';

import score from '../../../images/redux-score.jpg';
import next from '../../../images/next.jpg';

export default class Middleware extends Component{
  render() {
    return (
      <React.Fragment>
        <h2>Redux 中间件 </h2>
        <p>强烈推荐 http://www.redux.org.cn/docs/advanced/Middleware.html</p>
        <p>强烈推荐 https://zhuanlan.zhihu.com/purerender/20597452</p>
        <img src={score} />
        <p>Q1：为什么在<code> middleware </code>里使用 <code> next </code>而不是<code> store.dispatch </code></p>
        <img src={next} />
        原因：
        <div className="code-content">
          <p>compose 的实现</p>
          <code>
{`function compose(...funcs) {
  return arg => funcs.reduceRight((composed, f) => f(composed), arg);
}`}
          </code>
          <code>
{`
// f1,f2,f3 为middleware
dispatch = compose(...[f1,f2,f3])(store.dispatch)
               ||
dispatch = f1(f2(f3(store.dispatch))))

// 这里执行 dispatch(action) 相当于下面
f1( f2(f3(store.dispatch))) )(action)
    ||
f1( next )(action)
`}
          </code>
        </div>
        <p>Q2：什么时候在<code> middleware </code>里使用 <code> store.dispatch </code></p>
        <div className="code-content">
          <p>redux-thunk 的实现</p>
          <code>
{`const thunk = store => next => action =>
  typeof action === 'function' ?
    action(store.dispatch, store.getState) :
    next(action)
`}
          </code>
        </div>
      </React.Fragment>
    )
  }
}