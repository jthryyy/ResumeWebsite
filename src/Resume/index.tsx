import * as React from "react";

import "../own.css";

interface ResumeProps {
  isWin: boolean;
  goBack: () => void;
}
export function Resume(props: ResumeProps): JSX.Element {
  const { isWin, goBack } = props;
  return (
    <div
      style={{
        backgroundImage: "url(/assets/finalBackground.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        fontFamily: "monospace",
      }}
    >
      <div
        style={{
          display: "flex",
          padding: "1rem",
          justifyContent: "end",
          width: "100vw",
          gridGap: "8px",
          color: "white",
        }}
      >
        <button className="button" onClick={goBack}>
          Contact me
        </button>
        <button className="button" onClick={goBack}>
          LinkedIn
        </button>
        <button className="button" onClick={goBack}>
          Back to game
        </button>
      </div>
      <div className="experience-wrapper">
        <div style={{ fontWeight: 700, color: "black" }}>Experiences</div>
        <div
          style={{
            backgroundColor: "white",
            padding: "8px",
            borderRadius: "8px",
          }}
        >
          Managed, as a PM and technical lead, the end-to-end development,
          architecture and successful software launches (versions 7.0.0, 8.0.0,
          8.1.0) of{" "}
          <a
            href={"https://designer.opentrons.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Protocol Designer
          </a>
          , a visual protocol creation tool that streamlines the workflow for
          all customers.
        </div>
        <div
          style={{
            backgroundColor: "white",
            padding: "8px",
            borderRadius: "8px",
          }}
        >
          Lead the end-to-end development of{" "}
          <a
            href={"https://labware.opentrons.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Labware Library
          </a>{" "}
          v3.0.0, a web application used by customers spanning over 40 countries
          to access verified labware.
        </div>
        <div
          style={{
            backgroundColor: "white",
            padding: "8px",
            borderRadius: "8px",
          }}
        >
          Spearheaded the development and revitalization of the next-generation
          Opentrons Run app and touchscreen application, ensuring customer
          adoption in 90% of the top research universities.
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <div className="experience-wrapper">
          <div style={{ fontWeight: 700, color: "black" }}>Projects</div>
          <div
            style={{
              backgroundColor: "white",
              padding: "8px",
              borderRadius: "8px",
            }}
          >
            Developed and designed full Next.js frontend of Playmayte, a social
            networking application bringing videogamers together using React,
            Next.js, Typescript, Styled-components.{" "}
            <strong>April 2023 - present</strong>
          </div>
          <div
            style={{
              backgroundColor: "white",
              padding: "8px",
              borderRadius: "8px",
            }}
          >
            Creator of JRFeruelo, an art portfolio for Philippines mouth-painter
            John Roland Feruelo, using React, Next.js, and Typescript.{" "}
            <strong>June 2023</strong>
          </div>
        </div>
      </div>
      {isWin ? (
        <img
          src={"/assets/Samoyed.png"}
          alt="Description"
          style={{
            height: "25vh",
            width: "max-content",
            position: "absolute",
            bottom: 0,
            right: "5%",
          }}
        />
      ) : null}
    </div>
  );
}
