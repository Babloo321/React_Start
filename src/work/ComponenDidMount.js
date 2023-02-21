import React, {component} from 'react';
class ComponentDidMount extends React.Component {
    constructor()                               // first constructor call
    {
        super();
        this.state = {
            name:"Babloo"
        }
        console.warn("constructor");
    }
    componentDidMount()                         // it call in the last because when our html is ready than it is called
    {
        console.warn("ComponentDidMount");
    }
    render()                                    // second render call
    {
        console.warn("Render");

        return(
            <div>
            <h1>Componen Did Mount</h1><br/>
            <h1>{this.state.name}</h1>
            <button onClick={()=>this.setState({name:"bikkee"})}>Update Name</button>
            </div>
        );
    }
}
export default ComponentDidMount;