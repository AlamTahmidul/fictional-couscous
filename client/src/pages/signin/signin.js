import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <Card bg="light">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            placeholder="Email Address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></Form.Control>
          <Form.Control
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></Form.Control>
          <Button type="submit">Sign In</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}