import React, {useEffect, useState} from "react";
function UseStateHook() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(10)

  useEffect(()=>{
    console.warn("first useState: ", {count1})

    console.warn("second useState: ", {count2})
  })    
  return(
    <div>
      <h1>UseEffect in React for Count1: {count1}</h1>
      <button onClick={()=>setCount1(count1+1)}>Update Count1</button>
      <br /><br />
      <h1>UseEffect in React for Count2: {count2}</h1>
      <button onClick={()=>setCount2(count2+1)}>Update Count2</button>
    </div>
  );
}
export default UseStateHook;