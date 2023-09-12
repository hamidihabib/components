/**
 * // useWindowDimension.ts
 * * This hook returns the viewport/window height and width
 */

import { useEffect, useState } from "react";

type WindowSize = {
  width: number;
  height: number;
};

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 500,
    height: 500,
  });
  useEffect(() => {
    function handleResize(): void {
      setWindowSize({
        width: window.innerWidth | 500,
        height: window.innerHeight | 500,
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
