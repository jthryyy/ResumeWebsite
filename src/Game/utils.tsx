import * as React from "react";
import { textClassName } from "../constants";
import { useAudio } from "../AudioContext";
interface EffectProps {
  text: string;
}

export const TypewriterEffect = (props: EffectProps): JSX.Element => {
  const { text } = props;
  const [displayedText, setDisplayedText] = React.useState("");
  const { isMuted, typingAudioRef } = useAudio();

  React.useEffect(() => {
    if (typingAudioRef.current) {
      if (isMuted) {
        typingAudioRef.current.pause();
        typingAudioRef.current.currentTime = 0;
      } else {
        typingAudioRef.current.play();
      }
    }
  }, [text, typingAudioRef, isMuted]);

  React.useEffect(() => {
    let index = 0;
    setDisplayedText("");
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index += 1;

      if (index >= text.length) {
        clearInterval(interval);

        if (typingAudioRef.current) {
          typingAudioRef.current.pause();
          typingAudioRef.current.currentTime = 0;
        }
      }
    }, 25);

    return () => {
      clearInterval(interval);
      if (typingAudioRef.current) {
        typingAudioRef.current.pause();
        typingAudioRef.current.currentTime = 0;
      }
    };
  }, [text]);

  return (
    <div className={textClassName}>
      <audio ref={typingAudioRef} src={"/assets/textTyping.mp3"} loop />
      {displayedText}
    </div>
  );
};
