import * as React from "react";
import { Landing } from "./Landing";
import { Coffee } from "./Coffee";
import { Bar } from "./Bar";
import { Final } from "./Final";
import { Loser } from "./Lose";

type PageType = "landing" | "coffee" | "bar" | "final";
export type WorkType = "recruiter" | "swe" | "other";

interface WizardProps {
  onClick: (win: boolean) => void;
}
export function Wizard(props: WizardProps): JSX.Element {
  const { onClick } = props;
  const [page, setPage] = React.useState<PageType>("landing");
  const [name, setName] = React.useState<string>("");
  const [work, setWork] = React.useState<WorkType | null>(null);
  const [bar, setBar] = React.useState<"yes" | "no" | null>(null);
  const [earlyQuit, setEarlyQuit] = React.useState<boolean>(false);
  const [seat, setGrabSeat] = React.useState<"yes" | "no" | null>(null);
  const [contact, setContact] = React.useState<"yes" | "no" | null>(null);
  console.log(
    `TODO: still need to wire up ${work} and ${name} in the analytics`
  );

  if (earlyQuit || bar === "no" || seat === "no" || contact === "no") {
    return (
      <Loser
        onClick={() => {
          onClick(false);
        }}
      />
    );
  }

  if (page === "landing") {
    return (
      <div
        style={{
          background: "linear-gradient(45deg, #e0bbe4, #add8e6)",
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          color: "white",
          alignItems: "center",
          fontFamily: "monospace",
        }}
      >
        <Landing
          earlyQuit={setEarlyQuit}
          onClick={() => {
            setPage("coffee");
          }}
        />
      </div>
    );
  } else if (page === "coffee") {
    return (
      <Coffee
        name={name}
        setWork={setWork}
        setBar={setBar}
        setName={setName}
        onClick={() => {
          setPage("bar");
        }}
      />
    );
  } else if (page === "bar") {
    return (
      <Bar
        name={name}
        setContactInfo={setContact}
        setGrabSeat={setGrabSeat}
        onClick={() => {
          setPage("final");
        }}
      />
    );
  } else {
    return (
      <Final
        onClick={() => {
          onClick(true);
        }}
      />
    );
  }
}
