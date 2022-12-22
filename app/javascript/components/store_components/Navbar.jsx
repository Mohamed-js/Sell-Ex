import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = ({ store, cartItems }) => {
  return (
    <nav className="navbar navbar-dark ">
      <Link className="navbar-brand" to={`/stores/${store.id}`}>
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
        {store.name}
      </Link>
      <div className="d-flex">
        {cartItems.length > 0 && (
          <Link
            to={`/stores/${store.id}/cart`}
            className="navbar-toggler mr-2"
            type="Link"
            aria-expanded="false"
          >
            <i className="fa fa-shopping-cart  cart-icon"></i>
          </Link>
        )}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className="nav-link"
              to={`/stores/${store.id}`}
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
            >
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              className="nav-link"
              to={`/stores/${store.id}/categoties`}
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
            >
              Categories
            </Link>
          </li> */}
          <li className="nav-item">
            <Link
              className="nav-link"
              to={`/stores/${store.id}/cart`}
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
            >
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
