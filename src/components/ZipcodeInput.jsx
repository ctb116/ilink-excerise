import React, { Component } from "react";
import { Input } from "reactstrap";
import "../styles/zipcodeinput.css";

//This component shows how I like to think of reusability in components.
//Zipcodes require a lot of adjustments to the Input tag for things like:
//remove number wheel scrolling, number arrows, and to max the number at 5 digits
//I don't want to have to repeat this code if I want a zipcode input elsewhere
//Instead I can just import this whole component where I want it
class ZipcodeInput extends Component {
  handleChange = e => {
    const max = 99999;
    const maxLength = max.toString().length;
    let val = e.target.value;
    const zipVal = val < max ? val : val.toString().substring(0, maxLength);
    let event = { target: { name: e.target.name, value: zipVal } };
    this.props.onChange(event);
  };

  render() {
    return (
      <Input
        id="zip"
        name="zip"
        value={this.props.value.zip}
        type="number"
        onChange={event => this.handleChange(event)}
        onWheel={event => {
          event.preventDefault();
        }}
      />
    );
  }
}

export default ZipcodeInput;
