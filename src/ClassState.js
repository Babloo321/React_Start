import React, { Component } from 'react'

export default class extends Component {
  constructor(){
    super();
    this.state={
      data:"babloo"
    }
  }
  apple(){
    this.setState({data:"kumar"})
  }
  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
        <button onClick={()=>apple()}>Update Data</button>
      </div>
    )
  }
}
