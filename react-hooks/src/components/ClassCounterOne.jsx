import React, { Component } from "react";

class ClassCounterOne extends Component {
  state = {
    count: 0,
    name: "",
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleInput = (event) => {
    this.setState({ name: event.target.value });
  };

  componentDidMount() {
    document.title = `Click ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = `Click ${this.state.count} times`;
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleInput}
        />
        <button onClick={this.handleIncrement}>
          Click {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounterOne;
