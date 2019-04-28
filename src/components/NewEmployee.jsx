import React, { useState, useEffect } from "react";
import {
  Col,
  Container,
  Button,
  Form,
  FormGroup,
  FormFeedback,
  FormText,
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

  //Checks if form input is valid before submitting
  function handleClick() {
    //gets the state from App as a prop
    let stateObj = props.getValidation;
    //list of desired keys from the stateObj
    //Very specific so if something is added to state in App it won't interfer with form validation
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
    //returns a new obj with only form key/values
    const formValues = Object.keys(stateObj)
      .filter(key => formKeys.includes(key))
      .reduce((obj, key) => {
        obj[key] = stateObj[key];
        return obj;
      }, {});
    //change obj to array
    let formArray = Object.values(formValues);
    //function to test elements of formArray for string length - returns a boolean
    let valid = function(e) {
      return e.length === 0;
    };
    //if valid function returns true (any input is left blank) then alert appears
    //else the new employee information is submitted
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
            <FormGroup>
              <Label>Designation</Label>
              <Input
                name="designation"
                onChange={event => props.onChange(event)}
                placeholder="designation"
              />
              <FormText>Your username is most likely your email.</FormText>
            </FormGroup>
          </Col>
          <Col md={6}>
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
            <FormGroup>
              <Label>City</Label>
              <Input name="city" onChange={event => props.onChange(event)} />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>State</Label>
              <Input name="state" onChange={event => props.onChange(event)} />
            </FormGroup>
          </Col>
          <Col md={2}>
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
