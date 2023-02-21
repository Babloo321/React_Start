import logo from "./logo.svg";
import "./App.css";
import React, { Component } from 'react'

export default class Constructor extends Component {
    constructor() {       // constructor call the at the first
        super();          // this is for Reacct Parent, (component)
        console.warn("this is constructor");
        this.state={
            data:"Babloo"
        }
    }
  render() {
    console.warn("this is render")
    return (
      <div><h1>Constructor</h1><br />
        {this.state.data}<br />
        <h1>Good evening</h1>
      </div>
    );
  }
}