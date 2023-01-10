import React, { useState } from "react";
import "../assets/styles/designer.css";
import NavbarDesigner from "./designer_components/NavbarDesigner";
const Designer = ({ store }) => {
  const [storeOpts, setStoreOpts] = useState(JSON.parse(store.options));

  return (
    <div className="row design-area">
      <div
        className="col-3"
        style={{
          maxWidth: 250,
        }}
      >
        <h3 className="text-center my-4">Sections</h3>
        <div
          className="nav flex-column nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <a
            className="nav-link active"
            id="v-pills-navbar-tab"
            data-toggle="pill"
            href="#v-pills-navbar"
            role="tab"
            aria-controls="v-pills-navbar"
            aria-selected="true"
          >
            Navbar
          </a>
          <a
            className="nav-link"
            id="v-pills-cover-tab"
            data-toggle="pill"
            href="#v-pills-cover"
            role="tab"
            aria-controls="v-pills-cover"
            aria-selected="false"
          >
            Cover
          </a>
          <a
            className="nav-link"
            id="v-pills-featured-tab"
            data-toggle="pill"
            href="#v-pills-featured"
            role="tab"
            aria-controls="v-pills-featured"
            aria-selected="false"
          >
            Featured Products
          </a>
        </div>
        <button
          className="btn bg-tertiary white"
          style={{
            margin: "2.5rem 1rem",
          }}
          onClick={async () => {
            const token = document.querySelector("[name=csrf-token]").content;
            console.log(storeOpts);
            await fetch(`/stores/${store.id}/update_design`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": token,
              },
              body: JSON.stringify({ store_options: storeOpts }),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.success) {
                  alert("Design updated successfully...!");
                }
              });
          }}
        >
          Save Changes
        </button>
      </div>
      <div
        className="col-9"
        style={{
          background: "#171717",
          overflowY: "scroll",
          overflowX: "hidden",
          height: "100vh",
          maxWidth: 600,
        }}
      >
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-navbar"
            role="tabpanel"
            aria-labelledby="v-pills-navbar-tab"
          >
            <NavbarDesigner storeOpts={storeOpts} setStoreOpts={setStoreOpts} />
          </div>
          <div
            className="tab-pane fade active"
            id="v-pills-cover"
            role="tabpanel"
            aria-labelledby="v-pills-cover-tab"
          >
            Cover
          </div>
          <div
            className="tab-pane fade active"
            id="v-pills-featured"
            role="tabpanel"
            aria-labelledby="v-pills-featured-tab"
          >
            Featured
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designer;
