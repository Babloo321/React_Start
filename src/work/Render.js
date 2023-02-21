import React from "react";
class Render extends React.Component {
    //using state
    constructor()
    {
        super();
        this.state={
            email:"babloo@gmail.com"
        }
    }
    render()
    {
        console.warn("render method", this.state.email)
    return(
        <div>
        <h1> "Hello react"</h1>
        
        <button onClick={()=>this.setState ({email: "bikkee@gmail.com"})}>Update</button>
        <h1>{this.state.email}</h1>
        </div>
    )
}
}
export default Render;