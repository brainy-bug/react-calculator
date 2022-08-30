// Import react and reactDOM libaries
import React from "react";

// Import Styles
import "./App.css";

import * as math from "mathjs";

// Import components
import Buttons from "./Buttons/Buttons";
import Input from "./Input/Input";

// Read a react component
class App extends React.Component {
  state = { str: "" };

  addToInput = (val) => {
    this.setState({ str: this.state.str + val });
  };

  handleEqual = () => {
    try {
      if (math.evaluate(this.state.str) === Infinity) throw new Error();
      this.setState({ str: math.round(math.evaluate(this.state.str), 3) + "" });
    } catch (e) {
      alert(`Error! You tried evaluating ${this.state.str}`);
    }
  };

  handleClear = (val) => {
    if (val === "AC") this.setState({ str: "" });
    if (val === "C")
      this.setState({ str: this.state.str.split("").slice(0, -1).join("") });
  };

  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="heading">
            <div className="logo">Yinka's Calc.</div>
          </div>
          <Input inputValue={this.state.str} />
          <Buttons
            onClear={this.handleClear}
            handleClick={this.addToInput}
            values={["AC", "C", "", "%"]}
          />
          <Buttons
            handleClick={this.addToInput}
            values={["7", "8", "9", "/"]}
          />
          <Buttons
            handleClick={this.addToInput}
            values={["4", "5", "6", "X"]}
          />
          <Buttons
            handleClick={this.addToInput}
            values={["1", "2", "3", "-"]}
          />
          <Buttons
            handleEqual={this.handleEqual}
            handleClick={this.addToInput}
            values={["0", ".", "=", "+"]}
          />
        </div>
      </div>
    );
  }
}

export default App;
