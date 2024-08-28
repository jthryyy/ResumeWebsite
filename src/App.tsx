import React, { Component } from "react";
import { Container } from "./Container";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="w-full min-h-screen">
        <Container />
      </div>
    );
  }
}

export default App;
