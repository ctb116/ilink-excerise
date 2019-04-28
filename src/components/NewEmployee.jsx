import React, { useState, useEffect } from "react";
import {
  Col,
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row
} from "reactstrap";

function NewEmployee(props) {
  const [valid, setValid] = useState(false);
  const [validName, setValidName] = useState(true);

  // useEffect(() => {
  //   setEmployees(props.employees);
  // });

  //HandleClick() checks if form input is complete before submitting
  //it gets the state from App as a prop as stateObj
  //formKeys lists the keys related to the form in stateObj
  //formKeys is beneficial because it's specific - if something is added to state in App it won't interfer with form validation
  //formValues returns a new obj with only form key/values
  //formValues is changed from obj to an array of strings
  //valid function tests elements of formArray for string length - returns a boolean
  //if valid function returns true (any input is left blank) then alert appears
  //else the new employee information is submitted
  function handleClick() {
    let stateObj = props.getValidation;
    const formKeys = [
      "name",
      "designation",
      "salary",
      "address1",
      "address2",
      "city",
      "state",
      "zip"
    ];
    const formValues = Object.keys(stateObj)
      .filter(key => formKeys.includes(key))
      .reduce((obj, key) => {
        obj[key] = stateObj[key];
        return obj;
      }, {});
    let formArray = Object.values(formValues);
    let valid = function(e) {
      return e.length === 0;
    };
    if (formArray.some(valid) === true) {
      alert("Please complete missing employee information");
    } else {
      props.onAdd();
    }
  }

  return (
    <Container>
      <Form>
        <Row form>
          <Col md={6}>
            {/* Name */}
            <FormGroup>
              <Label>Name</Label>
              <Input
                name="name"
                onChange={event => props.onChange(event)}
                placeholder="name"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            {/* Designation */}
            <FormGroup>
              <Label>Designation</Label>
              <Input
                name="designation"
                onChange={event => props.onChange(event)}
                placeholder="designation"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            {/* Salary */}
            <FormGroup>
              <Label>Salary</Label>
              <Input
                name="salary"
                onChange={event => props.onChange(event)}
                placeholder="earned annually"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            {/* Address 1 */}
            <FormGroup>
              <Label>Address</Label>
              <Input
                name="address1"
                onChange={event => props.onChange(event)}
                placeholder="1234 Main St"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            {/* Address 2 */}
            <FormGroup>
              <Label>Address 2</Label>
              <Input
                type="text"
                name="address2"
                onChange={event => props.onChange(event)}
                placeholder="Apartment, studio, or floor"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            {/* City */}
            <FormGroup>
              <Label>City</Label>
              <Input name="city" onChange={event => props.onChange(event)} />
            </FormGroup>
          </Col>
          <Col md={4}>
            {/* State */}
            <FormGroup>
              <Label>State</Label>
              <Input name="state" onChange={event => props.onChange(event)} />
            </FormGroup>
          </Col>
          <Col md={2}>
            {/* Zip */}
            <FormGroup>
              <Label>Zip</Label>
              <Input name="zip" onChange={event => props.onChange(event)} />
            </FormGroup>
          </Col>
        </Row>
        <Button onClick={() => handleClick()}>Submit</Button>
      </Form>
    </Container>
  );
}

export default NewEmployee;
