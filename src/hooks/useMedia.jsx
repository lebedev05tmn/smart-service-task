import { useState } from "react";

const useMedia = (media, macthHandler, notMatchHandler) => {
  const matchMedia = window.matchMedia(media);

  const [isMediaMatch, setIsMediaMatch] = useState(matchMedia.matches);

  matchMedia.onchange = () => {
    setIsMediaMatch(matchMedia.matches);
  };

  return isMediaMatch ? macthHandler : notMatchHandler;
};

export default useMedia;
