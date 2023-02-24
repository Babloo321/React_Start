/*import React, {useEffect, useState} from 'react';
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
*/


// import React, {useEffect} from 'react'

// export default function UseEffectProps(props) {
//     useEffect(()=>{
//         alert("useEffect"+props.count);
//     }, [props.count])
//     useEffect(()=>{
//         console.warn("for data: "+props.data)
//     }, [props.data])
//   return (
//     <div>
//         <h1>Count Props: {props.count}</h1>
//         <h1>Data Props: {props.data}</h1>
//     </div>
//   );
// }

import React, {useEffect}  from "react";
function App(props)
{
  useEffect(()=>{
    console.warn("this is data props: ",props.data);

  }, [props.data])

  useEffect(()=>{
    alert("Count is Up to Dated: " + props.count)
  })
  return(
<div>
<h1>Data: {props.data}</h1>
<h1>Count: {props.count}</h1>
</div>
  );
}
export default App;

/*

import React, {useEffect, useState} from 'react';
function App()
{
  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);
  useEffect(()=>{
    console.warn("useEffect is Called", data);
  },[data])

  useEffect(()=>{
    alert("this is for count" + count);
  }, [count])
  return(
    <div className='App'>
      <h1>data: {data}</h1>
      <button onClick={()=> setData(data+1)}>Update Data</button><br /><br />
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Updata Count</button>
    </div>
  );
}
export default App;
*/
