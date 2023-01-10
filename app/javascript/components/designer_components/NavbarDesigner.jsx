import React, { useState } from "react";
import ColorPicker from "./ColorPicker";

const NavbarDesigner = ({ storeOpts, setStoreOpts }) => {
  return (
    <>
      <br />
      <h2 className="text-left secondary">General</h2>
      {/* BACHGROUND COLOR */}
      <div className="d-flex align-items-center justify-content-between my-2">
        <h6 className="m-0 ml-2">Navbar Background</h6>
        <ColorPicker
          color={storeOpts.navbar.bg_color}
          setColor={handleBackgroundColor}
        />
      </div>
      <hr />
      {/* CART=========================================================== */}
      <h2 className="text-left secondary">Cart</h2>
      {/* CART ICON COLOR */}
      <div className="d-flex align-items-center justify-content-between my-2">
        <h6 className="m-0 ml-2">Cart icon color</h6>
        <ColorPicker
          color={storeOpts.navbar.cart.color}
          setColor={handleCartIconColor}
        />
      </div>
      <hr />
      {/* LOGOOOOOOO=========================================================== */}
      <h2 className="text-left secondary">Logo</h2>
      {/* LOGO POSITION */}
      <div className="d-flex align-items-center justify-content-between my-2">
        <h6 className="m-0 ml-2">
          Logo position: {storeOpts.navbar.logo.position}
        </h6>

        <div className="d-flex px-2">
          <button
            className={`btn white border mx-2 ${
              storeOpts.navbar.logo.position == "left" && "bg-tertiary"
            }`}
            onClick={() => handleLogoPosition("left")}
          >
            <i className="fa fa-arrow-left"></i>
          </button>
          <button
            className={`btn white border mx-2 ${
              storeOpts.navbar.logo.position == "center" && "bg-tertiary"
            }`}
            onClick={() => handleLogoPosition("center")}
          >
            <i className="fa fa-align-center"></i>
          </button>
        </div>
      </div>
      {/* LOGO TEXT */}
      <div className="d-flex align-items-center justify-content-between my-2">
        <h6 className="m-0 ml-2">Logo text</h6>
        <input
          className="mx-3 p-2 rounded"
          type="text"
          defaultValue={storeOpts.navbar.logo.text}
          onChange={handleLogoText}
        />
      </div>
      {/* LOGO TEXT COLOR */}
      <div className="d-flex align-items-center justify-content-between my-2">
        <h6 className="m-0 ml-2">Logo text color</h6>
        <ColorPicker
          color={storeOpts.navbar.logo.text_color}
          setColor={handleLogoTextColor}
        />
      </div>
      <hr />
      {/* NAVIGATION=========================================================== */}
      <h2 className="text-left secondary">Navigation Links</h2>
      {/* LINKS COLOR */}
      <div className="d-flex align-items-center justify-content-between my-2">
        <h6 className="m-0 ml-2">Links color</h6>
        <ColorPicker
          color={storeOpts.navbar.links.color}
          setColor={handleLinksColor}
        />
      </div>
      {/* LINKS WITH TEXT */}
      <div className="d-flex align-items-center justify-content-between my-2">
        <h6 className="m-0 ml-2">
          Links with text: {storeOpts.navbar.links.with_text ? "Yes" : "No"}
        </h6>

        <div className="d-flex px-2">
          <span
            className={`mx-2 ${storeOpts.navbar.links.with_text && "tertiary"}`}
            onClick={() => handleLinksTextExistance()}
          >
            <i
              className={`fa fa-${
                storeOpts.navbar.links.with_text ? "check-square" : "square"
              }`}
            ></i>
          </span>
        </div>
      </div>

      {/* HOME LINK */}
      <div className="d-flex align-items-center justify-content-between my-2">
        <h6 className="m-0 ml-2">
          <span
            className={`mx-2 ${
              storeOpts.navbar.links.home.exists && "tertiary"
            }`}
            onClick={() => handleHomeLinkExistance()}
          >
            <i
              className={`fa fa-${
                storeOpts.navbar.links.home.exists ? "check-square" : "square"
              }`}
            ></i>
          </span>{" "}
          Home
        </h6>
        <input
          className="mx-3 p-2 rounded"
          type="text"
          defaultValue={storeOpts.navbar.links.home.text}
          onChange={handleHomeText}
        />
      </div>

      {/* ABOUT LINK */}
      <div className="d-flex align-items-center justify-content-between my-2">
        <h6 className="m-0 ml-2">
          <span
            className={`mx-2 ${
              storeOpts.navbar.links.about.exists && "tertiary"
            }`}
            onClick={() => handleAboutLinkExistance()}
          >
            <i
              className={`fa fa-${
                storeOpts.navbar.links.about.exists ? "check-square" : "square"
              }`}
            ></i>
          </span>{" "}
          About
        </h6>
        <input
          className="mx-3 p-2 rounded"
          type="text"
          defaultValue={storeOpts.navbar.links.about.text}
          onChange={handleAboutText}
        />
      </div>

      {/* CONTACT LINK */}
      <div className="d-flex align-items-center justify-content-between my-2">
        <h6 className="m-0 ml-2">
          <span
            className={`mx-2 ${
              storeOpts.navbar.links.contact.exists && "tertiary"
            }`}
            onClick={() => handleContactLinkExistance()}
          >
            <i
              className={`fa fa-${
                storeOpts.navbar.links.contact.exists
                  ? "check-square"
                  : "square"
              }`}
            ></i>
          </span>{" "}
          Contact
        </h6>
        <input
          className="mx-3 p-2 rounded"
          type="text"
          defaultValue={storeOpts.navbar.links.contact.text}
          onChange={handleContactText}
        />
      </div>
    </>
  );

  function handleBackgroundColor(value) {
    setStoreOpts((prev) => {
      return {
        ...prev,
        navbar: {
          ...prev.navbar,
          bg_color: value,
        },
      };
    });
  }

  function handleCartIconColor(value) {
    setStoreOpts((prev) => {
      return {
        ...prev,
        navbar: {
          ...prev.navbar,
          cart: { ...prev.navbar.cart, color: value },
        },
      };
    });
  }

  function handleLogoPosition(value) {
    setStoreOpts((prev) => {
      return {
        ...prev,
        navbar: {
          ...prev.navbar,
          logo: { ...prev.navbar.logo, position: value },
        },
      };
    });
  }

  function handleLogoText(e) {
    setStoreOpts((prev) => {
      return {
        ...prev,
        navbar: {
          ...prev.navbar,
          logo: { ...prev.navbar.logo, text: e.target.value },
        },
      };
    });
  }

  function handleLogoTextColor(value) {
    setStoreOpts((prev) => {
      return {
        ...prev,
        navbar: {
          ...prev.navbar,
          logo: { ...prev.navbar.logo, text_color: value },
        },
      };
    });
  }

  function handleLinksColor(value) {
    setStoreOpts((prev) => {
      return {
        ...prev,
        navbar: {
          ...prev.navbar,
          links: { ...prev.navbar.links, color: value },
        },
      };
    });
  }

  function handleLinksTextExistance(value) {
    setStoreOpts((prev) => {
      return {
        ...prev,
        navbar: {
          ...prev.navbar,
          links: {
            ...prev.navbar.links,
            with_text: !prev.navbar.links.with_text,
          },
        },
      };
    });
  }

  function handleHomeLinkExistance(value) {
    setStoreOpts((prev) => {
      return {
        ...prev,
        navbar: {
          ...prev.navbar,
          links: {
            ...prev.navbar.links,
            home: {
              ...prev.navbar.links.home,
              exists: !prev.navbar.links.home.exists,
            },
          },
        },
      };
    });
  }

  function handleAboutLinkExistance(value) {
    setStoreOpts((prev) => {
      return {
        ...prev,
        navbar: {
          ...prev.navbar,
          links: {
            ...prev.navbar.links,
            about: {
              ...prev.navbar.links.about,
              exists: !prev.navbar.links.about.exists,
            },
          },
        },
      };
    });
  }

  function handleContactLinkExistance(value) {
    setStoreOpts((prev) => {
      return {
        ...prev,
        navbar: {
          ...prev.navbar,
          links: {
            ...prev.navbar.links,
            contact: {
              ...prev.navbar.links.contact,
              exists: !prev.navbar.links.contact.exists,
            },
          },
        },
      };
    });
  }

  function handleHomeText(e) {
    setStoreOpts((prev) => {
      return {
        ...prev,
        navbar: {
          ...prev.navbar,
          links: {
            ...prev.navbar.links,
            home: {
              ...prev.navbar.links.home,
              text: e.target.value,
            },
          },
        },
      };
    });
  }

  function handleAboutText(e) {
    setStoreOpts((prev) => {
      return {
        ...prev,
        navbar: {
          ...prev.navbar,
          links: {
            ...prev.navbar.links,
            about: {
              ...prev.navbar.links.about,
              text: e.target.value,
            },
          },
        },
      };
    });
  }

  function handleContactText(e) {
    setStoreOpts((prev) => {
      return {
        ...prev,
        navbar: {
          ...prev.navbar,
          links: {
            ...prev.navbar.links,
            contact: {
              ...prev.navbar.links.contact,
              text: e.target.value,
            },
          },
        },
      };
    });
  }
};

export default NavbarDesigner;
