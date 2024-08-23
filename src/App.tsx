import React, { Component } from "react";
import "./style.css";
import ThreeJSModel from "./ThreeD/scene";

class App extends Component {
  render() {
    return (
      <div
        // className="w-screen min-h-screen flex justify-center"
        style={{
          // backgroundColor: "#14131A",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ fontSize: "5rem", color: "grey", textAlign: "center" }}>
          Jethary Alcid
        </div>

        <div style={{ paddingLeft: "20%", width: "100%", height: "100vh" }}>
          <ThreeJSModel />
        </div>
      </div>
    );
  }
}

export default App;
