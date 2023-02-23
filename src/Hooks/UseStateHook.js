/*****************************************************************************************************
                                                Hooks
                  Hooks is nothing but functionality of class component use in functional component
                  like useState, life cycle method, pure component
****************************************************************************************************** */

import React, {useState} from 'react';    // here is useState is Hooks
function UseStateHook()
{
  const [count, setCount] = useState(0)
  console.warn(count)
  return(
    <div>
      <h1>This is an Example of Hooks {count}</h1>
      <button onClick={()=> setCount(count+1)}>Update</button>      
    </div>
  );
}
export default UseStateHook;