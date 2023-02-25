/***********************************************************************************************************
                          **List with bootstrap and unique key**
                  make list from Array
                  what is unique key in loop
                  installing Bootstrap
                  use Bootstrap table with loop
 ************************************************************************************************************/

import React from "react";
// usingn of table
import { Table } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
function App() {
  // making object
  const students = [
    {
      name: "Babloo",
      email: "babloo@gmail.com",
      contact: 9898909,
      address: "Areraj",
    },
    {
      name: "vikash",
      email: "vikash@gmail.com",
      contact: 4436334,
      address: "Areraj",
    },
    {
      name: "naina",
      email: "naina@gmail.com",
      contact: 9898909,
      address: "Patna",
    },
    {
      name: "bikkee",
      email: "bikkee@gmail.com",
      contact: 543635,
      address: "Areraj",
    },
    {
      name: "Karishma",
      email: "Karishma@gmail.com",
      contact: 9898909,
      address: "Motihari",
    },
    {
      name: "Tuktuk",
      email: "Tuktuk@gmail.com",
      contact: 9898909,
      address: "Areraj",
    },
  ];
  return (
    <div className="App">
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
          {students.map((data, i) => (
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.contact}</td>
              <td>{data.address}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default App;
