import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import "./navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div id="navbar-container">
        <Button>Home</Button>
        <Button>About Us</Button>
        <Button>Find Pet</Button>
        <Button>Current Interests</Button>
        <Button>Sign In</Button>
        <Button>Sign Up</Button>
      </div>
    );
  }
}
