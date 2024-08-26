import * as React from "react";
import "../../../own.css";
interface BackProps {
  onClick: () => void;
}

export const Back = (props: BackProps): JSX.Element => {
  return (
    <div
      onClick={props.onClick}
      className="back"
      style={{ width: "1.5rem", height: "1.5rem" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
      </svg>
    </div>
  );
};
