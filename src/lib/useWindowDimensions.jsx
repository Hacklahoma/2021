import { useState, useEffect } from 'react';

/**
 * Get innerWidth and innerHeight of window
 */
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  const isMobile = width < 570;
  return {
    width,
    height,
    isMobile,
  };
}

/**
 * React hook that will return a window's width and height
 */
export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    /**
     * Updates window dimensions
     */
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
