import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import ZipcodeInput from "./ZipcodeInput";

function NewEmployee(props) {
  const [valid, setValid] = useState(true);
  console.log(valid);

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
    let checkValid = function(e) {
      return e.length === 0;
    };
    if (formArray.some(checkValid) === true) {
      alert("Please complete missing employee information");
    } else {
      // the application is rendered every time setState is called
      // setValid works here but doesn't render when called
      setValid(false);
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
                type="number"
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
              <ZipcodeInput
                onChange={props.onChange}
                value={props.getValidation}
              />
            </FormGroup>
          </Col>
        </Row>
        {/* I want to use a react hook here to determine if the submitt button - */}
        {/* will route to employee list only if the new employee information is complete */}
        {/* However I was unable to get this to work although I'm sure it's possible */}
        {/* Without hooks I would keep a boolean in state for conditional routing */}
        {/* The downside of that is I don't want to make this component stateful and - */}
        {/* the closest parent state is in App. I would have to pass the boolean as a prop */}
        {/* I like hooks for this reason as it avoids bloating my state with conditional rendering needs */}
        {valid ? (
          <Link to="/newemployee">
            <Button onClick={() => handleClick()}>Submit</Button>
          </Link>
        ) : (
          <Link to="/">
            <Button onClick={() => handleClick()}>Submit</Button>
          </Link>
        )}
      </Form>
    </Container>
  );
}

export default NewEmployee;
