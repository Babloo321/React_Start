/**********************************************************************************************************
                                  Nested List With Nested Array
 **********************************************************************************************************/

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
