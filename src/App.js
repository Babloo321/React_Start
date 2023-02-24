
import logo from "./logo.svg";
import "./App.css";

//use of  useState Hook
// import React, {useState} from 'react';    // here is useState is Hooks
// import UseStateHook from './Hooks/UseStateHook'
// function App()
// {
//   const [data, setData] = useState(true)
//   return(
//     <div>
//       <h2>this is App file</h2>
//       {
//         data ? <UseStateHook /> : <h1>Not use useState</h1>
        
//       }
//       <button onClick={()=> setData(false)}>Updata</button>
//     </div>
//   );
// }
// export default App;


/*****************************Use of useEffect Hook */
/*
import React, {useEffect, useState} from "react";
function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(10)

  useEffect(()=>{
    console.warn("first useState: ", {count1})

    console.warn("second useState: ", {count2})
  })
  return(
    <div className='App'>
      <h1>UseEffect in React for Count1: {count1}</h1>
      <button onClick={()=>setCount1(count1+1)}>Update Count1</button>
      <br /><br />
      <h1>UseEffect in React for Count2: {count2}</h1>
      <button onClick={()=>setCount2(count2+1)}>Update Count2</button>
    </div>
  );
}
export default App;
*/

import React, {useEffect, useState} from 'react';
import UseEffectProps from "./Hooks/UseEffectProps";
function App()
{
  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);

  return(
    <div className='App'>
      <UseEffectProps data={data} count={count} />
      <button onClick={()=>setData(data+1)}>Updata Data</button>
      <button onClick={()=> setCount(count+1)}>Updata Count</button>
    </div>
  );
}
export default App;