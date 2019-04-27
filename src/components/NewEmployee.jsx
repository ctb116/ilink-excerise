import React from "react";
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

const NewEmployee = props => {
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
                placeholder="Designation"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Salary</Label>
              <Input
                name="salary"
                onChange={event => props.onChange(event)}
                placeholder="Earned Annually"
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
        <Button onClick={() => props.onAdd()}>Submit</Button>
      </Form>
    </Container>
  );
};

export default NewEmployee;
