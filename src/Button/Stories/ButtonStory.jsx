import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import Button from "../Button.jsx";

storiesOf("Buttons", module).add("basic", () => (
  <div>
    <div className="container">
      <div className="row">
        <h1>Colors</h1>
      </div>
      <div className="row">
        <div className="col-sm">
          <Button fill>Default</Button>
        </div>
        <div className="col-sm">
          <Button color="white" fill>White</Button>
        </div>
        <div className="col-sm">
          <Button color="green" fill>Green</Button>
        </div>
        <div className="col-sm">
          <Button color="orange" fill>Orange</Button>
        </div>
        <div className="col-sm">
          <Button color="red" fill>Red</Button>
        </div>
        <div className="col-sm">
          <Button color="purple" fill>Purple</Button>
        </div>
        <div className="col-sm">
          <Button color="blue" fill>Blue</Button>
        </div>
      </div>
    </div>
    <div className="container">
        <div className="row">
            <h1>Shapes</h1>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-sm">
                <Button fill>Default</Button>
            </div>
            <div className="col-sm">
                <Button shape="round" fill>Round</Button>
            </div>
            <div className="col-sm">
                <Button shape="mini" fill>M</Button>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <h1>Styles</h1>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-sm">
                <Button>Default</Button>
            </div>
            <div className="col-sm">
                <Button fill>Fill</Button>
            </div>
            <div className="col-sm">
                <Button outline>Outline</Button>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <h1>Glow</h1>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-sm">
                <Button outline glow>Default</Button>
            </div>
            <div className="col-sm">
                <Button color="white" outline glow>White</Button>
            </div>
            <div className="col-sm">
                <Button color="green" outline glow>Green</Button>
            </div>
            <div className="col-sm">
                <Button color="orange" outline glow>Orange</Button>
            </div>
            <div className="col-sm">
                <Button color="red" outline glow>Red</Button>
            </div>
            <div className="col-sm">
                <Button color="purple" outline glow>Purple</Button>
            </div>
            <div className="col-sm">
                <Button color="blue" outline glow>Blue</Button>
            </div>
        </div>
    </div>
    <div className="container white">
        <div className="row">
            <h1>Light Colors</h1>
        </div>
        <div className="row">
            <div className="col-sm">
            <Button fill light>Default</Button>
            </div>
            <div className="col-sm">
            <Button color="white" fill light>White</Button>
            </div>
            <div className="col-sm">
            <Button color="green" fill light>Green</Button>
            </div>
            <div className="col-sm">
            <Button color="orange" fill light>Orange</Button>
            </div>
            <div className="col-sm">
            <Button color="red" fill light>Red</Button>
            </div>
            <div className="col-sm">
            <Button color="purple" fill light>Purple</Button>
            </div>
            <div className="col-sm">
                <Button color="blue" fill light>Blue</Button>
            </div>
        </div>
        <div className="row">
            <h1>Light Shapes</h1>
        </div>
        <div className="row">
            <div className="col-sm">
                <Button color="red" fill light>Default</Button>
            </div>
            <div className="col-sm">
                <Button shape="round" color="red" fill light>Round</Button>
            </div>
            <div className="col-sm">
                <Button shape="mini" color="red" fill light>M</Button>
            </div>
        </div>
        <div className="row">
            <h1>Light Styles</h1>
        </div>
        <div className="row">
            <div className="col-sm">
                <Button color="red" light>Default</Button>
            </div>
            <div className="col-sm">
                <Button color="red" fill light>Fill</Button>
            </div>
            <div className="col-sm">
                <Button color="red" outline light>Outline</Button>
            </div>
        </div>
        <div className="row">
            <h1>Light Glow</h1>
        </div>
        <div className="row">
            <div className="col-sm">
                <Button color="red" light glow>Default</Button>
            </div>
            <div className="col-sm">
                <Button color="red" fill light glow>Fill</Button>
            </div>
            <div className="col-sm">
                <Button color="red" outline light glow>Outline</Button>
            </div>
        </div>
    </div>
  </div>
));
