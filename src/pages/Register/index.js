import React from "react";
import { Form } from "antd";

function Register() {
  return (
    <div className="h-screen bg-primary flex item-center justify-center">
      <div className="authentication-form bg-white p-2">
        <Form layout="vertical">
          <Form.Item
            label="Name"
            name="name"
          >
            <input type="text" placeholder="Name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
          >
            <input type="email" placeholder="Email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
          >
            <input type="password" placeholder="password" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Register;
