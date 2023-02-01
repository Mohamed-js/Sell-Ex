import React from "react";
import BooleanButton from "./tools/BooleanButton";
import ColorPicker from "./tools/ColorPicker";
import SelectButton from "./tools/SelectButton";
import TextInput from "./tools/TextInput";

const NavbarDesigner = ({ storeOpts, setStoreOpts }) => {
  return (
    <>
      <br />
      <h2 className="text-left mb-3">General</h2>
      {/* BACKGROUND COLOR */}
      <ColorPicker
        text="Navbar background"
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        path="navbar.bg_color"
      />
      <br />
      {/* CART=========================================================== */}
      <h2 className="text-left mb-3">Cart</h2>
      {/* CART ICON COLOR */}
      <ColorPicker
        text="Cart icon color"
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        path="navbar.cart.color"
      />
      <br />
      {/* LOGOOOOOOO=========================================================== */}
      <h2 className="text-left mb-3">Logo</h2>
      {/* LOGO POSITION */}
      <div className="d-flex align-items-center justify-content-between my-2">
        <p className="m-0 ml-2">Logo position</p>

        <div className="d-flex px-2">
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"navbar.logo.position"}
            value="left"
            icon="fa fa-arrow-left"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"navbar.logo.position"}
            value="center"
            icon="fa fa-align-center"
          />
        </div>
      </div>
      <hr />
      {/* LOGO TEXT */}
      <TextInput
        text={"Logo text"}
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        path={"navbar.logo.text"}
      />
      <hr />
      {/* LOGO TEXT COLOR */}
      <ColorPicker
        text="Logo text color"
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        path="navbar.logo.text_color"
      />
      <br />
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
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        text="links text"
        path={"navbar.links.with_text"}
      />
      <hr />
      {/* HOME LINK */}
      <BooleanButton
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        text="home link"
        path={"navbar.links.home.exists"}
      />
      <TextInput
        text={"Home text"}
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        path={"navbar.links.home.text"}
      />
      <hr />
      {/* ABOUT LINK */}
      <BooleanButton
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        text="about link"
        path={"navbar.links.about.exists"}
      />
      <TextInput
        text={"About text"}
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        path={"navbar.links.about.text"}
      />
      <hr />
      {/* CONTACT LINK */}
      <BooleanButton
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        text="contact link"
        path={"navbar.links.contact.exists"}
      />
      <TextInput
        text={"Contact text"}
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        path={"navbar.links.contact.text"}
      />
    </>
  );

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
