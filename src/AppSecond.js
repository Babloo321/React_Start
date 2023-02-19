
{/* // conditonal rendering if condition
// import logo from "./logo.svg";
// import "./App.css";
// import Profile from "./Profile";
// import React from "react";
// import { useState } from "react";
// function App() { */}
{/* //   return (
//     <div className="App">
//       <Profile />
//     </div>
//   );
// } */}
// export default App;

// Handle form/checkbox/input field/ select
// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import { useState } from 'react';
// function App()
// {
//   const [name, setName] = useState("");
//   const [tnc, setTnc] = useState(false);
//   const [interest, setInterest] = useState("");
//   function getFormData(e)
//   {
//     console.warn(name, tnc, interest);
//     e.preventDefault();
//   }
//   return(
//     <div className="App">
//     <h1>Form in React</h1>
//     <form onSubmit={getFormData}>
//       <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}></input><br/><br/>
//       <select onChange={(e)=>setInterest(e.target.value)}>
//         <option>Select Option</option>
//         <option>Marvel</option>
//         <option>DC</option>
//         <option>SciiFii</option>
//         <option>Start War</option>
//       </select><br/><br/>
//       <input type="checkbox"  onChange={(e)=>setTnc(e.target.checked)}/>
//       <span>Accept terms and condition</span>
//     </form>
//     <br/><br/>
//     <button type="submit">Submit</button>
//     </div>
//   );
// }
// export default App;
// export default App;
// hide and show element
{
    /*import logo from './logo.svg';
  import './App.css';
  import React,{useState} from 'react'
  function App()
  {
    const [status, setStatus] = useState(false)
    return(
      <div className="App">
        {
        status?
        // <input type="text" placeholder="message"></input>
        <h1>Hello React</h1>
        :null
        }
        <button onClick={()=>setStatus(false)}>Hide</button>
        <button onClick={()=>setStatus(true)}>Show</button> */
  }
  
  //       <button onClick={()=>setStatus(!status)}>Toggle</button>
  //     </div>
  //   );
  // }
  // export default App;
  
  //get input text value
  // import logo from './logo.svg';
  // import './App.css';
  // import React from 'react'
  // import {useState} from 'react'
  // function App()
  // {
  //   const [data, setData] = useState(null)
  //   const [print, setPrint] = useState(false)
  //   function getData(val){
  //     setData(val.target.value)
  //     setPrint(false)
  //   }
  //   return(
  //     <div className="App">
  //       {
  //         print?
  //       <h2>{data}</h2>
  //       :null
  //       }
  //       <input type="text" placeholder="message" onChange={getData}></input>
  //       <button onClick={()=>setPrint(true)}>Send</button>
  //     </div>
  //   );
  // }
  // export default App;
  
  // import React, {Component} from 'react'
  // import logo from './logo.svg';
  // import './App.css';
  // import Student from './Student'
  // import { useState } from 'react';
  // function App(){
  //   const [data, setdata] = useState("Babloo")
  //   function updateData()
  //   {
  //     setdata("bikkeee")
  //   }
  //   return(
  //     <div className='App'>
  //       <h1>{data}</h1>
  //       <button onClick={updateData}>Click Me</button>
  //     </div>
  //   );
  // }
  
  // using class component
  // import React, {Component} from 'react'
  // import logo from './logo.svg';
  // import './App.css';
  // import Student from './Student';
  // class App extends React.Component
  // {
  //   constructor()
  //   {
  //     super();
  //     this.state={
  //       name:"babloo"
  //     }
  //   }
  //   render()
  //   {
  //     return(
  //       <div className='App'>
  //         <h1>Hello React</h1>
  //         <Student name={this.state.name} email="babloocse888@gmail.com"></Student>
  //       <button onClick={()=>this.setState({name:"bikkee"})}>Update Me</button>
  //       </div>
  //     );
  //   }
  // }
  // export default App;
  
  // import React from 'react'
  // import logo from './logo.svg';
  // import './App.css';
  // import Student from './Student';
  // function App()
  // {
  //   return(
  //     <div>
  //       <h1>Hello React</h1>
  //       <Student name="Babloo Kumar" email="babloocse888@gmail.com"/>
  //       <Student name="Babloo Kumar" email="babloocse888@gmail.com"/>
  //       <Student name="Babloo Kumar" email="babloocse888@gmail.com"/>
  //     </div>
  //   );
  // }
  // export default App;
  
  //using props
  // import React from 'react'
  // import logo from './logo.svg';
  // import './App.css';
  // import User from './User';
  // function App()
  // {
  //   StyleSheet={
  //     backgroundColor:"pink"
  //   }
  //   return(
  //     <div className='App'>
  //       <div style={{backgroundColor:"red"}}>
  //       <h1>Hello React</h1>
  //       </div>
  //       <User name={"Babloo Kumar"} email="babloocse888@gmail.com" hobbies={"Codding, Reading Books, Drawing"} skills={"DSA, C++, Control on Mern Project"}/>
  //       <User name={"Bikkee Kumar"} email="bikkeekr@gmail.com" hobbies={"Playing Cricket, Travelling, Watching movies"} skills={"DSA, C++, Control on Mern Project"}/>
  //       <User name={"Vikash Kumar"} email="vikash567@gmail.com" hobbies={"listening Song, Travelling,  Drawing"} skills={"DSA, C++, Control on Mern Project"}/>
  //       <User name={"Sanjeev Kumar"} email="tiwarig123@gmail.com" hobbies={"Playing Cricket, Operating laptop, singing"} skills={"DSA, C++, Control on Mern Project"}/>
  //       <User name={"Naina Kumari"} email="bablookinaina@gmail.com" hobbies={"Watching Movies, Playing Billiyards"} skills={"DSA, C++, Control on Mern Project"}/>
  //     </div>
  //   );
  // }
  // export default App;
  
  // import React from 'react'
  // import logo from './logo.svg';
  // import './App.css';
  // import User from './User';
  // function App() {
  //   return(
  //     <div className='App'>
  //       <h1>Hello React</h1>
  //       <User name={"Babloo"} email="babloocse888@gmail.com" hobbies={"playing Badminton"} skills={"Mern Stack Developer"}/>
  //       <User name={"Sanjeev"} email="sanjeev786@gmail.com" hobbies={"playing Cricket"} skills={"Python Developer"}/>
  //       <User name={"Naina"} email="bablookinaina@gmail.com" hobbies={"listening Song"} skills={"Biology, Physics"}/>
  //     </div>
  //   );
  // }
  
  // export default App;
  
  // import React, { Component } from 'react'
  {
    /*
  import logo from './logo.svg';
  import './App.css';
  import { useState } from 'react';
  import ClassState from './ClassState';
  class App extends Component
  {
    constructor()
    {
      super();
        this.state={
          // data:"Babloo"
          data:1
        }
    }
    apple()
    {
      // this.setState({data:"Kumar"})
      this.setState({data:this.state.data+1})
      alert("this is an alert")
    }
    render()
    {
      return(
        <div className="App">
        <h1>{this.state.data}</h1>
        <button onClick={()=>this.apple()}>Update Data</button>
        <ClassState />
        </div>
      );
    }
  }
  export default App;
  */
  // }
  
  // functional component
  
  {
    /* import logo from './logo.svg';
  import './App.css';
  // import React from 'react'
  import { useState } from 'react';
  
  function App() {
  
    // using normal variable that can't udate value
    // let tuktuk = "Babloo Kumar";
    // function apple(){
      
    //   // alert("function called");
    //   alert("this is an alert");
    // }
  const[data, dataVariable] = useState("Babloo");
  function setValue(){
    dataVariable("Kumar");
    alert("this is an state");
  }
  
    // Use of state in functional component
    // const [data, udateData] = useState("Babloo");
   
    return (
      <div className="App">
        <h1>{data}</h1>
  
        {/* <button onClick={apple}>Click Me</button> */
  }
  {
    /* <button onClick={apple()}>Click Me</button> */
  }
  {
    /*it direct call the function */
  }
  {
    /* <button onClick={apple}>Click Me</button> */
  }
  {
    /* function call through the Click Me button */
  }
  {
    /* to direct call */
  }
  {
    /* <button onClick={alert("hello")}>Click Me</button> */
  }
  {
    /* it direct call the fucntion */
  }
  
  {
    /* <button onClick={()=> alert()}>Click Me</button>  */
  }
  {
    /* through the arrow fucntion we call the function through Click Me button */
  }
  
  {
    /* use of state in functional component */
  }
  {
    /*
    <button onClick={setValue}>Click Me</button>
  
  
      </div>
    );
  }
  
  
  export default App;
  */
  }
  