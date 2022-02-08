import React, { useCallback, useRef, useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import style from '../styles/WindowSize.module.css';

function WindowSize() {
  const [show, setShow] = useState(true);
  //
  const timeoutRef = useRef(0);
  const callback = useCallback(() => {
    setShow(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setShow(false);
    }, 1000);
  }, []);
  //
  const [windowWidth, windowHeight] = useWindowSize(callback);

  if (!show) return null;
  return (
    <p className={style.size}>
      {windowWidth} x {windowHeight}
    </p>
  );
}

export default WindowSize;
