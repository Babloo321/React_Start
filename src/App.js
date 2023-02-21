import logo from "./logo.svg";
import "./App.css";
import React, { Component } from 'react'
import Render from "./work/Render";
function App()
{
  const [name, setName] = React.useState("Babloo");
  return(
    <div className='App'>
      <h1>this is function</h1>
      <Render name={name} />
      <button onClick={()=>setName("bikkee")}>Update</button>
    </div>
  );
}
export default App;