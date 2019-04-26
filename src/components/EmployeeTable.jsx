import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import Employee from "./Employee";

function EmployeeTable(props) {
  const [employees, setEmployees] = useState(props.employees);

  useEffect(() => {
    setEmployees(props.employees);
  });

  const handleDeleteEmployee = id => {
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
