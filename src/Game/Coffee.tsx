import * as React from "react";
import { TypewriterEffect } from "./utils";
import { HandleEnter } from "./Components/HandleEnter";
import { useAudio } from "../AudioContext";
import barista from "../Assets/barista_2.png";
import backgroundCoffee from "../Assets/BackgroundCoffee.jpg";
import avatarBar from "../Assets/jet_2.png";
import { chatClassName, textClassName } from "../constants";
import type { WorkType } from ".";
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
  { character: "barista", text: "I have an order for a large iced latte!" },
  {
    character: "narrator",
    text: "Without hestitation, you walk towards the counter...",
  },
  { character: "you", text: "Thanks!..." },
  { character: "jet", text: "Wait! I think that latte is mine actually." },
  {
    character: "barista",
    text: "Oh, my bad, this is for Megatron. Neither of you are Megatron right?",
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
  "React-hook-form",
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
  "Confluence",
  "Designer systems",
  "Figma",
  "Product Management",
  "Jira",
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
  const { isMuted, toggleAudio, backgroundAudioRef } = useAudio();
  const [index, setIndex] = React.useState<number>(0);
  const [nameModal, setNameModal] = React.useState<boolean>(false);
  const [workModal, setWorkModal] = React.useState<boolean>(false);
  const [barModal, setBarModal] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (backgroundAudioRef.current) {
      if (isMuted) {
        backgroundAudioRef.current.pause();
      } else {
        backgroundAudioRef.current.play();
      }
    }
  }, [isMuted]);

  const currentDialogue = dialogues[index];
  const { character, text } = currentDialogue;

  const handleNextClick = (): void => {
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

  const handleEnter = (): void => {
    if (nameModal && name !== "") {
      setIndex(index + 1);
      setNameModal(false);
    } else if (workModal) {
      setWorkModal(false);
      setWork("swe");
      setIndex(index + 1);
    } else if (barModal) {
      setBarModal(false);
      setBar("yes");
      onClick();
    }
  };

  return (
    <HandleEnter
      onEnter={
        !nameModal && !workModal && !barModal ? handleNextClick : handleEnter
      }
    >
      <div
        style={{
          backgroundImage: `url(${backgroundCoffee})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "black",
          height: "100vh",
          width: "100vw",
          fontFamily: "Open Sans, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "1rem",
            justifyContent: "end",
            width: "100vw",
            gridGap: "8px",
          }}
        >
          <button
            className="skipButton"
            onClick={() => {
              onClick();
              setBar("no");
            }}
          >
            Skip
          </button>
          <div>|</div>
          <div className="skipButton">
            <audio
              ref={backgroundAudioRef}
              src={"/assets/Bach2.mp3"}
              autoPlay
              loop
            />
            <div
              onClick={toggleAudio}
              style={{
                cursor: "pointer",
              }}
            >
              {isMuted ? "Audio" : "Mute"}
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100vw",
            height: "calc(100vh - 56px)",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            fontFamily: "Open Sans, sans-serif",
            flexDirection: "column",
          }}
        >
          {character === "jet" || character === "barista" ? (
            <div className="image-wrapper">
              <img
                src={character === "jet" ? avatarBar : barista}
                alt={character}
                className={
                  index === 9
                    ? "hidden lg:block fade-in-image"
                    : "fade-in-image"
                }
              />
              {index === 9 ? (
                <div className="skills-wrapper">
                  <div
                    className={textClassName}
                    style={{ fontWeight: 700, color: "black" }}
                  >
                    Skills
                  </div>
                  <ul
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      gridGap: "8px",
                    }}
                  >
                    {skills.map((skill) => (
                      <li
                        className={`glass ${textClassName}`}
                        key={skill}
                        style={{
                          flex: "0 1 auto",
                          padding: "0.5rem",
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
            className={chatClassName}
            style={{
              height: "max-content",
              padding: "1rem",
              borderRadius: "8px",
              marginBottom: "1rem",
              boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.3)",
              background: "#96DEE9",
              display: "flex",
              flexDirection: "column",
              gridGap: "8px",
              justifyContent: "space-between",
            }}
          >
            {nameModal ? (
              <>
                <div className={textClassName}>Enter your name:</div>
                <input
                  style={{
                    borderRadius: "16px",
                    padding: "8px 16px",
                    width: "100%",
                  }}
                  autoFocus
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <button
                  className={`buttonNext ${textClassName}`}
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
                  className={`workButton ${textClassName}`}
                  onClick={() => {
                    setWorkModal(false);
                    setWork("swe");
                    setIndex(index + 1);
                  }}
                >
                  Software engineer
                </button>
                <button
                  className={`workButton ${textClassName}`}
                  onClick={() => {
                    setWorkModal(false);
                    setWork("recruiter");
                    setIndex(index + 1);
                  }}
                >
                  Recruiter
                </button>
                <button
                  className={`workButton ${textClassName}`}
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
                  className={`workButton ${textClassName}`}
                  onClick={() => {
                    setBarModal(false);
                    setBar("yes");
                    onClick();
                  }}
                >
                  Yes! Sounds like fun, I will see you there!
                </button>
                <button
                  className={`workButton ${textClassName}`}
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
                    className={textClassName}
                    style={{ fontWeight: 700 }}
                  >{`${character.toUpperCase()}: `}</div>
                  <TypewriterEffect text={text} />
                </div>
                <button
                  className={`buttonNext ${textClassName}`}
                  onClick={handleNextClick}
                >
                  Next
                </button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </HandleEnter>
  );
};
