import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [input, setInput] = useState({ userName: "", email: "", password: "" });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const recData = {
      userName: input.userName,
      email: input.email,
      password: input.password,
    };
    console.log(recData);
  };

  return (
    <div className="auth">
      <div className="main">
        <Card className="border border-primary rounded p-2">
          <Card.Title>
            <h1 className="text">{isSignIn ? "SignUp" : "SignIn"}</h1>
          </Card.Title>
          <Card.Body>
            <Form onSubmit={onSubmitHandler}>
              {isSignIn && (
                <Form.Group className="mt-2">
                  <Form.Label>UserName</Form.Label>
                  <Form.Control
                    onChange={onChangeHandler}
                    name="userName"
                    placeholder="type username"
                    required
                  />
                </Form.Group>
              )}
              <Form.Group className="mt-2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={onChangeHandler}
                  name="email"
                  placeholder="type email"
                  required
                  type="email"
                />
              </Form.Group>
              <Form.Group className="mt-2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={onChangeHandler}
                  name="password"
                  placeholder="type password"
                  required
                  type="password"
                />
              </Form.Group>
              <Button className="mt-2" type="submit" variant="primary">
                {isSignIn ? "Register" : "Submit"}
              </Button>
              <div className="text-center mt-3">
                <Button onClick={() => setIsSignIn(!isSignIn)} variant="danger">
                  {!isSignIn ? "Swich to SignUp" : "Swich to SignIn"}
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AuthPage;
