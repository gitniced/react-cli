# 从零开始搭建 react 全家桶

## Webpack 
最基本的配置包含入口 entry ， 输出 output

module 包含 rules 数组，数组的每一项即为一个loader（让 webpack 能够去处理那些非 JavaScript 文件，将所有类型的文件转换为 webpack 能够处理的有效模块）

 * test 属性，用于标识出应该被对应的 
loader 进行转换的某个或某些文件。
 * use 属性，表示进行转换时，应该使用哪个 loader。

 ### webpack-dev-server

* 需要注意版本问题
* CLI ONLY的需要在命令行中配置


## Babel

Q: 关于 stage-0, stage-1, stage-2, stage-3

A: 是对ES7一些提案的支持, stage-0包含stage-1, stage-2以及stage-3的所有功能, 同理向下包含 ( stage-2 包含对象解耦，stage-3 包含<code> async </code>和<code> await </code>)


## React
<code>React</code> 将组件渲染，并且构造 DOM 元素然后塞入页面的过程称为组件的挂载.
详情见代码 lifecycle 


## React-router