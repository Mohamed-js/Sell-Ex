import React, { useState } from "react";
import BooleanButton from "./tools/BooleanButton";
import ColorPicker from "./tools/ColorPicker";
import SelectButton from "./tools/SelectButton";

const NavbarDesigner = ({ storeOpts, setStoreOpts }) => {
  return (
    <>
      <br />
      <h2 className="text-left mb-3">General</h2>
      {/* BACKGROUND COLOR */}
      <ColorPicker
        text="Navbar Background"
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        path="navbar.bg_color"
      />
      <hr />
      {/* CART=========================================================== */}
      <h2 className="text-left mb-3">Cart</h2>
      {/* CART ICON COLOR */}
      <ColorPicker
        text="Cart icon color"
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        path="navbar.cart.color"
      />
      <hr />
      {/* LOGOOOOOOO=========================================================== */}
      <h2 className="text-left mb-3">Logo</h2>
      {/* LOGO POSITION */}
      <div className="d-flex align-items-center justify-content-between my-2">
        <p className="m-0 ml-2">Logo position</p>

        <div className="d-flex px-2">
          <SelectButton
            valueToCompare={storeOpts.navbar.logo.position}
            value="left"
            handleClick={handleLogoPosition}
            icon="fa fa-arrow-left"
          />
          <SelectButton
            valueToCompare={storeOpts.navbar.logo.position}
            value="center"
            handleClick={handleLogoPosition}
            icon="fa fa-align-center"
          />
        </div>
      </div>
      {/* LOGO TEXT */}
      <div className="d-flex align-items-center justify-content-between my-2">
        <p className="m-0 ml-2">Logo text</p>
        <input
          className="mx-3 p-2 rounded border"
          type="text"
          defaultValue={storeOpts.navbar.logo.text}
          onChange={handleLogoText}
        />
      </div>
      {/* LOGO TEXT COLOR */}
      <ColorPicker
        text="Logo text color"
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        path="navbar.logo.text_color"
      />
      <hr />
      {/* NAVIGATION=========================================================== */}
      <h2 className="text-left mb-3">Navigation Links</h2>
      {/* LINKS COLOR */}
      <ColorPicker
        text="Links color"
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        path="navbar.links.color"
      />

      {/* LINKS WITH TEXT */}
      <BooleanButton
        text="links text"
        valueToCompare={storeOpts.navbar.links.with_text}
        handleClick={handleLinksTextExistance}
      />
      <hr />
      {/* HOME LINK */}
      <BooleanButton
        text="home link"
        valueToCompare={storeOpts.navbar.links.home.exists}
        handleClick={handleHomeLinkExistance}
      />
      <div className="d-flex align-items-center justify-content-between my-2">
        <p className="m-0 ml-2">Home text</p>
        <input
          className="mx-3 p-2 rounded border"
          type="text"
          defaultValue={storeOpts.navbar.links.home.text}
          onChange={handleHomeText}
        />
      </div>
      <hr />
      {/* ABOUT LINK */}
      <BooleanButton
        text="about link"
        valueToCompare={storeOpts.navbar.links.about.exists}
        handleClick={handleAboutLinkExistance}
      />
      <div className="d-flex align-items-center justify-content-between my-2">
        <p className="m-0 ml-2">About</p>
        <input
          className="mx-3 p-2 rounded border"
          type="text"
          defaultValue={storeOpts.navbar.links.about.text}
          onChange={handleAboutText}
        />
      </div>
      <hr />
      {/* CONTACT LINK */}
      <BooleanButton
        text="contact link"
        valueToCompare={storeOpts.navbar.links.contact.exists}
        handleClick={handleContactLinkExistance}
      />
      <div className="d-flex align-items-center justify-content-between my-2">
        <p className="m-0 ml-2">Contact</p>
        <input
          className="mx-3 p-2 rounded border"
          type="text"
          defaultValue={storeOpts.navbar.links.contact.text}
          onChange={handleContactText}
        />
      </div>
    </>
  );

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
