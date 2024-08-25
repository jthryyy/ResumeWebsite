import * as React from "react";

interface EffectProps {
  text: string;
}

export const TypewriterEffect = (props: EffectProps): JSX.Element => {
  const { text } = props;
  const [displayedText, setDisplayedText] = React.useState("");

  React.useEffect(() => {
    let index = 0;
    setDisplayedText("");
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index += 1;
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [text]);

  return <div>{displayedText}</div>;
};
