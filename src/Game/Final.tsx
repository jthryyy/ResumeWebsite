import * as React from "react";
import "../own.css";
import { TypewriterEffect } from "./utils";

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
];
