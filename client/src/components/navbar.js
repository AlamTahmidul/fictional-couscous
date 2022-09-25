import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div id="navbar-container">
        <Button as={Link} to={"/"}>
          Home
        </Button>
        <Button as={Link} to={"/#about_us"}>
          About Us
        </Button>
        <Button as={Link} to={"/swipe"}>
          Find Pet
        </Button>
        <Button as={Link} to={"/interests"}>
          Current Interests
        </Button>
        <Button as={Link} to={"/sign-in"}>
          Sign In
        </Button>
        <Button as={Link} to={"/sign-up"}>
          Sign Up
        </Button>
      </div>
    );
  }
}
