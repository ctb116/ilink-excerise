import React from "react";

const Employee = props => {
  return (
    <React.Fragment>
      <tr>
        <td>{props.employee.id}</td>
        <td>{props.employee.name}</td>
        <td>{props.employee.designation}</td>
        <td>${props.employee.salary}/yr</td>
        <td>
          <p>{props.employee.address1}</p>
          <p>{props.employee.address2}</p>
        </td>
        <td>
          <button onClick={() => props.onDelete(props.employee.id)}>
            Delete
          </button>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default Employee;
