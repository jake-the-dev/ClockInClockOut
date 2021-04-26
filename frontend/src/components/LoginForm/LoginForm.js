import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const LoginForm = () => {
  return (
    <Container>
      <Form>
        <Row>
          <Col md>
            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@gmail.com"
              ></Form.Control>
              <Form.Text className="text-muted">
                We'll never share your email address
              </Form.Text>
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
              ></Form.Control>
              <Form.Text className="text-muted">
                We'll never share your password either
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="secondary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export { LoginForm };
