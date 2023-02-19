import logo from "./logo.svg";
import "./App.css";
// import Login from "./Login";
import Function_as_Props from "./work/Function_as_Props";
import React from "react";
export default function App()
{
    function getData() {
        alert("Hello from App")
    }
    return(
        <div className='App'>       
        <Function_as_Props data={getData} />
        </div>
    );
}