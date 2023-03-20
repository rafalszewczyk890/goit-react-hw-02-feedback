import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    const { name } = event.target;

    this.setState({
      [name]: this.state[name] + 1,
    });
    console.log(event);
  };

  render() {
    return (
      <>
        <h5>Please leave feedback</h5>
        <button name="good" onClick={this.handleClick}>
          Good
        </button>
        <button name="neutral" onClick={this.handleClick}>
          Neutral
        </button>
        <button name="bad" onClick={this.handleClick}>
          Bad
        </button>

        <h5>Statistics</h5>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
      </>
    );
  }
}

export default App;
