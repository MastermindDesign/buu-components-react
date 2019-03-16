import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import BasicCard from "../BasicCard.jsx";

storiesOf("Cards", module).add("basic", () => (
  <div>
    <div className="container">
      <div class="row">
        <div class="col-sm d-flex align-items-stretch">
          <BasicCard title="Hello" message="world" />
        </div>
        <div class="col-sm d-flex align-items-stretch">
          <BasicCard title="Hello" message="world this is a test" qrCode="1" />
        </div>
        <div class="col-sm d-flex align-items-stretch">
          <BasicCard title="Hello" message="world" qrCode="2" />
        </div>
        <div class="col-sm d-flex align-items-stretch">
          <BasicCard title="Hello" message="world" />
        </div>
        <div class="col-sm d-flex align-items-stretch">
          <BasicCard title="Hello" message="world" qrCode="1" />
        </div>
        <div class="col-sm d-flex align-items-stretch">
          <BasicCard title="Hello" message="world" qrCode="2" />
        </div>
        <div class="col-sm d-flex align-items-stretch">
          <BasicCard title="Hello" message="world" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <BasicCard title="Hello World" message="This is just a message" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <BasicCard
            title="Hello World"
            message="This is just a message"
            qrCode="1"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <BasicCard
            title="Hello World"
            message="This is just a message"
            qrCode="2"
          />
        </div>
      </div>
    </div>
  </div>
));
