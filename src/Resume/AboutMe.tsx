import * as React from "react";
import { Back } from "../Game/Components/Icons";
import bedroom from "../Assets/bedroom.jpg";
import { chatClassName, textClassName } from "../constants";
import { TypewriterEffect } from "../Game/utils";
import { HandleEnter } from "../Game/Components/HandleEnter";
import avatar from "../Assets/jet_2.png";
import hop from "../Assets/Samoyed.png";
import lenny from "../Assets/len_2.png";
import whole from "../Assets/wholeFam.png";

interface DialogueEntry {
  character: Character;
  text: string;
}

type Character = "len" | "jet" | "hopia";

const winDialogues: DialogueEntry[] = [
  {
    character: "jet",
    text: "Congratulations on winning the game!",
  },
  {
    character: "len",
    text: "I hope you have enjoyed Hopia following you around.",
  },
  {
    character: "hopia",
    text: "Borf! Borf!!!",
  },
];

const loseDialogues: DialogueEntry[] = [
  {
    character: "jet",
    text: "Unfortunately, you didn't win...",
  },
  {
    character: "jet",
    text: "Hopia is at daycare so you missed meeting her again, I'm afraid.",
  },
  {
    character: "jet",
    text: "You can always play again by going back to home.",
  },
];

interface Props {
  goBack: () => void;
  isWon: boolean;
}

export function AboutMe(props: Props): JSX.Element {
  const { goBack, isWon } = props;
  const [index, setIndex] = React.useState<number>(0);
  const [endScene, setScene] = React.useState<boolean>(false);
  const dialogues = isWon ? winDialogues : loseDialogues;
  const currentDialogue = dialogues[index];
  const { character, text } = currentDialogue;

  const handleNextClick = (): void => {
    const nextIndex = index + 1;
    if (nextIndex < dialogues.length) {
      setIndex(nextIndex);
    } else {
      setScene(true);
    }
  };

  let img = avatar;
  if (character === "len") {
    img = lenny;
  } else if (character === "hopia") {
    img = hop;
  }
  return (
    <HandleEnter onEnter={handleNextClick}>
      <>
        <div
          style={{
            backgroundColor: "black",
            backgroundImage: `url(${bedroom})`,
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
              padding: "8px",
              justifyContent: "space-between",
            }}
          >
            <Back onClick={props.goBack} />
            {endScene ? (
              <>
                <div
                  className={textClassName}
                  style={{
                    display: "flex",
                    gridGap: "4px",
                    color: "white",
                    alignItems: "center",
                  }}
                >
                  <a
                    href={"http://www.linkedin.com/in/jethary-alcid-5ab428153/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resumeLink"
                  >
                    LinkedIn
                  </a>
                  <div style={{ color: "darkred" }}> | </div>
                  <a
                    href={"https://github.com/jerader"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resumeLink"
                  >
                    Github
                  </a>
                  <div style={{ color: "darkred" }}> | </div>
                  <a
                    href={"https://github.com/jthryyy"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resumeLink"
                  >
                    Personal Github
                  </a>
                </div>

                {isWon ? (
                  <div
                    style={{
                      display: "flex",
                      position: "fixed",
                      bottom: 0,
                      left: 0,
                      height: "auto",
                      maxHeight: "90%",
                      width: "auto",
                    }}
                  >
                    <img src={whole} />
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      position: "fixed",
                      bottom: 0,
                      left: 0,
                      width: "80%",
                      height: "auto",
                    }}
                  >
                    <img src={avatar} />
                  </div>
                )}
              </>
            ) : null}
          </div>
          {endScene ? (
            <>
              {" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  maxHeight: "80%",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  className={`real-glass ${textClassName}`}
                  style={{ margin: "2rem", width: "50%" }}
                >
                  <strong>Hi! I hope you enjoyed my portfolio.</strong>
                  <div>
                    Feel free to email me at{" "}
                    <strong
                      style={{ fontWeight: 600 }}
                      className="link"
                      onClick={() => {
                        navigator.clipboard.writeText("jetharyalcid@gmail.com");
                        alert(
                          "Jet's email address has been copied to your clipboard"
                        );
                      }}
                    >
                      jetharyalcid@gmail.com
                    </strong>{" "}
                    if you want to talk about code, jobs, or Hopia.
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
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
                <div className="image-wrapper">
                  <img src={img} alt="Description" className="fade-in-image" />
                </div>

                <div
                  className={chatClassName}
                  style={{
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
                </div>
              </div>
            </>
          )}
        </div>
      </>
    </HandleEnter>
  );
}
