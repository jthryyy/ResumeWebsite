import * as React from "react";
import { TypewriterEffect } from "./utils";
import { HandleEnter } from "./Components/HandleEnter";
import final from "../Assets/finalBackground.jpg";
import avatar from "../Assets/jet_2.png";
import hopia from "../Assets/Samoyed.png";
import { useAudio } from "../AudioContext";
import { chatClassName, textClassName } from "../constants";

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
  const { isMuted, backgroundAudioRef } = useAudio();
  const [index, setIndex] = React.useState<number>(0);
  const currentDialogue = dialogues[index];
  const { character, text } = currentDialogue;

  React.useEffect(() => {
    if (backgroundAudioRef.current) {
      if (isMuted) {
        backgroundAudioRef.current.pause();
      } else {
        backgroundAudioRef.current.play();
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
        <audio ref={backgroundAudioRef} src={"/assets/dogBark.wav"} autoPlay />
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
          fontFamily: "Open Sans, sans-serif",
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
          className={chatClassName}
          style={{
            height: "max-content",
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
              className={textClassName}
              style={{ fontWeight: 700 }}
            >{`${character.toUpperCase()}: `}</div>
            <TypewriterEffect text={text} />
          </div>
          <button
            className={`buttonNext ${textClassName}`}
            onClick={handleNextClick}
          >
            {index === 3 ? "Look at resume" : "Next"}
          </button>
        </div>
      </div>
    </HandleEnter>
  );
};
