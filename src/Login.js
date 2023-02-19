import { useState } from "react";

// import React, {useState} from "react";
function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  function loginSubmit(e) {
    if (user.lenght < 3 || password.length < 3) {
      alert("type correct values");
    } else {
      alert("all good");
    }
    e.preventDefault();
  }
  function userHandler(e) {
    let item = e.target.value;
    if (item.lenght < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item);
  }

  function passHandler(e) {
    let item = e.target.value;
    if (item.lenght < 3) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPassword(item);
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginSubmit}>
        <input type="text" placeholder="Enter User Id" onChange={userHandler} />
        {userErr ? <span>Invalid User</span> : ""}
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter User PassWord"
          onChange={passHandler}
        />
        {passErr ? <span>Invalid Password</span> : ""}
        <br />
        <br />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}
export default Login;
