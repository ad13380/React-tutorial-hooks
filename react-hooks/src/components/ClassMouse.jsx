import React, { Component } from "react";

class ClassMouse extends Component {
  state = {
    mouse_X: null,
    mouse_Y: null,
  };

  handleMouseMove = (event) => {
    this.setState({
      mouse_X: event.screenX,
      mouse_Y: event.screenY,
    });
  };

  componentDidMount() {
    window.addEventListener("mousemove", (e) => {
      this.handleMouseMove(e);
    });
  }

  render() {
    return (
      <div>
        <h4>Mouse position X: {this.state.mouse_X}</h4>
        <h4>Mouse position Y: {this.state.mouse_Y}</h4>
      </div>
    );
  }
}

export default ClassMouse;
