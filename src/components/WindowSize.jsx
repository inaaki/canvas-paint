import React, { useEffect, useState } from 'react';
import style from '../styles/WindowSize.module.css';

function WindowSize() {
  const [show, setShow] = useState(false);
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    let timeOutId;
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
      setShow(true);

      clearTimeout(timeOutId);
      timeOutId = setTimeout(() => {
        setShow(false);
      }, 1000);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!show) return null;
  return (
    <p className={style.size}>
      size: {size.width}x{size.height} px
    </p>
  );
}

export default WindowSize;
