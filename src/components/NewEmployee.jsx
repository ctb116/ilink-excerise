import React, { Component } from "react";
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

class NewEmployee extends Component {
  state = {
    name: "",
    designation: "",
    salary: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: ""
  };
  render() {
    return (
      <Container>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="Name">Name</Label>
                <Input
                  onChange={event =>
                    this.setState({ name: event.target.value })
                  }
                  placeholder="name"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="Designation">Designation</Label>
                <Input
                  onChange={event =>
                    this.setState({ designation: event.target.value })
                  }
                  placeholder="Designation"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="Salary">Salary</Label>
                <Input
                  onChange={event =>
                    this.setState({ salary: event.target.value })
                  }
                  placeholder="Earned Annually"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="Address">Address</Label>
                <Input
                  type="text"
                  name="address"
                  onChange={event =>
                    this.setState({ address: event.target.value })
                  }
                  placeholder="1234 Main St"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="Address2">Address 2</Label>
                <Input
                  type="text"
                  name="address2"
                  onChange={event =>
                    this.setState({ address2: event.target.value })
                  }
                  placeholder="Apartment, studio, or floor"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="City">City</Label>
                <Input
                  type="text"
                  name="city"
                  onChange={event =>
                    this.setState({ city: event.target.value })
                  }
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="State">State</Label>
                <Input
                  type="text"
                  name="state"
                  onChange={event =>
                    this.setState({ state: event.target.value })
                  }
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="Zip">Zip</Label>
                <Input
                  type="text"
                  name="zip"
                  onChange={event => this.setState({ zip: event.target.value })}
                />
              </FormGroup>
            </Col>
          </Row>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default NewEmployee;
