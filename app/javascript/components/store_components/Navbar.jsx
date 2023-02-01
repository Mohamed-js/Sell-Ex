import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ store, cartItems, storeImage, storeOpts }) => {
  const BREAK_POINT = 768;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  let logoCentered = storeOpts.navbar.logo.position == "center" ? true : false;
  useEffect(() => {
    let logo = document.getElementById("navbar-brand");
    logo.style.left = `calc(50% - ${logo.offsetWidth / 2}px)`;

    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return (
    <nav
      className="navbar navbar-light navbar-expand-md"
      style={{ backgroundColor: `${storeOpts.navbar.bg_color}` }}
    >
      <Link
        className="navbar-brand"
        id="navbar-brand"
        to={`/stores/${store.id}`}
        style={{
          position: logoCentered ? "absolute" : "static",
          color: storeOpts.navbar.logo.text_color,
        }}
      >
        <img
          src={storeImage}
          width="30"
          height="30"
          className="d-inline-block align-top mx-1 rounded"
          alt={store.name}
          loading="lazy"
        />
        {storeOpts.navbar.logo.text}
      </Link>
      <div
        className="d-flex justify-content-between"
        style={{
          width: logoCentered && screenWidth < BREAK_POINT ? "100%" : "",
        }}
      >
        {/* {cartItems.length > 0 && ( */}
        <Link
          className="nav-link navbar-toggler cart-icon"
          to={`/stores/${store.id}/cart`}
          // data-toggle="collapse"
          // data-target="#navbarNav"
          aria-expanded="true"
          aria-controls="navbarNav"
        >
          <i
            className="fa fa-shopping-bag"
            style={{
              color: `${storeOpts.navbar.cart.color}`,
            }}
          ></i>
        </Link>
        {/* )} */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <i
            className="fa fa-bars"
            style={{
              color: storeOpts.navbar.links.color,
            }}
          ></i>
        </button>
      </div>
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          {storeOpts.navbar.links.home.exists && (
            <li className="nav-item">
              <Link
                className="nav-link"
                to={`/stores/${store.id}`}
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                style={{
                  color: storeOpts.navbar.links.color,
                }}
              >
                <i className="fa fa-home"></i>{" "}
                {storeOpts.navbar.links.with_text &&
                  storeOpts.navbar.links.home.text}
                <span className="sr-only">(current)</span>
              </Link>
            </li>
          )}
          {storeOpts.navbar.links.about.exists && (
            <li className="nav-item">
              <Link
                className="nav-link"
                to={`/stores/${store.id}`}
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                style={{
                  color: storeOpts.navbar.links.color,
                }}
              >
                <i className="fa fa-user"></i>{" "}
                {storeOpts.navbar.links.with_text &&
                  storeOpts.navbar.links.about.text}
                <span className="sr-only">(current)</span>
              </Link>
            </li>
          )}
          {storeOpts.navbar.links.contact.exists && (
            <li className="nav-item">
              <Link
                className="nav-link"
                to={`/stores/${store.id}`}
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                style={{
                  color: storeOpts.navbar.links.color,
                }}
              >
                <i className="fa fa-phone"></i>{" "}
                {storeOpts.navbar.links.with_text &&
                  storeOpts.navbar.links.contact.text}
                <span className="sr-only">(current)</span>
              </Link>
            </li>
          )}
        </ul>

        <Link
          className="nav-link cart-icon"
          to={`/stores/${store.id}/cart`}
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-expanded="true"
          aria-controls="navbarNav"
        >
          <i
            className="fa fa-shopping-bag"
            style={{
              color: `${storeOpts.navbar.cart.color}`,
            }}
          ></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
