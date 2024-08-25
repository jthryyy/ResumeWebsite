import * as React from "react";

interface EffectProps {
  text: string;
  setIsDone: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TypewriterEffect = (props: EffectProps): JSX.Element => {
  const { text, setIsDone } = props;
  const [displayedText, setDisplayedText] = React.useState("");

  React.useEffect(() => {
    let index = 0;
    setDisplayedText(""); 
    setIsDone(false);
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index += 1;
      if (index >= text.length) {
        clearInterval(interval);
        setIsDone(true); // Mark text as done
      }
    }, 20);

    return () => clearInterval(interval);
  }, [text, setIsDone]);

  return <div>{displayedText}</div>;
};
