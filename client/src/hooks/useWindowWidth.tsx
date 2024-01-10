import { useEffect, useState } from "react";
import { currentWindowWidth } from "../utils/windowWidth";

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(currentWindowWidth);
    });

    return () => {
      window.addEventListener("resize", () => {
        setWindowWidth(currentWindowWidth);
      });
    };
  }, []);

  return { windowWidth };
};
