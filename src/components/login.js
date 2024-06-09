import React from "react";
import { useFormik } from "formik";
import { Modal, Button } from "react-bootstrap";
import "./login.css";

//Used form validation that contains what input needs to be Required and what conditions need to be meet for the validation to be true.
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

//Passed props into login page that allows for the modal to be opened and the state to be updated that allows the username to be displayed within the navigation menu.
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
      {/*Modal has show and onHide function that allows the modal to be open and than when submitted the function declared passing the username and then closed the modal to show the user is logged in. */}
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
          {/*Each input uses formik function to update the values and form validation for on change / onblur. Followed HyperionDev pdf Form Validation for this code structure. */}
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
