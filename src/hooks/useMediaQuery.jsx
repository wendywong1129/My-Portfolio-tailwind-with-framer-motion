import { useState, useEffect } from "react";

const useMediaQuery = (mediaQueryString) => {
  const [isMatches, setIsMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString);
    if (mediaQueryList.matches !== isMatches) {
      setIsMatches(mediaQueryList.matches);
    }
    const listener = () => setIsMatches(mediaQueryList.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [mediaQueryString, isMatches]);

  return isMatches;
};

export default useMediaQuery;
