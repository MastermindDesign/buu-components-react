import React, { Component } from "react";
import PropTypes from "prop-types";

import "./_basicCard.scss";

class BasicCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    onClick: PropTypes.func,
    title: PropTypes.string,
    message: PropTypes.string,
    color: PropTypes.oneOf([
      "white",
      "red",
      "blue",
      "green",
      "purple",
      "orange"
    ]),
    shape: PropTypes.oneOf(["round", "mini", "simple"]),
    size: PropTypes.oneOf(["xs", "sm", "lg"]),
    fill: PropTypes.bool,
    outline: PropTypes.bool,
    light: PropTypes.bool,
    level: PropTypes.bool
  };

  static defaultProps = {
    onClick: () => {},
    title: "Hello",
    message: "Hello, World!",
    color: undefined,
    shape: undefined,
    size: undefined,
    fill: false,
    outline: false,
    light: false,
    level: false,
    glow: false
  };

  render() {
    let { title, message, footer } = this.props;
    return (
      <div className="card basic-card">
        <div className="card-body is-link">
          <svg height="40" width="60">
            <g fill="none">
              <path className="card-stroke" stroke-width="4" d="M5 20 l215 0" />
            </g>
          </svg>
          <span className="card-more float-right">more&nbsp;></span>
          <h2 className="card-title">{title}</h2>
          <h5 className="card-text">{message}</h5>
          {footer}
        </div>
      </div>
    );
  }
}

export default BasicCard;
