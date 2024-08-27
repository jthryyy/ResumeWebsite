import * as React from "react";
import "../own.css";
import background from "../Assets/samoyedBackground2.jpg";
interface LandingProps {
  onClick: () => void;
  earlyQuit: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Landing = (props: LandingProps): JSX.Element => {
  const { onClick, earlyQuit } = props;

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "10%",
          textAlign: "center",
          width: "100%",
          alignItems: "center",
          gridGap: "1rem",
        }}
      >
        <h3
          style={{
            fontSize: "2.5rem",
            color: "black",
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "4px",
            width: "max-content",
          }}
        >
          Jethary Alcid
        </h3>
        <p
          style={{
            fontSize: "1.5rem",
            color: "darkred",
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "4px",
            width: "max-content",
            marginBottom: "1rem",
          }}
        >
          Presents
        </p>
      </div>

      <div
        className="first"
        style={{
          padding: "1rem",
          borderRadius: "40%",
        }}
      >
        Win a chance to meet my dog, Hopia!
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2%",
          textAlign: "center",
          gridGap: "1rem",
        }}
      >
        <button
          className="secondary-button"
          onClick={() => {
            earlyQuit(true);
          }}
        >
          Skip game and go to resume
        </button>
        <button className="button" onClick={onClick}>
          Play
        </button>
      </div>
      <div className="text-element">
        This game is best if played on a desktop
      </div>
    </div>
  );
};
