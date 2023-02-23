import logo from "./logo.svg";
import "./App.css";
import React, {Component} from 'react';

class shouldComponentUpdate extends React.Component {
  constructor() {
    super();
    this.state= {
      count: 0
    }
  }
shouldComponentUpdate()
{
  console.warn("shouldComponentUpdate", this.state.count);
  
  return true;
}
render()
{
  return(
    <div className = 'App'>
      <h1>should Component Udate {this.state.count}</h1>
      <button onClick={()=>this.setState({count: this.state.count + 1})}>Update State</button>
    </div>
  );
}
}
export default shouldComponentUpdate;