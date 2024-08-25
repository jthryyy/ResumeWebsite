import * as React from "react";
import { TypewriterEffect } from "./utils";
import "../own.css";

interface DialogueEntry {
  character: Character;
  text: string;
}

type Character = "narrator" | "jet" | "hopia";

const dialogues: DialogueEntry[] = [
  {
    character: "narrator",
    text: "The next morning you wake up to an email from Jet. You open it",
  },
  {
    character: "jet",
    text: "We are on our way to the park! Stop by and meet Hopia!",
  },
  {
    character: "hopia",
    text: "Arf arf!!!",
  },
  {
    character: "narrator",
    text: "YOU WIN!",
  },
];

interface FinaleProps {
  onClick: () => void;
}

export const Final = (props: FinaleProps): JSX.Element => {
  const { onClick } = props;
  const [index, setIndex] = React.useState<number>(0);
  const currentDialogue = dialogues[index];
  const { character, text } = currentDialogue;

  const handleNextClick = () => {
    const nextIndex = index + 1;
    if (nextIndex < dialogues.length) {
      setIndex(nextIndex);
    } else {
      onClick();
    }
  };

  return (
    <>
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
        {character === "jet" ? (
          <div className="image-wrapper">
            <img
              src="/assets/avatarBar.png"
              alt="Description"
              className="fade-in-image"
            />
          </div>
        ) : null}
        {character === "hopia" ? (
          <div className="image-wrapper">
            <img
              src="/assets/Samoyed.png"
              alt="Description"
              className="fade-in-image"
            />
          </div>
        ) : null}
        <div
          style={{
            width: "60vw",
            height: "max-content",
            padding: "1rem",
            borderRadius: "8px",
            boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.3)",
            marginBottom: "1rem",
            background: "linear-gradient(45deg, #e0bbe4, #add8e6)",
            display: "flex",
            flexDirection: "column",
            gridGap: "8px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gridGap: "2px" }}>
            <div
              style={{ fontWeight: 700 }}
            >{`${character.toUpperCase()}: `}</div>
            <TypewriterEffect text={text} />
          </div>
          <button className="buttonNext" onClick={handleNextClick}>
            {index === 3 ? "Look at resume" : "Next"}
          </button>
        </div>
      </div>
    </>
  );
};
