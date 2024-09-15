import * as React from "react";
import sw from "../Assets/softwareBackground.jpg";
import { Back } from "../Game/Components/Icons";
import samoyed from "../Assets/Samoyed.png";
import { textClassName } from "../constants";

interface Props {
  goBack: () => void;
  isWon: boolean;
}
export function Office(props: Props): JSX.Element {
  const { isWon } = props;
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          backgroundImage: `url(${sw})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
          fontFamily: "Open Sans, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            gridGap: "8px",
            padding: "8px",
            justifyContent: "space-between",
          }}
        >
          <Back onClick={props.goBack} />
          {isWon ? (
            <div className={textClassName} style={{ color: "white" }}>
              Did you know, it's a dog friendly office!?
            </div>
          ) : null}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gridGap: "8px",
            maxHeight: "80%",
            overflow: "scroll",
          }}
        >
          <div
            className={`real-glass ${textClassName}`}
            style={{ margin: "2rem" }}
          >
            <div style={{ color: "black", marginBottom: "1rem" }}>
              <strong> Software Engineer</strong> - Opentrons Labworks Inc,
              January 2023 - present
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
                  className="resumeLink"
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
                  className="resumeLink"
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
          <div
            className={`real-glass ${textClassName}`}
            style={{ margin: "2rem" }}
          >
            <div style={{ color: "black", marginBottom: "1rem" }}>
              <strong> Jr. Software Engineer</strong> - Opentrons Labworks Inc,
              July 2021 - January 2023
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
        </div>
      </div>
      {isWon ? (
        <div
          style={{
            display: "flex",
            position: "fixed",
            bottom: 0,
            left: "50%",
            height: "30%",
            width: "45%",
          }}
        >
          <img src={samoyed} />
        </div>
      ) : null}
    </>
  );
}
