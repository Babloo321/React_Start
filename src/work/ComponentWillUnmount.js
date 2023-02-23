// import logo from "./logo.svg";
// import "./App.css";
// import React, {Component} from 'react';
// import ClassState from './ClassState'
// class App extends React.Component {
//   constructor()
//   {
//     super();
//     this.state= {
//       show:true
//     }
//   }
//   render()
//   {
//     return(
//       <div className="App">
//        {
//         this.state.show ? <ClassState /> : <h1>Child Component</h1>
//        }
        
//         <button onClick={()=> this.setState({show: !this.state.show})}>Toggle Update</button>
//       </div>
//     );
//   }
// }
// export default App;













import React, {Component} from "react";
class ComponentWillUnmount extends React.Component {
  componentWillUnmount()
  {
      alert("component Will Unmount called")
  }
    render()
    {
        return(
            <div>
                <h1>Component Will Unmount</h1>
            </div>
        );
    }
}
export default ComponentWillUnmount;