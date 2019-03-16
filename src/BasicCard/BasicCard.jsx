import React, { Component } from "react";
import "./_basicCard.scss";
import generateBarcode from "pdf417";

function BasicCard({ title, message, qrCode }) {
  return (
    <div className="card basicCard">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <h5 className="card-text">{message}</h5>
        {/* <div className="pdf417">
          <img src={generateBarcode(title, 2, 0.5)} alt="" />
        </div> */}
        <div className="qrCodeBlock">
          <div className={"qrCode" + (qrCode ? qrCode : 0)} />
        </div>
      </div>
    </div>
  );
}

export default BasicCard;
