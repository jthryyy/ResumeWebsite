import * as React from "react";
import sc from "../Assets/scienceBackground.jpg";
import { textClassName } from "../constants";
import { Back } from "../Game/Components/Icons";

interface Props {
  goBack: () => void;
  isWon: boolean;
}

export function Science(props: Props): JSX.Element {
  const { goBack, isWon } = props;
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          backgroundImage: `url(${sc})`,
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
              Unfortunately, dogs are not allowed in a science lab...
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
              <div>
                <strong>Sr. Research Technician</strong> - Opentrons Labworks
                Inc, October 2019 - July 2021
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
                    className="resumeLink"
                  >
                    Publications
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`real-glass ${textClassName}`}
            style={{ margin: "2rem" }}
          >
            <div style={{ color: "black", marginBottom: "1rem" }}>
              <strong>Laboratory Technician</strong> - Princeton University,
              October 2018 - October 2019
            </div>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                Developed python protocols to run on lab robots to automate
                extractions, which led to the categorization of over 384 bee
                genomes and used R for statistical analysis.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
