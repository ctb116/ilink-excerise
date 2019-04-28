//imports are sorted first by react modules,
//followed by third party components,
//then internal components and finally css style sheets.
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import { Container } from "reactstrap";
import {
  GetEmployees,
  SaveEmployees,
  DeleteEmployees
} from "./services/endPoints";
import EmployeeTable from "./components/EmployeeTable";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import NewEmployee from "./components/NewEmployee";
import "./styles/app.css";

//state in App because this is a small application
class App extends Component {
  state = {
    employees: [],
    name: "",
    designation: "",
    salary: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: ""
  };

  //Gets the employees which populates the employee table
  //componentDidMount() triggers after the component renders -
  //so makes it ideal place to put an api call
  async componentDidMount() {
    const { data: employees } = await axios.get(GetEmployees);
    this.setState({ employees });
  }

  //Changes in any form field from the NewEmployee component are set to state from this method.
  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  //some packaging of the new employee data before it goes to post
  getNewEmployee = () => {
    let address1 = this.state.address1.concat(", " + this.state.address2);
    let address2 = this.state.city.concat(
      " " + this.state.state + ", " + this.state.zip
    );
    return {
      name: this.state.name,
      designation: this.state.designation,
      salary: this.state.salary,
      address1: address1,
      address2: address2
    };
  };

  //new employee data is posted and state is updated
  handleAdd = async () => {
    const { data: employee } = await axios.post(
      SaveEmployees,
      this.getNewEmployee()
    );
    const employees = [...this.state.employees, employee];
    this.setState({ employees });
  };

  //handles deleting an employee
  handleDelete = async id => {
    await axios.delete(DeleteEmployees + "/" + id);
    const employees = this.state.employees.filter(e => e.id !== id);
    this.setState({ employees });
  };

  render() {
    return (
      <Container>
        <div className="container-app">
          <Header />
          <NavBar />
          {/* Switch and Route components display components if path matches exactly */}
          {/* Route passes its own set of props to components so I use the render attribute to pass additional props */}
          <Switch>
            <Route
              path="/newemployee"
              render={() => (
                <NewEmployee
                  onChange={this.handleChange}
                  onAdd={this.handleAdd}
                  getValidation={this.state}
                />
              )}
            />
            <Route
              path="/"
              render={() => (
                <EmployeeTable
                  employees={this.state.employees}
                  onDelete={this.handleDelete}
                />
              )}
            />
          </Switch>
        </div>
      </Container>
    );
  }
}

export default App;
