import * as React from "react";
import { Wizard } from "./Game";
import { Resume } from "./Resume";

export function Container(): JSX.Element {
  const [page, setPage] = React.useState<"game" | "resume">("game");
  const [win, setWin] = React.useState<boolean>(false);

  return page === "game" ? (
    <Wizard
      onClick={(value) => {
        setPage("resume");
        setWin(value);
      }}
    />
  ) : (
    <Resume
      isWin={win}
      goBack={() => {
        setPage("game");
      }}
    />
  );
}
