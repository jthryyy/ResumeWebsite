import * as React from "react";
import "../own.css";

interface LandingProps {
  onClick: () => void;
}
export const Landing = (props: LandingProps): JSX.Element => {
  const { onClick } = props;

  return (
    <div>
      <div
        style={{ position: "absolute", bottom: 0, right: "-30%", zIndex: 6 }}
      >
        <img src={"/assets/Samoyed.png"} height="30%" width="50%" />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "80%",
          zIndex: 5,
        }}
      >
        <img src={"/assets/avatarFrontPage.png"} height="100%" width="100%" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "10%",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: "2.5rem", color: "black" }}>Jethary Alcid</h3>
        <p
          style={{
            fontSize: "1.5rem",
            color: "darkred",
          }}
        >
          Presents
        </p>
      </div>

      <div className="container">
        <div className="first">Win a chance to meet my dog, Hopia!</div>
      </div>
      <button className="button" onClick={onClick}>
        Play
      </button>
    </div>
  );
};
