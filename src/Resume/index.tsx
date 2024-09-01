import * as React from "react";
import resume from "../Assets/resumeBackground.jpg";
import samoyed from "../Assets/Samoyed.png";
import { AboutMe } from "./AboutMe";
import { Science } from "./Science";
import { Office } from "./Office";
import { textClassName } from "../constants";
interface ResumeProps {
  isWin: boolean;
  goBack: () => void;
}

export function Resume(props: ResumeProps): JSX.Element {
  const { isWin, goBack } = props;
  const [office, setOffice] = React.useState<boolean>(false);
  const [science, setScience] = React.useState<Boolean>(false);
  const [aboutMe, setAboutMe] = React.useState<boolean>(false);
  // const containerRef = React.useRef<HTMLDivElement>(null);
  // const [isDragging, setIsDragging] = React.useState(false);
  // const [startX, setStartX] = React.useState(0);
  // const [startY, setStartY] = React.useState(0);
  // const [bgPosX, setBgPosX] = React.useState(50);
  // const [bgPosY, setBgPosY] = React.useState(50);
  // const [isButtonVisible, setIsButtonVisible] = React.useState(false);

  // const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
  //   if (containerRef.current) {
  //     setIsDragging(true);
  //     setStartX(e.pageX);
  //     setStartY(e.pageY);
  //     containerRef.current.style.cursor = "grabbing";
  //   }
  // };

  // const handleMouseUpOrLeave = (): void => {
  //   setIsDragging(false);
  //   if (containerRef.current) {
  //     containerRef.current.style.cursor = "grab";
  //   }
  // };

  // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
  //   if (!isDragging || !containerRef.current) return;
  //   e.preventDefault();
  //   const moveX = e.pageX - startX;
  //   const moveY = e.pageY - startY;

  //   containerRef.current.scrollLeft -= moveX;
  //   containerRef.current.scrollTop -= moveY;

  //   setBgPosX((prev) => prev - moveX / 10);
  //   setBgPosY((prev) => prev - moveY / 10);

  //   setStartX(e.pageX);
  //   setStartY(e.pageY);
  // };

  // const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
  //   setIsDragging(true);
  //   setStartX(e.touches[0].pageX);
  //   setStartY(e.touches[0].pageY);
  //   if (containerRef.current) {
  //     containerRef.current.style.cursor = "grabbing";
  //   }
  // };

  // const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
  //   if (!isDragging || !containerRef.current) return;
  //   e.preventDefault();
  //   const moveX = e.touches[0].pageX - startX;
  //   const moveY = e.touches[0].pageY - startY;

  //   containerRef.current.scrollLeft -= moveX;
  //   containerRef.current.scrollTop -= moveY;

  //   setBgPosX((prev) => prev - moveX / 10);
  //   setBgPosY((prev) => prev - moveY / 10);

  //   setStartX(e.touches[0].pageX);
  //   setStartY(e.touches[0].pageY);
  // };

  // const handleTouchEnd = (): void => {
  //   setIsDragging(false);
  //   if (containerRef.current) {
  //     containerRef.current.style.cursor = "grab";
  //   }
  // };

  // const pointX = 1087; // X coordinate of the point on the background image

  // const checkVisibility = () => {
  //   if (!containerRef.current) return;

  //   const container = containerRef.current;
  //   const containerRect = container.getBoundingClientRect();
  //   console.log("Container Rect:", containerRect);
  //   console.log("Scroll Left:", containerRef.current.scrollLeft);
  //   console.log("Scroll Top:", containerRef.current.scrollTop);
  //   // Calculate the position of the point in the viewport
  //   const pointInContainerX = pointX - container.scrollLeft;
  //   // Check if the point is within the viewport
  //   const isPointVisible =
  //     pointInContainerX >= 0 && pointInContainerX <= window.innerWidth;

  //   console.log("isPointVisible", pointInContainerX, isPointVisible);
  //   setIsButtonVisible(isPointVisible);
  // };

  // React.useEffect(() => {
  //   // Initial visibility check
  //   checkVisibility();
  //   window.addEventListener("resize", checkVisibility);
  //   containerRef.current?.addEventListener("scroll", checkVisibility);

  //   return () => {
  //     window.removeEventListener("resize", checkVisibility);
  //     containerRef.current?.removeEventListener("scroll", checkVisibility);
  //   };
  // }, [containerRef.current]);

  return (
    <>
      {aboutMe ? <AboutMe goBack={() => setAboutMe(false)} isWon={isWin} /> : null}
      {science ? <Science goBack={() => setScience(false)} isWon={isWin} /> : null}
      {office ? <Office goBack={() => setOffice(false)} isWon={isWin} /> : null}
      {!aboutMe && !science && !office ? (
        <div
          style={{
            backgroundImage: `url(${resume})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100vw",
            fontFamily: "Open Sans, sans-serif",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className={`real-glass ${textClassName}`}
              style={{
                display: "flex",
                flexDirection: "column",

                gridGap: "8px",
                width: "max-content",
                padding: "8px",
              }}
            >
              <button className="skipButton" onClick={() => setOffice(true)}>
                Visit office
              </button>
              <button className="skipButton" onClick={() => setScience(true)}>
                Visit science lab
              </button>
              <button className="skipButton" onClick={() => setAboutMe(true)}>
                Chat with Jet
              </button>
              <button className="skipButton" onClick={goBack}>
                Go home
              </button>
            </div>
          </div>
          {/* {isWin ? ( */}
          <div
            style={{
              display: "flex",
              position: "fixed",
              bottom: 0,
              left: "50%",
              height: "30%",
              width: "45%",
            }}
          >
            <img src={samoyed} />
          </div>
          {/* ) : null} */}
        </div>
      ) : null}
    </>

    //     <div
    //       style={{
    //         backgroundImage: `url(${hopia})`,
    //         backgroundSize: "cover",
    //         backgroundPosition: "center",
    //         // background: "darkred",
    //         height: "100%",
    //         minHeight: "100vh",
    //         width: "100vw",
    //         // position: "relative",
    //         fontFamily: "Open Sans, sans-serif",
    //         paddingBottom: "2rem",
    //         // overflow: "hidden",
    //       }}
    //     >
    //       <div
    //         style={{
    //           display: "flex",
    //           padding: "1rem",
    //           justifyContent: "start",
    //           width: "100vw",
    //           gridGap: "4px",
    //           color: "white",
    //           alignItems: "center",
    //         }}
    //       >
    //         <Back onClick={goBack} />
    //       </div>
    //       {isWin ? (
    //         <div className="moving-div">
    //           <img src={samoyed} />
    //         </div>
    //       ) : null}
    //       <>
    //         <About isWin={isWin} />
    //         <div
    //           style={{
    //             backgroundColor: "#96DEE9",
    //             padding: "1rem",
    //             margin: "2rem",
    //             borderRadius: "8px",
    //           }}
    //         >
    //           <div className="real-glass" style={{ margin: "2rem" }}>
    //             <div style={{ color: "black", marginBottom: "1rem" }}>
    //               Sr. Research Technician - Opentrons
    //               <strong>(October 2019 - July 2021)</strong>
    //             </div>
    //             <ul style={{ listStyleType: "disc" }}>
    //               <li>
    //                 Optimized COVID diagnostics protocols in python to run on the
    //                 Opentrons robot, a critical factor in securing a significant
    //                 $200 million series C funding at Opentrons.
    //               </li>
    //               <li>
    //                 Successfully enhanced more than 20 extraction protocols in
    //                 python for renowned brands such as Thermofisher and Zymo,
    //                 increasing revenue and leading to 2{" "}
    //                 <a
    //                   href={
    //                     "https://insights.opentrons.com/hubfs/Applications/Nucleic%20acid%20extraction/Magnetic%20Bead-based%20Nucleic%20Acid%20Extraction%20on%20OT-2%20Application%20Note.pdf?_gl=1*akjlsw*_ga*OTQ5MDA2NTg2LjE2NDMwNDQ4ODc.*_ga_66HK7MC5D7*MTcwNTM1MDc5MS40My4xLjE3MDUzNTA4ODEuMzMuMC4w*_ga_GNSMNLW4RY*MTcwNTM1MDc5MS43NS4xLjE3MDUzNTA4ODEuMzMuMC4w"
    //                   }
    //                   target="_blank"
    //                   rel="noopener noreferrer"
    //                   className="link"
    //                 >
    //                   Publications
    //                 </a>{" "}
    //               </li>
    //             </ul>
    //           </div>
    //           <div className="real-glass" style={{ margin: "2rem" }}>
    //             <div style={{ color: "black", marginBottom: "1rem" }}>
    //               Laboratory Technician - Princeton University
    //               <strong>(October 2018 - October 2019)</strong>
    //             </div>
    //             <ul style={{ listStyleType: "disc" }}>
    //               <li>
    //                 Developed python protocols to run on lab robots to automate
    //                 extractions, which led to the categorization of over 384 bee
    //                 genomes and used R for statistical analysis.
    //               </li>
    //             </ul>
    //           </div>
    //           <div style={{ fontWeight: 700, color: "black", margin: "2rem" }}>
    //             Projects
    //           </div>
    //           <div className="real-glass" style={{ margin: "2rem 2rem 0 2rem" }}>
    //             <ul style={{ listStyleType: "disc" }}>
    //               <li>
    //                 Developed and designed full Next.js frontend of Playmayte, a
    //                 social networking application bringing videogamers together
    //                 using React, Next.js, Typescript, Styled-components.{" "}
    //                 <strong>April 2023 - present</strong>
    //               </li>
    //               <li>
    //                 Creator of JRFeruelo, an art portfolio for Philippines
    //                 mouth-painter John Roland Feruelo, using React, Next.js, and
    //                 Typescript. <strong>June 2023</strong>
    //               </li>
    //             </ul>
    //           </div>{" "}
    //         </div>
    //       </>
    //     </div>
    //   );
    // }

    // interface AboutProps {
    //   isWin: boolean;
    // }

    // export const About = (props: AboutProps): JSX.Element => {
    //   const { isWin } = props;
    //   return (
    //     <div
    //       style={{
    //         backgroundColor: "#96DEE9",
    //         height: "15%",
    //         marginTop: "2rem",
    //         boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
    //         color: "black",
    //         padding: "2rem",
    //         display: "flex",
    //         width: "100%",
    //         cursor: "default",
    //       }}
    //     >
    //       <div style={{ display: "flex" }}>
    //         <div
    //           style={{
    //             margin: "0 2rem",
    //             alignSelf: "center",
    //           }}
    //         >
    //           <img
    //             alt="portrait"
    //             src={about}
    //             style={{
    //               width: "100%",
    //               height: "100%",
    //               minHeight: "50%",
    //               minWidth: "50%",
    //               borderRadius: "3rem",
    //               boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
    //             }}
    //           />
    //         </div>
    //         <div
    //           style={{
    //             width: "80%",
    //             display: "flex",
    //             flexDirection: "column",
    //           }}
    //         >
    //           <div style={{ marginTop: "1rem", padding: "1rem" }}>
    //             <div
    //               style={{
    //                 width: "70%",
    //                 fontSize: "1.6rem",
    //                 display: "flex",
    //                 fontWeight: 600,
    //                 cursor: "default",
    //                 flexDirection: "column",
    //               }}
    //             >
    //               <div>hi, I`m jet! </div>
    //               {isWin ? (
    //                 <div>
    //                   It sounds like you won! I hope you don't mind that I've
    //                   invited Hopia to wander around.
    //                 </div>
    //               ) : (
    //                 <div>
    //                   I'm sorry you lost. Hopia unfortunately won't be joining you
    //                   as you wander around.
    //                 </div>
    //               )}
    //             </div>
    //           </div>
    //           <div style={{ marginTop: "2rem", width: "70%" }}>
    //             I am a lab scientist turned software developer, specializing in
    //             React, Javascipt, Typescript, and Next.js.
    //           </div>
    //           <div style={{ marginTop: "1rem", width: "70%" }}>
    //             Reach out if I can help with code or if you want to learn more about
    //             Hopia!
    //           </div>
    //           <div style={{ marginTop: "1rem", fontWeight: 700 }}>
    //             Email: jetharyalcid@gmail.com
    //           </div>
    //           <div
    //             style={{
    //               display: "flex",
    //               justifyContent: "start",
    //               width: "100vw",
    //               gridGap: "4px",
    //               color: "white",
    //               alignItems: "center",
    //               marginTop: "1rem",
    //             }}
    //           >
    //             <a
    //               href={"http://www.linkedin.com/in/jethary-alcid-5ab428153/"}
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="link"
    //             >
    //               LinkedIn
    //             </a>
    //             <div style={{ color: "black" }}> | </div>
    //             <a
    //               href={"https://github.com/jerader"}
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="link"
    //             >
    //               Github
    //             </a>
    //             <div style={{ color: "black" }}> | </div>
    //             <a
    //               href={"https://github.com/jthryyy"}
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="link"
    //             >
    //               Personal Github
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
  );
}
