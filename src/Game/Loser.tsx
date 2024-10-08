import * as React from "react";
import { TypewriterEffect } from "./utils";
import { HandleEnter } from "./Components/HandleEnter";
import final from "../Assets/finalBackground.jpg";
import { chatClassName, textClassName } from "../constants";

interface LoserProps {
  onClick: () => void;
}
export function Loser(props: LoserProps): JSX.Element {
  const { onClick } = props;
  return (
    <HandleEnter onEnter={onClick}>
      <div
        style={{
          backgroundColor: "black",
          backgroundImage: `url(${final})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          fontFamily: "Open Sans, sans-serif",
          flexDirection: "column",
        }}
      >
        <div
          className={chatClassName}
          style={{
            height: "max-content",
            padding: "1rem",
            borderRadius: "8px",
            marginBottom: "1rem",
            boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.3)",
            backgroundColor: "#D2D060",
            display: "flex",
            flexDirection: "column",
            gridGap: "8px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gridGap: "2px" }}>
            <div className={textClassName} style={{ fontWeight: 700 }}>
              {"NARRATOR:"}
            </div>
            <TypewriterEffect text="YOU LOSE. Sorry, you do not get to meet Hopia." />
          </div>
          <button className={`buttonNext ${textClassName}`} onClick={onClick}>
            Look at resume
          </button>
        </div>
      </div>
    </HandleEnter>
  );
}
