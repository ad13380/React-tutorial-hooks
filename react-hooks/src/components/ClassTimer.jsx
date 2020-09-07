import React, { Component } from "react";

class ClassTimer extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    this.countInterval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.countInterval);
  }

  render() {
    return (
      <div>
        Class counter: {this.state.count}
        <button onClick={() => clearInterval(this.countInterval)}>Stop</button>
      </div>
    );
  }
}

export default ClassTimer;
