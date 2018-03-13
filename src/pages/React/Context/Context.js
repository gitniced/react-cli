import React, {Component} from 'react';
import {makeProvider, Post} from 'components/MakeProvider/MakeProvider';

const NewPost = makeProvider({ name: 'Jerry' })(Post)

export default class Mall extends Component {
    constructor(){
        super(...arguments);
    }
    render() {
        return (
            <div>
                <h3>Context</h3>
                <p>某个组件只要往自己的<code> context </code>里面放了某些状态，这个组件之下的所有子组件都直接访问这个状态而不需要通过中间组件的传递。一个组件的<code> context </code><b>只有它的子组件能够访问，它的父组件是不能访问到的</b></p>
                <br/>
                <p>完成高阶组件 makeProvider，接受一个任意类型的数据和组件作为参数：</p>
                <div className="code-content">
                    <code>{`Post = makeProvider({ name:'Jerry' })(Post)`}
                    </code>
                </div>
                <p>Post 下的所有子组件都可以通过 this.context.data 获取到传给 makeProvider 的参数。如上面的 Post 及其子组件的内部可以通过 this.context.data.name 获取到 Jerry。(代码详情见 Component/MakeProvider)</p>
                <NewPost />
                <br/>

                要点：<br/>
                1. 父组件必须定义<code> childContextTypes  </code>, <code> getChildContext </code><br/>
                2.子组件要定义<code> contextTypes </code><br/>
            </div>
        )
    }
}