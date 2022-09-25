import "./signup.css";
import { Card, Form, Button } from "react-bootstrap";
import { useForm } from "../hooks/useForm";
import { useState } from "react";

export default function Signup() {
  const [values, setValues] = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    region: "",
  });

  const [
    { firstNameError, lastNameError, emailError, passwordError, regionError },
    setError,
  ] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
    regionError: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      
    }
    console.log(values.email, values.password);
  };

  const validate = () => {
    let firstNameError = "";
    let lastNameError = "";
    let emailError = "";
    let passwordError = "";
    let regionError = "";
    if (!values.firstName) {
      firstNameError = "first name cannot be blank";
    }
    if (!values.lastName) {
      lastNameError = "last name cannot be blank";
    }
    if (!values.email) {
      emailError = "email cannot be blank";
    } else if (!values.email.includes("@")) {
      emailError = "invalid email";
    }
    if (!values.password || !values.confirmPassword) {
      passwordError = "password cannot be blank";
    } else if (values.password !== values.confirmPassword) {
      passwordError = "passwords do not match";
    }
    if (!values.region) {
      regionError = "region cannot be blank";
    }
    if (
      firstNameError ||
      lastNameError ||
      emailError ||
      passwordError ||
      regionError
    ) {
      setError({
        firstNameError,
        lastNameError,
        emailError,
        passwordError,
        regionError,
      });
      return false;
    }
    return true;
  };

  return (
    <div id="sign-up-page">
      <h1>Sign Up</h1>
      <Card bg="light">
        <Card.Body id="card-container">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              name="firstName"
              placeholder="First Name"
              value={values.firstName}
              onChange={setValues}
              className="input-field"
            ></Form.Control>
            <div style={{color: "red"}}>{firstNameError}</div>
            <Form.Control
              name="lastName"
              placeholder="Last Name"
              value={values.lastName}
              onChange={setValues}
              className="input-field"
            ></Form.Control>
            <div style={{color: "red"}}>{lastNameError}</div>
            <Form.Control
              name="email"
              placeholder="Email Address"
              value={values.email}
              onChange={setValues}
              className="input-field"
            ></Form.Control>
            <div style={{color: "red"}}>{emailError}</div>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={setValues}
              className="input-field"
            ></Form.Control>
            <div style={{color: "red"}}>{passwordError}</div>
            <Form.Control
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={values.confirmPassword}
              onChange={setValues}
              className="input-field"
            ></Form.Control>
            <div style={{color: "red"}}>{passwordError}</div>
            <Form.Control
              name="region"
              placeholder="Region"
              value={values.region}
              onChange={setValues}
              className="input-field"
            ></Form.Control>
            <div style={{color: "red"}}>{regionError}</div>
            <div>
              <Button type="submit" id="sign-up-button">
                Sign Up
              </Button>
            </div>
            <hr></hr>
            <div>
              <Button id="sign-in-button">Sign In</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
