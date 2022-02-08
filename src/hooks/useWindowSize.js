import { useEffect, useState } from 'react';

function useWindowSize(callback) {
  const [[windowWidth, windowHeight], setSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    function handleResize() {
      setSize([window.innerWidth, window.innerHeight]);
      if (callback) callback();
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [callback]);

  return [windowWidth, windowHeight];
}

export default useWindowSize;
