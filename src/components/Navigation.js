import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ handleOpen, handleLogin, userLogin }) => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://cdn.ecommercedns.uk/files/1/236181/8/39234588/rbspect-logo-4c-quer-black.jpg"
          width={365}
          alt="ReBull logo"
        />
      </div>
      <ul className="navMenu">
        <li>
          <Link className="links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="links" to="/products">
            Products
          </Link>
        </li>
        <li>
          <Link className="links" to="/shoppingCart">
            Shopping Cart
          </Link>
        </li>
        {userLogin ? (
          <li>Welcome, {userLogin}</li>
        ) : (
          <>
            <li>
              <button className="userArea" onClick={handleOpen}>
                <Link className="links" to="./userSignup">
                  Sign Up
                </Link>
              </button>
            </li>
            <li>
              <button className="userArea" onClick={handleLogin}>
                <Link to="./login" className="links">
                  Login
                </Link>
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
export default Navigation;
