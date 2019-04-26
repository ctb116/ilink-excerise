import React, { Component } from "react";
import axios from "axios";
import { GetEmployees } from "./services/endPoints";
import EmployeeTable from "./components/EmployeeTable";
import NewEmployee from "./components/NewEmployee";

class App extends Component {
  state = { employees: [] };

  async componentDidMount() {
    const { data: employees } = await axios.get(GetEmployees);
    this.setState({ employees });
  }

  render() {
    console.log(this.state.employees);
    return (
      <React.Fragment>
        <EmployeeTable employees={this.state.employees} />
        <NewEmployee />
      </React.Fragment>
    );
  }
}

export default App;
