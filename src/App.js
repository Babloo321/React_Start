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
/*
import React from "react";
function App()
{
  // using of object in array list
  const students = [
    {name:"babloo", email:"babloo@gmail.com", contact: 998976789},
    {name:"vikash", email:"vikash@gmail.com", contact: 2342424242},
    {name:"aakash", email:"aakash@gmail.com", contact: 5463242},
    {name:"vishal", email:"vishal@gmail.com", contact: 685473466},
    {name:"tuktuk", email:"tuktuk@gmail.com", contact: 84326532},
    {name:"rohan", email:"rohan@gmail.com", contact: 743579256}
  ]
  return(
    <div className='App'>
      <table border='1'>
        <thead>
          <tr>
            <td>Name</td> 
            <td>Email</td>
            <td>Contact</td>
          </tr>
        </thead>
        <tbody>
          {
          students.map((data)=>
          <tr>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.contact}</td>
          </tr>
          )
          }
        </tbody>
      </table>
    </div>
  )
}
export default App;
*/

/***********************************************************************************************************
                          **List with bootstrap and unique key**
                  make list from Array
                  what is unique key in loop
                  installing Bootstrap
                  use Bootstrap table with loop
 ************************************************************************************************************/
/*
import React from "react";
// usingn of table
import {Table} from 'react-bootstrap';
import { ListGroup } from "react-bootstrap";
function App()
{
  // making object
  const students= [
    {name:"Babloo", email:"babloo@gmail.com", contact:9898909, address:"Areraj"},
    {name:"vikash", email:"vikash@gmail.com", contact:4436334, address:"Areraj"},
    {name:"naina", email:"naina@gmail.com", contact:9898909, address:"Patna"},
    {name:"bikkee", email:"bikkee@gmail.com", contact:543635, address:"Areraj"},
    {name:"Karishma", email:"Karishma@gmail.com", contact:9898909, address:"Motihari"},
    {name:"Tuktuk", email:"Tuktuk@gmail.com", contact:9898909, address:"Areraj"}
  ]
  return(
    <div className='App'>
      <h1>List with Bootstrap and Unique Key</h1>
      <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Contact</td>
              <td>Address</td>
            </tr>
          </thead>
          <tbody>
            {
              students.map((data, i)=>
              <tr key={i}>
                
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.contact}</td>
                <td>{data.address}</td>
               
              </tr>
              )
            }
          </tbody>
      </Table>
    </div>

  );
}
export default App;
*/

/**********************************************************************************************************
                                  Nested List With Nested Array
 **********************************************************************************************************/

                                  /*
import React from "react";
import { Table } from "react-bootstrap";
function App() {
  const students = [
    {
      name: "Babloo",
      email: "babloo@gmail.com",
      contact: 9898909,
      address: [
        { houseNo: 221, city: "Areraj", state: "Bihar", country: "India" },
        { houseNo: 223, city: "Areraj", state: "Bihar", country: "India" },
        { houseNo: 224, city: "Areraj", state: "Bihar", country: "India" },
        { houseNo: 225, city: "Areraj", state: "Bihar", country: "India" },
      ],
    },
    {
      name: "vikash",
      email: "vikash@gmail.com",
      contact: 4436334,
      address: [
        { houseNo: 7221, city: "Areraj", state: "Bihar", country: "India" },
        { houseNo: 7223, city: "Areraj", state: "Bihar", country: "India" },
        { houseNo: 7224, city: "Areraj", state: "Bihar", country: "India" },
        { houseNo: 7225, city: "Areraj", state: "Bihar", country: "India" },
      ],
    },
    {
      name: "naina",
      email: "naina@gmail.com",
      contact: 9898909,
      address: [
        { houseNo: 111, city: "Patna", state: "Bihar", country: "India" },
        { houseNo: 333, city: "Patna", state: "Bihar", country: "India" },
        { houseNo: 444, city: "Patna", state: "Bihar", country: "India" },
        { houseNo: 555, city: "Patna", state: "Bihar", country: "India" },
      ],
    },
    {
      name: "bikkee",
      email: "bikkee@gmail.com",
      contact: 543635,
      address: [
        { houseNo: 121, city: "Areraj", state: "Bihar", country: "India" },
        { houseNo: 323, city: "Areraj", state: "Bihar", country: "India" },
        { houseNo: 424, city: "Areraj", state: "Bihar", country: "India" },
        { houseNo: 525, city: "Areraj", state: "Bihar", country: "India" },
      ],
    },
    {
      name: "Karishma",
      email: "Karishma@gmail.com",
      contact: 9898909,
      address: [
        { houseNo: 171, city: "Gudra", state: "Bihar", country: "India" },
        { houseNo: 373, city: "Gudra", state: "Bihar", country: "India" },
        { houseNo: 474, city: "Gudra", state: "Bihar", country: "India" },
        { houseNo: 575, city: "Gudra", state: "Bihar", country: "India" },
      ],
    },
    {
      name: "Tuktuk",
      email: "Tuktuk@gmail.com",
      contact: 9898909,
      address: [
        { houseNo: 1771, city: "Patna", state: "Bihar", country: "India" },
        { houseNo: 3377, city: "Patna", state: "Bihar", country: "India" },
        { houseNo: 4477, city: "Patna", state: "Bihar", country: "India" },
        { houseNo: 5577, city: "Patna", state: "Bihar", country: "India" },
      ],
    },
  ];
  return (
    <div className="App">
      <h1>
        <em>
          <strong>Nested List With Nested Array</strong>
        </em>
      </h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <td>S.No</td>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
            <td>Address</td>
          </tr>
        </thead>
        <tbody>
          {students.map((item, i) => (
            <tr key="i">
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>

              <td>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <td>S.No</td>
                      <td>House No.</td>
                      <td>City.</td>
                      <td>State.</td>
                      <td>Country</td>
                    </tr>
                  </thead>
                  <tbody>
                    {item.address.map((data, j) => (
                      <tr key="j">
                        <td>{j + 1}</td>
                        <td>{data.houseNo}</td>
                        <td>{data.city}</td>
                        <td>{data.state}</td>
                        <td>{data.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default App;
*/
