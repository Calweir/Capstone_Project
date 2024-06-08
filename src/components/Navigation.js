import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://cdn.ecommercedns.uk/files/1/236181/8/39234588/rbspect-logo-4c-quer-black.jpg"
          width={365}
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
        <li>
          <Link className="userArea" to="./userSignup">
            Register
          </Link>
        </li>
        <li>
          <Link className="userArea" to="./userSignup">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navigation;
