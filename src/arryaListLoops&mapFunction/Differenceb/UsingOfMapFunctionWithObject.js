
import React from "react";
function UsingOfMapFunctionWithObject()
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
export default UsingOfMapFunctionWithObject;