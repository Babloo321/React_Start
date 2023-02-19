// import React, {useState} from "react";
function Login()
{
    function loginSubmit(e)
    {
        e.preventDefault()
    }
    return(
    <div>
        <h1>Login</h1>
        <form onSubmit={loginSubmit}>
            <input type="text" placeholder="Enter User Id" />
            <br /><br/>
            <input type="text" placeholder="Enter User PassWord" />
            <br /><br/>
            <button type="Submit">Submit</button>
        </form>
    </div>
    );
}
export default Login;