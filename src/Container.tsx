import * as React from "react";
import { Wizard } from "./Game";

export function Container(): JSX.Element {
  const [page, setPage] = React.useState<"game" | "resume">("game");
  const [win, setWin] = React.useState<boolean>(false);
  console.log("if", win, "is true then hopia shows up on the resume");
  return page === "game" ? (
    <Wizard
      onClick={(value) => {
        setPage("resume");
        setWin(value);
      }}
    />
  ) : (
    <div>resume</div>
  );
}
