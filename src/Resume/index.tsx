import * as React from "react";

import "../own.css";
import { Back, LinkedIn } from "../Game/Components/Icons";
import { Github } from "../Game/Components/Icons/Github";

interface ResumeProps {
  isWin: boolean;
  goBack: () => void;
}
export function Resume(props: ResumeProps): JSX.Element {
  const { isWin, goBack } = props;
  return (
    <div
      style={{
        backgroundImage: "url(/assets/samoyedBackground2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // background: "darkred",
        height: "100%",
        minHeight: "100vh",
        width: "100vw",
        // position: "relative",
        fontFamily: "monospace",
        paddingBottom: "2rem",
        // overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          padding: "1rem",
          justifyContent: "end",
          width: "100vw",
          gridGap: "4px",
          color: "white",
          alignItems: "center",
        }}
      >
        <a
          href={"http://www.linkedin.com/in/jethary-alcid-5ab428153/"}
          target="_blank"
          rel="noopener noreferrer"
          className="nav"
        >
          LinkedIn
        </a>
        <div> | </div>
        <a
          href={"https://github.com/jerader"}
          target="_blank"
          rel="noopener noreferrer"
          className="nav"
        >
          Github
        </a>
        <div> | </div>
        <a
          href={"https://github.com/jthryyy"}
          target="_blank"
          rel="noopener noreferrer"
          className="nav"
        >
          Personal Github
        </a>
        <Back onClick={goBack} />
      </div>
      {/* {isWin ? ( */}
      <div className="moving-div">
        <img src={"/assets/Samoyed.png"} />
      </div>
      {/* ) : null} */}
      <>
        <About isWin={isWin} />
        <div
          style={{
            backgroundColor: "#96DEE9",
            padding: "1rem",
            margin: "2rem",
            borderRadius: "8px",
          }}
        >
          <div style={{ fontWeight: 700, color: "black", margin: "0rem 2rem" }}>
            Experiences
          </div>
          <div className="real-glass" style={{ margin: "2rem" }}>
            <div style={{ color: "black", marginBottom: "1rem" }}>
              Software Engineer - Opentrons{" "}
              <strong>(January 2023 - present)</strong>
            </div>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                Managed, as a PM and technical lead, the end-to-end development,
                architecture and successful software launches (versions 7.0.0,
                8.0.0, 8.1.0) of{" "}
                <a
                  href={"https://designer.opentrons.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Protocol Designer
                </a>
                , a visual protocol creation tool that streamlines the workflow
                for all customers.
              </li>
              <li>
                Lead the end-to-end development of{" "}
                <a
                  href={"https://labware.opentrons.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Labware Library
                </a>{" "}
                v3.0.0, a web application used by customers spanning over 40
                countries to access verified labware.
              </li>
              <li>
                Spearheaded the development and revitalization of the
                next-generation Opentrons Run app and touchscreen application,
                ensuring customer adoption in 90% of the top research
                universities.
              </li>
            </ul>
          </div>
          <div className="real-glass" style={{ margin: "2rem" }}>
            <div style={{ color: "black", marginBottom: "1rem" }}>
              Jr. Software Engineer - Opentrons
              <strong>(July 2021 - January 2023)</strong>
            </div>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                Developed the responsive and accessible frontend interfaces for
                the Heater-Shaker Module GEN1 and Thermocycler Module GEN2,
                leveraging React and Typescript.
              </li>
              <li>
                Collaborated with cross-functional teams such as UX and PMs to
                maintain quality code throughout the development lifecycle,
                leveraging Jira and Confluence.
              </li>
            </ul>
          </div>
          <div className="real-glass" style={{ margin: "2rem" }}>
            <div style={{ color: "black", marginBottom: "1rem" }}>
              Sr. Research Technician - Opentrons
              <strong>(October 2019 - July 2021)</strong>
            </div>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                Optimized COVID diagnostics protocols in python to run on the
                Opentrons robot, a critical factor in securing a significant
                $200 million series C funding at Opentrons.
              </li>
              <li>
                Successfully enhanced more than 20 extraction protocols in
                python for renowned brands such as Thermofisher and Zymo,
                increasing revenue and leading to 2{" "}
                <a
                  href={
                    "https://insights.opentrons.com/hubfs/Applications/Nucleic%20acid%20extraction/Magnetic%20Bead-based%20Nucleic%20Acid%20Extraction%20on%20OT-2%20Application%20Note.pdf?_gl=1*akjlsw*_ga*OTQ5MDA2NTg2LjE2NDMwNDQ4ODc.*_ga_66HK7MC5D7*MTcwNTM1MDc5MS40My4xLjE3MDUzNTA4ODEuMzMuMC4w*_ga_GNSMNLW4RY*MTcwNTM1MDc5MS43NS4xLjE3MDUzNTA4ODEuMzMuMC4w"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Publications
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="real-glass" style={{ margin: "2rem" }}>
            <div style={{ color: "black", marginBottom: "1rem" }}>
              Laboratory Technician - Princeton University
              <strong>(October 2018 - October 2019)</strong>
            </div>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                Developed python protocols to run on lab robots to automate
                extractions, which led to the categorization of over 384 bee
                genomes and used R for statistical analysis.
              </li>
            </ul>
          </div>
          <div style={{ fontWeight: 700, color: "black", margin: "2rem" }}>
            Projects
          </div>
          <div className="real-glass" style={{ margin: "2rem 2rem 0 2rem" }}>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                Developed and designed full Next.js frontend of Playmayte, a
                social networking application bringing videogamers together
                using React, Next.js, Typescript, Styled-components.{" "}
                <strong>April 2023 - present</strong>
              </li>
              <li>
                Creator of JRFeruelo, an art portfolio for Philippines
                mouth-painter John Roland Feruelo, using React, Next.js, and
                Typescript. <strong>June 2023</strong>
              </li>
            </ul>
          </div>{" "}
        </div>
      </>
    </div>
  );
}

interface AboutProps {
  isWin: boolean;
}

export const About = (props: AboutProps): JSX.Element => {
  const { isWin } = props;
  return (
    <div
      style={{
        backgroundColor: "#96DEE9",
        height: "15%",
        marginTop: "2rem",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
        color: "black",
        padding: "2rem",
        display: "flex",
        width: "100%",
        cursor: "default",
      }}
    >
      <div style={{ display: "flex" }}>
        <div
          style={{
            margin: "0 2rem",
            alignSelf: "center",
          }}
        >
          <img
            alt="portrait"
            src={"/assets/meAndHop.jpeg"}
            width="170px"
            style={{
              borderRadius: "3rem",
              boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>
        <div
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ marginTop: "1rem" }}>
            <div
              style={{
                width: "100%",
                fontSize: "1.6rem",
                display: "flex",
                fontWeight: 600,
                cursor: "default",
                flexDirection: "column",
              }}
            >
              <div>hi, I`m jet! </div>
              {isWin ? (
                <div>
                  It sounds like you won! I hope you don't mind that I've
                  invited Hopia to wander around.
                </div>
              ) : (
                <div>
                  I'm sorry you lost. Hopia unfortunately won't be joining you
                  as you wander around.
                </div>
              )}
            </div>
          </div>
          <div style={{ marginTop: "2rem" }}>
            I am a lab scientist turned developer who prioritizes creating
            user-friendly, visually stunning, and streamlined UI.
          </div>
          <div style={{ marginTop: "1rem" }}>
            Reach out if you want to chat about code, my game, or Hopia.
          </div>
          <div style={{ marginTop: "1rem", fontWeight: 700 }}>
            Email: jetharyalcid@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};
