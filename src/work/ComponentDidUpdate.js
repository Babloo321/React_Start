import logo from "./logo.svg";
import "./App.css";
import React, {Component} from 'react';
export default class ComponentDidUpdate extends React.Component
{
  constructor() {
    super();
    this.state={
      // name:"Babloo"
      count: 0
      
    }
    console.warn("constructor")
  }
  componentDidUpdate(prvProps, prevState, snapshot) {
    
   
      console.warn("ComponentDidUpdate", prevState.count, this.state.count)
      if(this.state.count < 10){
        this.setState({count:this.state.count+1})
      } else if(this.state.count === 11){
        alert("Stop you Eter Maximum number")
      }
  }
  render() {
    console.warn("render")
    return(
      <div className='ComponentDidUpdate'>
        <h1>Component Did Update<br />{this.state.count}</h1>
        {/* <button onClick={()=>{this.setState({name:"Bikkee"})}}>Update State</button> */}
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Valued</button>
        
      </div>
    )
  }
}