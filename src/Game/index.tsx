import * as React from "react";
import { Landing } from "./Landing";
import { Coffee } from "./Coffee";

type PageType = "landing" | "coffee" | "bar" | "final";
export type WorkType = "recruiter" | "swe" | "other";

export function Wizard(): JSX.Element {
  const [page, setPage] = React.useState<PageType>("landing");
  const [name, setName] = React.useState<string>("");
  const [work, setWork] = React.useState<WorkType | null>(null);
  const [bar, setBar] = React.useState<"yes" | "no" | null>(null);

  if (bar === "no") {
    return <div>you lose</div>;
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
    return <div>bar</div>;
  } else {
    return <div>finale</div>;
  }
}
