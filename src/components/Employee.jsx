import React from "react";
import { Link } from "react-router-dom";

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
          {/* Link component from the react-router-dom prevents additional http requests from the server */}
          {/* I wrapped the delete button in Link even though it's routing to the page it's already on */}
          {/* This is because the page needs a refresh when an employee is deleted to show the changes */}
          {/* Link only updates the content needed making for a faster refresh */}
          {/* Otherwise I could use window.location.reload() but it would be painfully slower */}
          <Link to="/">
            <button onClick={() => props.onDelete(props.employee.id)}>
              Delete
            </button>
          </Link>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default Employee;
