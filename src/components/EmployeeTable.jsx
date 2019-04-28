import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import Employee from "./Employee";
import "../styles/employeetable.css";

function EmployeeTable(props) {
  const [employees, setEmployees] = useState(props.employees);

  useEffect(() => {
    setEmployees(props.employees);
  });

  return (
    <Table hover className="employee-table">
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
            onDelete={props.onDelete}
          />
        ))}
      </tbody>
    </Table>
  );
}

export default EmployeeTable;
