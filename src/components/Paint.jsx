/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import style from '../styles/Paint.module.css';
import ColorPicker from './ColorPicker';

function Paint({ color }) {
  const [activeColor, setActiveColor] = useState('');
  const [colors, setColors] = useState([]);

  useEffect(() => {
    // abort controller for fetch
    const controller = new AbortController();
    const { signal } = controller;
    //
    (() => {
      const baseColor = color.slice(1);
      fetch(
        `https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome&count=5`,
        { signal, method: 'GET' },
      )
        .then((res) => res.json())
        .then((res) => {
          const result = res.colors.map((item) => item.hex.value);
          setColors(result);
          setActiveColor(res.colors[0].hex.value);
        })
        .catch(() => {});
    })();

    return () => {
      controller.abort();
    };
  }, [color]);

  return (
    <div className={style.container}>
      {colors.map((item) => (
        <ColorPicker
          color={item}
          key={item}
          activeColor={activeColor}
          onActive={() => setActiveColor(item)}
        />
      ))}
    </div>
  );
}

export default Paint;
