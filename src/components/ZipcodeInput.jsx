import React, { Component } from "react";
import { Input } from "reactstrap";
import "../styles/zipcodeinput.css";

class ZipcodeInput extends Component {
  handleChange = e => {
    const max = 99999;
    const maxLength = max.toString().length;
    let val = e.target.value;
    const zipVal = val < max ? val : val.toString().substring(0, maxLength);
    let event = { target: { name: "zip", value: zipVal } };
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
