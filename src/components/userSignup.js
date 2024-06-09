import React from "react";
import { useFormik } from "formik";
import { Modal, Button } from "react-bootstrap";
import "./userSignup.css";

//Used form validation for the users registration page.
const RegisterationValidate = (values) => {
  const errors = {};

  //Below are the if statement that make sure all input is appropiately validated. The statements are used for users name, surname, username, email, password and a confirm password input.
  if (!values.FirstName) {
    errors.FirstName = "Required";
  } else if (values.FirstName.length > 20) {
    errors.FirstName = "First name must be less than 20 characters";
  }

  if (!values.surname) {
    errors.surname = "Required";
  } else if (values.surname.length > 20) {
    errors.surname = "Surname must not be longer than 20 Characters";
  }
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length < 5) {
    errors.username = "Username must be at least 5 characters";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address provided";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be longer than 8 characters.";
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = "Password must contain capital letter";
  } else if (!/[a-z]/.test(values.password)) {
    errors.password = "Password must contain lowercase letter";
  } else if (!/[0-9]/.test(values.password)) {
    errors.password = "Password must contain a number";
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password)) {
    errors.password = "Password must contain a special case character";
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = "Required";
  } else if (values.passwordConfirm !== values.password) {
    errors.passwordConfirm = "Passowrds do not match";
  }
  return errors;
};

//Passed props for updating state on the users username once registered and allowing for the modal to be closed once the user has submitted there form.
const RegisterPage = ({
  handleRegisterClose,
  setRegisterUsername,
  registerOpen,
}) => {
  const formik = useFormik({
    initialValues: {
      FirstName: "",
      surname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: RegisterationValidate,
    onSubmit: (values) => {
      console.log("form submitted", values);
      setRegisterUsername(values.username);
      handleRegisterClose();
    },
  });

  return (
    <Modal
      className="modalDesign"
      show={true}
      onHide={handleRegisterClose}
      dialogClassName="custom-modal-dialog"
    >
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <div className="signupDesign">
        <div className="registerDiv">
          <form onSubmit={formik.handleSubmit}>
            <h4>Register</h4>
            <div>
              <div className="userInput">
                <label htmlFor="FirstName">First Name:</label>
                <input
                  id="FirstName"
                  name="FirstName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.FirstName}
                />
                {formik.touched.FirstName && formik.errors.FirstName ? (
                  <div className="error">{formik.errors.FirstName}</div>
                ) : null}
              </div>
              {/*Used function from formik to allow formik to handle changes within the input and handle blur. Then used the condition to check if the  input has been touched (selected) then if any errors occurs the div tag will be used to display the necessary message related to that error that occured. */}
              <div className="userInput">
                <label htmlFor="surname">Surname:</label>
                <input
                  id="surname"
                  name="surname"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.surname}
                />
                {formik.touched.surname && formik.errors.surname ? (
                  <div className="error">{formik.errors.surname}</div>
                ) : null}
              </div>

              <div className="userInput">
                <label htmlFor="email">Email:</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="userInput">
                <label htmlFor="username">Username:</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="error">{formik.errors.username}</div>
                ) : null}
              </div>

              <div className="userInput">
                <label htmlFor="password">Password:</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error">{formik.errors.password}</div>
                ) : null}
              </div>

              <div className="userInput">
                <label htmlFor="passwordConfirm">Confirm Password:</label>
                <input
                  id="passwordConfirm"
                  name="passwordConfirm"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.passwordConfirm}
                />
                {formik.touched.passwordConfirm &&
                formik.errors.passwordConfirm ? (
                  <div className="error">{formik.errors.passwordConfirm}</div>
                ) : null}
              </div>
              <Button className="registerButton" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default RegisterPage;
