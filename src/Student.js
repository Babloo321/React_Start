import React from 'react'
import { useState } from 'react';
function Student()
{
    const [status, setStatus] = useState("false");
    return(
        <div>
            <h1>Hello React</h1>
            <button onClick={()=>setStatus("false")}>Hide</button>
            <button onClick={()=>setStatus("true")}>Show</button>
            
        </div>
    );
}
export default Student;














// import React from "react";
// export default class Student extends React.Component
// {
//     render()
//     {
//         return(
//             <div style={{backgroundColor:'skyblue', margin:20}}>
//             <h2>Name: {this.props.name}</h2>
//             <h2>Email: {this.props.email}</h2>
//             </div>
//         );
//     }
// }
