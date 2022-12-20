import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = ({ store }) => {
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
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to={"/store"}>
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/store/categories"}>
              Categories
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/store/cart"}>
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
