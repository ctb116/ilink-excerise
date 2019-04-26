import React, { useState } from "react";
import { Table } from "reactstrap";
import { getEmployees } from "../services/fakeEmployeeService";
import Employee from "./Employee";

function EmployeeTable() {
  const [employees, setEmployees] = useState(getEmployees());

  const handleDeleteEmployee = id => {
    console.log("delete" + id);
    const deleteEmployee = employees.filter(obj => obj.id !== id);
    setEmployees(deleteEmployee);
  };

  return (
    <React.Fragment>
      <Table hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Address</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <Employee
              key={employee.id}
              employee={employee}
              onDeleteEmployee={handleDeleteEmployee}
            />
          ))}
        </tbody>
      </Table>
    </React.Fragment>
  );
}

export default EmployeeTable;
