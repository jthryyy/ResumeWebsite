import React from "react";

type AudioContextType = {
  isMuted: boolean;
  toggleAudio: () => void;
  backgroundAudioRef: React.MutableRefObject<HTMLAudioElement | null>;
  typingAudioRef: React.MutableRefObject<HTMLAudioElement | null>;
};

const AudioContext = React.createContext<AudioContextType | undefined>(
  undefined
);

export const AudioProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [isMuted, setIsMuted] = React.useState<boolean>(false);
  const backgroundAudioRef = React.useRef<HTMLAudioElement | null>(null);
  const typingAudioRef = React.useRef<HTMLAudioElement | null>(null);

  const toggleAudio = (): void => {
    if (backgroundAudioRef.current) {
      if (isMuted) {
        backgroundAudioRef.current.play();
        setIsMuted(false);
      } else {
        backgroundAudioRef.current.pause();
        setIsMuted(true);
      }
    }
  };

  return (
    <AudioContext.Provider
      value={{ isMuted, toggleAudio, backgroundAudioRef, typingAudioRef }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = (): AudioContextType => {
  const context = React.useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
