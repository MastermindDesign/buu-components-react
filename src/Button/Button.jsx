import React, { Component } from "react";
import PropTypes from "prop-types";

import "./_button.scss";

class Button extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    static propTypes = {
      onClick: PropTypes.func,
      children: PropTypes.any,
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
      children: "BTN",
      color: undefined,
      shape: undefined,
      size: undefined,
      fill: false,
      outline: false,
      light: false,
      level: false,
      glow: false
    };
  
    classNames() {
      let names = ["btn"];
  
      switch (this.props.color) {
        case "white":
          names.push("btn-white");
          break;
        case "red":
          names.push("btn-red");
          break;
        case "blue":
          names.push("btn-blue");
          break;
        case "green":
          names.push("btn-green");
          break;
        case "purple":
          names.push("btn-purple");
          break;
        case "orange":
          names.push("btn-orange");
          break;
        default:
          //names.push("btn-default");
          break;
      }
  
      switch (this.props.shape) {
        case "round":
          names.push("btn-round");
          break;
        case "mini":
          names.push("btn-fab");
          break;
        default:
          break;
      }
  
      switch (this.props.size) {
        case "xs":
          names.push("btn-xs");
          break;
        case "sm":
          names.push("btn-sm");
          break;
        case "lg":
          names.push("btn-lg");
          break;
        default:
          break;
      }

      if(this.props.fill) {
        names.push("fill");
      }

      if(this.props.outline) {
        names.push("outline");
      }

      if(this.props.light) {
          names.push("is-light");
      }

      if(this.props.level) {
        names.push("btn-block");
      }

      if(this.props.glow) {
        names.push("has-glow");
      }
  
      return names.join(" ");
    }
  
    render() {
      const { children, onClick } = this.props;
      return (
        <button
          className={this.classNames()}
          onClick={onClick}
          style={{ position: "relative" }}
        >
          {children}
        </button>
      );
    }
}
  

export default Button;
