import React, { Component } from "react";
import "./_basicCard.scss";

function BasicCard({ title, message, footer, qrCode }) {
  return (
    <div className="card basicCard">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <h5 className="card-text">{message}</h5>
        {footer}
        <div className="qrCodeBlock">
          <div className={"qrCode" + (qrCode ? qrCode : "")} />
        </div>
      </div>
    </div>
  );
}

export default BasicCard;
