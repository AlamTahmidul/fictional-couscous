import "./signin.css";
import { Card, Form, Button } from "react-bootstrap";
import { useForm } from "../hooks/useForm";

export default function Signin() {
  const [values, setValues] = useForm({ email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values.email, values.password);
  };

  return (
    <div id="sign-in-page">
      <h1>Sign In</h1>
      <Card bg="light">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              name="email"
              placeholder="Email Address"
              value={values.email}
              onChange={setValues}
              className="input-field"
            ></Form.Control>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={setValues}
              className="input-field"
            ></Form.Control>
            <div>
              <Button type="submit" id="sign-in-button">
                Sign In
              </Button>
            </div>
            <hr />
            <div>
              <Button id="sign-up-button">Sign Up</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
