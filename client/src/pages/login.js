import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AUTH from "../utils/AUTH";

export default function Login() {
  const [username, setUsername] = useState ("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    AUTH.login({"username": username,
                "password": password});
    // window.location.href='/home';
  }

  return (
    <Form style={{ opacity: 0.9, marginTop: '60px', marginLeft: '90px', marginRight: '90px' }}>
    <div className="Login">
      <Form onSubmit={handleSubmit}>
	  <Form.Group size="md" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="md" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
<<<<<<< HEAD
        <Button block size="md" type="submit" disabled={!validateForm()}>
=======
        <Button type="button ml-2" type="submit" disabled={!validateForm()}>
>>>>>>> 1035f2d611dfed5ed163cc7b78db83bac01412f2
          Login
        </Button>
      </Form>
    </div>
    </Form>
  );
}

