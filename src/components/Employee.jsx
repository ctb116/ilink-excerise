import React from "react";

const Employee = props => {
  return (
    <React.Fragment>
      <tr>
        <td>{props.employee.id}</td>
        <td>{props.employee.name}</td>
        <td>{props.employee.designation}</td>
        <td>{props.employee.salary}</td>
        <td>{props.employee.address}</td>
      </tr>
    </React.Fragment>
  );
};

export default Employee;
