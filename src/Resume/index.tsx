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
      {aboutMe ? (
        <AboutMe goBack={() => setAboutMe(false)} isWon={isWin} />
      ) : null}
      {science ? (
        <Science goBack={() => setScience(false)} isWon={isWin} />
      ) : null}
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
          {isWin ? (
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
          ) : null}
        </div>
      ) : null}
    </>
  );
}

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
//
