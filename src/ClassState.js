import React, {Component} from "react";
class ClassState extends React.Component {
    ComponentWillUnmount()
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
export default ClassState;