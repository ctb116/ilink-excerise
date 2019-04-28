import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import Employee from "./Employee";

function EmployeeTable(props) {
  const [employees, setEmployees] = useState(props.employees);

  //useEffect is similar to componentDidMount
  //this provides the list of employees to be rendered from the get api call in App
  //Using setEmployees in UseEffect has created an EsLint warning
  //However I am only familar with hooks and do not know how to fix the warning
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
        {/* Creates an instance of Employee component for each employee */}
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
