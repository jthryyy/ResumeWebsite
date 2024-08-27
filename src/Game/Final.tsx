import * as React from "react";
import { TypewriterEffect } from "./utils";
import { HandleEnter } from "./Components/HandleEnter";
import final from "../Assets/finalBackground.jpg";
import avatar from "../Assets/jet_2.png";
import hopia from "../Assets/Samoyed.png";
import { useAudio } from "../AudioContext";
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
    text: "Borf! Borf!!!",
  },
  {
    character: "narrator",
    text: "CONGRATULATIONS, YOU WIN!",
  },
];

interface FinaleProps {
  onClick: () => void;
}

export const Final = (props: FinaleProps): JSX.Element => {
  const { onClick } = props;
  const { isMuted, audioRef } = useAudio();
  const [index, setIndex] = React.useState<number>(0);
  const currentDialogue = dialogues[index];
  const { character, text } = currentDialogue;

  React.useEffect(() => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  }, [isMuted]);

  const handleNextClick = (): void => {
    const nextIndex = index + 1;
    if (nextIndex < dialogues.length) {
      setIndex(nextIndex);
    } else {
      onClick();
    }
  };

  return (
    <HandleEnter onEnter={handleNextClick}>
      {index === 2 ? (
        <audio ref={audioRef} src={"/assets/dogBark.wav"} autoPlay loop />
      ) : null}
      <div
        style={{
          backgroundImage: `url(${final})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
            <img src={avatar} alt="Description" className="fade-in-image" />
          </div>
        ) : null}
        {character === "hopia" ? (
          <div className="image-wrapper">
            <img src={hopia} alt="Description" className="fade-in-image" />
          </div>
        ) : null}
        <div
          style={{
            width: "60vw",
            height: "15vh",
            padding: "1rem",
            borderRadius: "8px",
            backgroundColor: "#D2D060",
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
    </HandleEnter>
  );
};
