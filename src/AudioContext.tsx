import React from "react";

type AudioContextType = {
  isMuted: boolean;
  toggleAudio: () => void;
  audioRef: React.RefObject<HTMLAudioElement>;
};

const AudioContext = React.createContext<AudioContextType | undefined>(
  undefined
);

export const AudioProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [isMuted, setIsMuted] = React.useState<boolean>(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const toggleAudio = (): void => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play();
        setIsMuted(false);
      } else {
        audioRef.current.pause();
        setIsMuted(true);
      }
    }
  };

  return (
    <AudioContext.Provider value={{ isMuted, toggleAudio, audioRef }}>
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
