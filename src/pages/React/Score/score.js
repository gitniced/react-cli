import React, { Component } from 'react';

export default class Score extends Component{

  render(){
    return (
      <div>test</div>
    )
  }
}

function NoState(){
  return <div>
    ee
  </div>
}

console.log(<Score><div>a</div><h1>2</h1></Score>)
console.log(<NoState/>)