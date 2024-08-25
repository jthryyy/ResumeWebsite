import * as React from "react";
import { TypewriterEffect } from "./utils";
import type { WorkType } from ".";

import "../own.css";

interface DialogueEntry {
  character: Character;
  text: string;
}

type Character = "narrator" | "you" | "jet" | "barista";

const dialogues: DialogueEntry[] = [
  {
    character: "narrator",
    text: "You're on a coffee run at the nearby cafe, waiting for your order...then suddenly...",
  },
  { character: "barista", text: "I have an order for a large iced matcha!" },
  {
    character: "narrator",
    text: "Without hestitation, you walk towards the counter...",
  },
  { character: "you", text: "Thanks!..." },
  { character: "jet", text: "Wait! I think that matcha is mine actually." },
  {
    character: "barista",
    text: "Oh, my bad, this is for Amelia. Neither of you are Amelia right?",
  },
  {
    character: "narrator",
    text: "You nod. You step back to wait for your order...",
  },
  {
    character: "jet",
    text: "Hey, don't worry. I almost grab the wrong cup more times than not. You look new in town, I'm Jethary Alcid but I go by Jet! What's your name?",
  },
  {
    character: "jet",
    text: "It's nice to meet you! So what do you do for work?",
  },
  {
    character: "jet",
    text: "Wow, that's awesome! It just so happens that I'm a software engineer. I work primarily on front-end development and specialize in React, Javascript, Typescript, and Next.js.",
  },
  {
    character: "jet",
    text: "Well I gotta run, I have a dog at home named Hopia who I have to tend to. There is a community game night at the Biergarten tonight. You should come! It's great to meet new people that way.",
  },
];

const skills = [
  "React",
  "Javascript",
  "Typescript",
  "Next.js",
  "Redux",
  "Vite/Vitest",
  "HTML",
  "CSS",
  "Python",
  "Jest",
  "Cypress",
  "Unit testing",
  "e2e & integration testing",
  "Git/Github",
  "Github Actions",
  "Styled-components",
  "graphQL",
  "React-query",
  "JQuery",
  "SQL",
  "Storybook",
  "AWS SDK",
  "Webpack",
  "Bootstrap",
  "Responsive design",
  "Designer systems",
  "React-hook-form",
  "Figma",
  "Product Management",
  "Jira",
  "Confluence",
  "Scrum",
];

interface CoffeeProps {
  onClick: () => void;
  setName: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setWork: React.Dispatch<React.SetStateAction<WorkType | null>>;
  setBar: React.Dispatch<React.SetStateAction<"yes" | "no" | null>>;
}

export const Coffee = (props: CoffeeProps): JSX.Element => {
  const { onClick, setName, name, setWork, setBar } = props;
  const [index, setIndex] = React.useState<number>(0);
  const [nameModal, setNameModal] = React.useState<boolean>(false);
  const [workModal, setWorkModal] = React.useState<boolean>(false);
  const [barModal, setBarModal] = React.useState<boolean>(false);
  const currentDialogue = dialogues[index];
  const { character, text } = currentDialogue;

  const handleNextClick = () => {
    const nextIndex = index + 1;
    if (index === 7) {
      setNameModal(true);
    } else if (index === 8) {
      setWorkModal(true);
    } else if (index === 10) {
      setBarModal(true);
    } else if (nextIndex < dialogues.length) {
      setIndex(nextIndex);
    } else {
      onClick();
    }
  };

  return (
    <>
      <button
        style={{
          padding: "1rem",
          display: "flex",
          justifyContent: "end",
          width: "100vw",
        }}
        onClick={() => {
          onClick();
          setBar("no");
        }}
      >
        Skip
      </button>
      <div
        style={{
          width: "100vw",
          height: "calc(100vh - 56px)",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          fontFamily: "monospace",
          flexDirection: "column",
        }}
      >
        {character === "jet" ? (
          <div className="image-wrapper">
            <img
              src="/assets/avatarCoffeeImage.png"
              alt="Description"
              className="fade-in-image"
            />
            {index === 9 ? (
              <div className="skills-wrapper">
                <div style={{ fontWeight: 700 }}>Skills</div>
                <ul
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    listStyle: "none", // Removes bullets from list items
                    padding: 0, // Removes default padding from the ul
                    margin: 0, // Removes default margin from the ul
                    gridGap: "8px", // Space between the list items
                  }}
                >
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      style={{
                        color: "white",
                        flex: "0 1 auto",
                        backgroundColor: "darkred",
                        padding: "0.5rem",
                        borderRadius: "4px",
                      }}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ) : null}
        <div
          style={{
            width: "60vw",
            height: "max-content",
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
          {nameModal ? (
            <>
              <div>Enter your name:</div>
              <input
                style={{
                  borderRadius: "16px",
                  padding: "8px 16px",
                  width: "40%",
                }}
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <button
                className="buttonNext"
                disabled={name === ""}
                onClick={() => {
                  setIndex(index + 1);
                  setNameModal(false);
                }}
              >
                Confirm
              </button>
            </>
          ) : null}
          {workModal ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <button
                className="workButton"
                onClick={() => {
                  setWorkModal(false);
                  setWork("swe");
                  setIndex(index + 1);
                }}
              >
                Software engineer
              </button>
              <button
                className="workButton"
                onClick={() => {
                  setWorkModal(false);
                  setWork("recruiter");
                  setIndex(index + 1);
                }}
              >
                Recruiter for software engineers
              </button>
              <button
                className="workButton"
                onClick={() => {
                  setWorkModal(false);
                  setWork("other");
                  setIndex(index + 1);
                }}
              >
                Other
              </button>
            </div>
          ) : null}
          {barModal ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <button
                className="workButton"
                onClick={() => {
                  setBarModal(false);
                  setBar("yes");
                  onClick();
                }}
              >
                Yes! Sounds like fun, I will see you there!
              </button>
              <button
                className="workButton"
                onClick={() => {
                  setBarModal(false);
                  setBar("no");
                  onClick();
                }}
              >
                No thank you, I have plans
              </button>
            </div>
          ) : null}
          {!nameModal && !workModal && !barModal ? (
            <>
              <div style={{ display: "flex", gridGap: "2px" }}>
                <div
                  style={{ fontWeight: 700 }}
                >{`${character.toUpperCase()}: `}</div>
                <TypewriterEffect text={text} />
              </div>
              <button className="buttonNext" onClick={handleNextClick}>
                Next
              </button>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};
