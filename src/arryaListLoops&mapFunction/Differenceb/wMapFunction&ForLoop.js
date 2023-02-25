import React from "react";
function App()
{
  const students = ["babloo", "raju", "bikkee", "vikash", "aakash", "tuktuk"]
  students.map((item)=>{
    console.warn("My name is: ", item);
  })
// mainly used map function of looping because return fucntion doesn't support for loop
  for(let i = 0; i < students.length; i++){
    console.warn("for loop calling name: ", students[i]);
  }
  return(
    <div className="App">
      <h1>Using of Map function</h1>
    </div>
  );
}
export default App;