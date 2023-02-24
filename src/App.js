
import logo from "./logo.svg";
import "./App.css";
/*****************************************************UseEffect ********************************************
                                    This is type of Hook
                              HOOKs:-> this is the method used for class function life cycle method  features
 */
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

// import React, {useState} from 'react';
// import UseEffectProps from "./Hooks/UseEffectProps";
// function App() {
// const [data, setData] = useState(100);
// const [count, setCount] = useState(10);

// return(
//   <div className='App'>
//     <UseEffectProps data={data} />
//     <button onClick={()=> setData(data+1)}>Update Data</button>
//     <br />
//     <br />
//     <UseEffectProps  count={count} />
//     <button onClick={()=> setCount(count+1)}>Update Count</button>
//   </div>
// )
// }
// export default App;



/*************************************************Using CSS in React js *************************************
                                          **three types of CSS in Reacct JS
                                          1.Normal StyleSheet
                                          2.Inline Style
                                          3. CSS with module
 ************************************************************************************************************/

import React from "react";
import './DesignCss/normalStyleSheet.css'
import style from './DesignCss/custom.module.css'
import {Button} from 'react-bootstrap'
function App()
{
  return(
    <div className='App'>
      <h1 className = "primary">Style 1 in React JS</h1>
      {/* inline style */}
      <h1 style={{color:"gold", backgroundColor:"black"}}>Style 2 in React JS</h1>      
      {/* // style module */}
      <h1 className={style.success}>Style 3 in React JS</h1>
      <br />
      <button onClick={()=>alert("hello")}>Click Me</button>

      <br /><br />
      <Button variant="outline-primary">Primary</Button>{' '}
      <Button variant="outline-secondary">Secondary</Button>{' '}
      <Button variant="outline-success">Success</Button>{' '}
      <Button variant="outline-warning">Warning</Button>{' '}
      <Button variant="outline-danger">Danger</Button>{' '}
      <Button variant="outline-info">Info</Button>{' '}
      <Button variant="outline-light">Light</Button>{' '}
      <Button variant="outline-dark">Dark</Button>
    </div>
  );
}
export default App;