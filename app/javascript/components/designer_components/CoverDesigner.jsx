import React from "react";
import BooleanButton from "./tools/BooleanButton";
import ColorPicker from "./tools/ColorPicker";
import SelectButton from "./tools/SelectButton";
import TextInput from "./tools/TextInput";
// import SelectMenu from "./tools/SelectMenu"; // Test
import Opacity from "./tools/Opacity"; // test

const CoverDesigner = ({
  storeOpts,
  setStoreOpts,
  handleSelectValue,
  selectValue,
}) => {
  return (
    <>
      <br />
      <h2 className="text-left mb-3">General</h2>
      {/* COVER BACHGROUND COLOR */}
      <ColorPicker
        text="Cover background color"
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        path="cover.bg_color"
      />
      <hr />
      <div className="d-flex align-items-center justify-content-between my-2">
        <p className="m-0 ml-2">Cover height</p>

        <div
          className="d-flex px-2"
          style={{
            flexWrap: "wrap",
          }}
        >
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.height"}
            value="50vh"
            icon="50%"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.height"}
            value="60vh"
            icon="60%"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.height"}
            value="70vh"
            icon="70%"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.height"}
            value="80vh"
            icon="80%"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.height"}
            value="90vh"
            icon="90%"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.height"}
            value="100vh"
            icon="100%"
          />
        </div>
      </div>
      <hr />
      <div className="d-flex align-items-center justify-content-between my-2">
        <p className="m-0 ml-2">Content horizontal position</p>

        <div
          className="d-flex px-2"
          style={{
            flexWrap: "wrap",
          }}
        >
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.content_horizontal_position"}
            value="left"
            icon="fa fa-arrow-left"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.content_horizontal_position"}
            value="center"
            icon="fa fa-align-center"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.content_horizontal_position"}
            value="right"
            icon="fa fa-arrow-right"
          />
        </div>
      </div>
      <hr />
      {/* <div className="d-flex align-items-center justify-content-between my-2">
        <p className="m-0 ml-2">Content vertical position</p>

        <div
          className="d-flex px-2"
          style={{
            flexWrap: "wrap",
          }}
        >
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.content_vertical_position"}
            value="top"
            icon="fa fa-arrow-up"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.content_vertical_position"}
            value="center"
            icon="fas fa-code-commit"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.content_vertical_position"}
            value="bottom"
            icon="fa fa-arrow-down"
          />
        </div>
      </div> */}
      <br />
      {/* =============================BACKGROUND IMAAAAAAAAGE============================== */}
      <h2 className="text-left mb-3">Background Image</h2>
      <BooleanButton
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        text="background image"
        path={"cover.background.exists"}
      />
      <hr />
      <div className="d-flex align-items-center justify-content-between my-2">
        <p className="m-0 ml-2">Background image position</p>
        <div>
          <div
            className="d-flex px-2"
            style={{
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <SelectButton
              storeOpts={storeOpts}
              setStoreOpts={setStoreOpts}
              path={"cover.background.image_position"}
              value="top left"
              icon="T-Left"
            />
            <div style={{ width: 8 }}></div>
            <SelectButton
              storeOpts={storeOpts}
              setStoreOpts={setStoreOpts}
              path={"cover.background.image_position"}
              value="top center"
              icon="T-Center"
            />
            <div style={{ width: 8 }}></div>
            <SelectButton
              storeOpts={storeOpts}
              setStoreOpts={setStoreOpts}
              path={"cover.background.image_position"}
              value="top right"
              icon="T-Right"
            />
          </div>
          <div
            className="d-flex px-2"
            style={{
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <SelectButton
              storeOpts={storeOpts}
              setStoreOpts={setStoreOpts}
              path={"cover.background.image_position"}
              value="center left"
              icon="C-Left"
            />
            <div style={{ width: 8 }}></div>
            <SelectButton
              storeOpts={storeOpts}
              setStoreOpts={setStoreOpts}
              path={"cover.background.image_position"}
              value="center center"
              icon="Center"
            />
            <div style={{ width: 8 }}></div>
            <SelectButton
              storeOpts={storeOpts}
              setStoreOpts={setStoreOpts}
              path={"cover.background.image_position"}
              value="center right"
              icon="C-Right"
            />
          </div>
          <div
            className="d-flex px-2"
            style={{
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <SelectButton
              storeOpts={storeOpts}
              setStoreOpts={setStoreOpts}
              path={"cover.background.image_position"}
              value="bottom left"
              icon="B-Left"
            />
            <div style={{ width: 8 }}></div>
            <SelectButton
              storeOpts={storeOpts}
              setStoreOpts={setStoreOpts}
              path={"cover.background.image_position"}
              value="bottom center"
              icon="B-Center"
            />
            <div style={{ width: 8 }}></div>
            <SelectButton
              storeOpts={storeOpts}
              setStoreOpts={setStoreOpts}
              path={"cover.background.image_position"}
              value="bottom right"
              icon="B-Right"
            />
          </div>
        </div>
      </div>
      <hr />
      <TextInput
        text={"Image url"}
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        path={"cover.background.image"}
      />
      <br />
      {/* =============================HEADLINE============================== */}
      <h2 className="text-left mb-3">Headline</h2>
      <TextInput
        text={"Headline text"}
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        path={"cover.headline.text"}
      />
      <ColorPicker
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        text="Headline color"
        path="cover.headline.color"
      />
      <ColorPicker
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        text="Headline background color"
        path="cover.headline.bg_color"
        withTransparency
      />
      {/* <SelectGroup
        text="Text align"
        opts={3}
        path="cover.headline.text_align"
        values={["left", "center", "right"]}
        icon={["fa fa-arrow-left", "fa fa-align-center", "fa fa-arrow-right"]}
      /> */}
      <div className="d-flex align-items-center justify-content-between my-2">
        <p className="m-0 ml-2">Text align</p>

        <div
          className="d-flex px-2"
          style={{
            flexWrap: "wrap",
          }}
        >
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.headline.text_align"}
            value="left"
            icon="fa fa-arrow-left"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.headline.text_align"}
            value="center"
            icon="fa fa-align-center"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.headline.text_align"}
            value="right"
            icon="fa fa-arrow-right"
          />
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between my-2">
        <p className="m-0 ml-2">Font Size</p>

        <div
          className="d-flex px-2"
          style={{
            flexWrap: "wrap",
          }}
        >
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.headline.font_size"}
            value="1rem"
            icon="100%"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.headline.font_size"}
            value="1.5rem"
            icon="150%"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.headline.font_size"}
            value="2rem"
            icon="200%"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.headline.font_size"}
            value="2.5rem"
            icon="250%"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.headline.font_size"}
            value="3rem"
            icon="300%"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.headline.font_size"}
            value="3.5rem"
            icon="350%"
          />
        </div>
      </div>
      {/* ============================= Description ============================== */}
      <h2 className="text-left mb-3">Description</h2>
      <ColorPicker
        text="Description background color"
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        path="cover.description.bg_color"
        withTransparency
      />
      <ColorPicker
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        text="Description color"
        path="cover.description.color"
      />
      <div className="d-flex align-items-center justify-content-between my-2">
        <p className="m-0 ml-2">Font Size</p>

        <div
          className="d-flex px-2"
          style={{
            flexWrap: "wrap",
          }}
        >
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.description.font_size"}
            value="1rem"
            icon="100%"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.description.font_size"}
            value="1.5rem"
            icon="150%"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.description.font_size"}
            value="2rem"
            icon="200%"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.description.font_size"}
            value="2.5rem"
            icon="250%"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.description.font_size"}
            value="3rem"
            icon="300%"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.description.font_size"}
            value="3.5rem"
            icon="350%"
          />
        </div>
      </div>
      <TextInput
        text={"Description text"}
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        path={"cover.description.text"}
      />
      <div className="d-flex align-items-center justify-content-between my-2">
        <p className="m-0 ml-2">Text align</p>

        <div
          className="d-flex px-2"
          style={{
            flexWrap: "wrap",
          }}
        >
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.description.text_align"}
            value="left"
            icon="fa fa-arrow-left"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.description.text_align"}
            value="center"
            icon="fa fa-align-center"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.description.text_align"}
            value="right"
            icon="fa fa-arrow-right"
          />
        </div>
      </div>
      {/* ============================= Button ============================== */}
      <h2 className="text-left mb-3">Button</h2>
      <div className="d-flex align-items-center justify-content-between my-2">
        <p className="m-0 ml-2">Text align</p>

        <div
          className="d-flex px-2"
          style={{
            flexWrap: "wrap",
          }}
        >
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.button.alignment"}
            value="left"
            icon="fa fa-arrow-left"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.button.alignment"}
            value="center"
            icon="fa fa-align-center"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.button.alignment"}
            value="right"
            icon="fa fa-arrow-right"
          />
        </div>
      </div>
      <ColorPicker
        text="Button background color"
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        path="cover.button.bg_color"
        withTransparency
      />
      <ColorPicker
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        text="button color"
        path="cover.button.color"
      />
      <div className="d-flex align-items-center justify-content-between my-2">
        <p className="m-0 ml-2">Font Size</p>

        <div
          className="d-flex px-2"
          style={{
            flexWrap: "wrap",
          }}
        >
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.button.font_size"}
            value="1rem"
            icon="100%"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.button.font_size"}
            value="1.5rem"
            icon="150%"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.button.font_size"}
            value="2rem"
            icon="200%"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.button.font_size"}
            value="2.5rem"
            icon="250%"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.button.font_size"}
            value="3rem"
            icon="300%"
          />
          <SelectButton
            storeOpts={storeOpts}
            setStoreOpts={setStoreOpts}
            path={"cover.button.font_size"}
            value="3.5rem"
            icon="350%"
          />
        </div>
      </div>
      {/* ============================= Overlay ============================== */}
      <h2 className="text-left mb-3">Overlay</h2>
      <Opacity
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        text="Overlay color"
        path="cover.overlay.color"
      />
      <BooleanButton
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        text="Overlay image"
        path={"cover.overlay.exists"}
      />
      {/*=== Test ===*/}
      {/* <hr />
      <h2 className="text-left mb-3">Test</h2>
      <SelectMenu
      storeOpts={storeOpts}
      setStoreOpts={setStoreOpts}
      path={"cover.button.alignment"}
      handleSelectValue={handleSelectValue}
      value={selectValue}
      /> */}
    </>
  );
};

export default CoverDesigner;
