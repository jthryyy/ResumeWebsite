import * as React from "react";
import { TypewriterEffect } from "./utils";
import { HandleEnter } from "./Components/HandleEnter";

import "../own.css";

interface LoserProps {
  onClick: () => void;
}
export function Loser(props: LoserProps): JSX.Element {
  const { onClick } = props;
  return (
    <HandleEnter onEnter={onClick}>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          fontFamily: "monospace",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "60vw",
            height: "15vh",
            padding: "1rem",
            borderRadius: "8px",
            marginBottom: "1rem",
            boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.3)",
            background: "linear-gradient(45deg, #e0bbe4, #add8e6)",
            display: "flex",
            flexDirection: "column",
            gridGap: "8px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gridGap: "2px" }}>
            <div style={{ fontWeight: 700 }}>{"NARRATOR:"}</div>
            <TypewriterEffect text="YOU LOSE. Sorry, you do not get to meet Hopia." />
          </div>
          <button className="buttonNext" onClick={onClick}>
            Look at resume
          </button>
        </div>
      </div>
    </HandleEnter>
  );
}
