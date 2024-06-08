import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./login.css";

const loginValidate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 10) {
    errors.username = "Username must be ten characters long.";
  }
  if (!values.loginPassword) {
    errors.loginPassword = "Required";
  }
  return errors;
};

const LoginPage = ({ handleLoginClose, setUserLogin }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      loginPassword: "",
    },
    validate: loginValidate,
    onSubmit: (values) => {
      setUserLogin(values.username);
      handleLoginClose();
    },
  });

  return (
    <div>
      <Modal show={true} onHide={handleLoginClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <img
          src="https://media.designrush.com/inspirations/296007/conversions/Red-Bull-logo-design1-preview.jpg"
          width={150}
          alt="login logo"
          className="loginLogo"
        />
        <form onSubmit={formik.handleSubmit}>
          <div className="userInput">
            <label className="loginLabel" htmlFor="username">
              Username:
            </label>
            <input
              className="loginInput"
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
          </div>

          <div className="userInput">
            <label className="loginLabel" htmlFor="loginPassword">
              Password:
            </label>
            <input
              className="loginInput"
              id="loginPassword"
              name="loginPassword"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.loginPassword}
            />
          </div>
          <div className="buttonContainer">
            <Button className="loginButton" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default LoginPage;
