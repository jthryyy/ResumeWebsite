import * as React from "react";
import { TypewriterEffect } from "./utils";
import "../own.css";

interface DialogueEntry {
  character: Character;
  text: string;
}

type Character = "narrator" | "you" | "jet" | "len";

const dialogues: DialogueEntry[] = [
  {
    character: "narrator",
    text: "With a gin & tonic in hand, you scout the room. There are quite a few people.",
  },
  {
    character: "jet",
    text: "Hey! over here! I'm glad you made it! Why don't you grab a seat?",
  },
  {
    character: "narrator",
    text: "You walk over and take a seat next to Jet.",
  },
  { character: "jet", text: "This dude over here is my husband, Len." },
  {
    character: "len",
    text: "Hey, Jet told me about your encounter at the cafe this morning. Nice to meet you!",
  },
  {
    character: "narrator",
    text: "You smile and say hey.",
  },
  { character: "you", text: "So how long have you been a software engineer?" },
  {
    character: "jet",
    text: "About 3 years. I actually got a degree in biology from Reed College over in Portland, Oregon. Didn't know what to do after college so I bought a one-way ticket to Honolulu where I worked at a summer camp, then bought another one-way ticket to New York City. And here I am.",
  },
  {
    character: "len",
    text: "Wait, don't forget about your science background.",
  },
  {
    character: "jet",
    text: "I started out working at a bee lab at Princeton University. Quickly realized that academia was not for me and joined a biotech company in NYC. Then, in 2020, I was in the lab working on COVID diagnostics and realized being in a lab wasn't for me. So I woke up one day and said, 'Hey! I think I'll be a software engineer!'",
  },
  {
    character: "narrator",
    text: "You let out a chuckle",
  },
  {
    character: "len",
    text: "Cheers to that!",
  },
  {
    character: "jet",
    text: "But ya, the past 3 years at Opentrons as a software engineer has taught me a lot.",
  },
  { character: "jet", text: "Anyways, we got to get going." },
  {
    character: "you",
    text: "Well, here is my email address. Can I get your email address before you skiddadle?",
  },
  { character: "jet", text: "Ya, for sure! It is jetharyalcid@gmail.com." },
];

interface BarProps {
  onClick: () => void;
  name: string;
  setGrabSeat: React.Dispatch<React.SetStateAction<"yes" | "no" | null>>;
  setContactInfo: React.Dispatch<React.SetStateAction<"yes" | "no" | null>>;
}

export const Bar = (props: BarProps): JSX.Element => {
  const { onClick, name, setGrabSeat, setContactInfo } = props;
  const [index, setIndex] = React.useState<number>(0);
  const [grabSeatModal, setGrabSeatModal] = React.useState<boolean>(false);
  const [scienceModal, setSkipScienceModal] = React.useState<boolean>(false);
  const [contactModal, setContactModal] = React.useState<boolean>(false);
  const currentDialogue = dialogues[index];
  const { character, text } = currentDialogue;

  const handleNextClick = () => {
    const nextIndex = index + 1;
    if (index === 1) {
      setGrabSeatModal(true);
    } else if (index === 8) {
      setSkipScienceModal(true);
    } else if (index === 13) {
      setContactModal(true);
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
          setGrabSeat("no");
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
              src="/assets/avatarBar.png"
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
            marginBottom: "1rem",
            boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.3)",
            background: "linear-gradient(45deg, #e0bbe4, #add8e6)",
            display: "flex",
            flexDirection: "column",
            gridGap: "8px",
            justifyContent: "space-between",
          }}
        >
          {grabSeatModal ? (
            <>
              <button
                className="workButton"
                onClick={() => {
                  setGrabSeatModal(false);
                  setGrabSeat("yes");
                  setIndex(index + 1);
                }}
              >
                Yes, I'd love to grab a seat
              </button>
              <button
                className="workButton"
                onClick={() => {
                  setGrabSeatModal(false);
                  setGrabSeat("no");
                  setIndex(index + 1);
                }}
              >
                No, that's okay
              </button>
            </>
          ) : null}
          {scienceModal ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <button
                className="workButton"
                onClick={() => {
                  setSkipScienceModal(false);
                  setIndex(index + 4);
                }}
              >
                Sorry, I don't have much time
              </button>
              <button
                className="workButton"
                onClick={() => {
                  setSkipScienceModal(false);
                  setIndex(index + 1);
                }}
              >
                Yes, I'd love to hear about your science background!
              </button>
            </div>
          ) : null}
          {contactModal ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <button
                className="workButton"
                onClick={() => {
                  setContactModal(false);
                  setContactInfo("yes");
                  setIndex(index + 1);
                }}
              >
                Ask for contact info
              </button>
              <button
                className="workButton"
                onClick={() => {
                  setContactModal(false);
                  setContactInfo("no");
                  setIndex(index + 1);
                }}
              >
                Get up and leave
              </button>
            </div>
          ) : null}
          {!contactModal && !scienceModal && !grabSeatModal ? (
            <>
              <div style={{ display: "flex", gridGap: "2px" }}>
                <div style={{ fontWeight: 700 }}>{`${
                  character === "you" && name !== ""
                    ? name.toUpperCase()
                    : character.toUpperCase()
                }: `}</div>
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
