import React from "react";
import { Link } from "react-router-dom";

//I do inline styling if what I want is very specific
//This avoids having a seperate css sheet for just one or two things
//I use inline styling sparingly otherwise a component becomes bloated with styling
//and if a style needs to be changed it can be difficult to locate
const NavBar = () => {
  return (
    <div style={{ padding: 5 }}>
      <div style={{ float: "right" }}>
        <Link to="/newemployee">Add Employee</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default NavBar;
