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
    //change the obj to an array
    let formArray = Object.values(stateObj);
    //remove the employees array from the newly made array
    let formValues = formArray.splice(0, 1);
    //function to test elements of formValues for string length
    //returns a boolean
    let valid = function(e) {
      return e.length === 0;
    };
    let formValid = formValues.some(valid);
    //if formValid returns false (any input is left blank) then alert appears
    //else the new employee information is submitted
    if (formValid === false) {
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
                invalid={validName === false}
              />
              <FormFeedback invalid>
                Please enter employee's full name
              </FormFeedback>
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
                // invalid={valid === false}
              />
              <FormText>Your username is most likely your email.</FormText>
              {/* <FormFeedback invalid>Add this</FormFeedback> */}
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
