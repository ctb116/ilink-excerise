import React, { Component } from "react";
import { Table } from "reactstrap";
import { getEmployees } from "../services/fakeEmployeeService";
import Employee from "./Employee";

class EmployeeTable extends Component {
  state = { employees: getEmployees() };
  render() {
    return (
      <div>
        <Table hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map(employee => (
              <Employee key={employee.id} employee={employee} />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default EmployeeTable;
