/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import getRandomColor from '../utils/randomColor';

function useColorSet(initialColor) {
  const [color, setColor] = useState(initialColor);
  const [colorSet, setColorSet] = useState([]);

  const handleColor = () => setColor(getRandomColor());

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
          setColorSet(result);
        })
        .catch(() => {});
    })();

    return () => {
      controller.abort();
    };
  }, [color]);

  return [colorSet, handleColor];
}

export default useColorSet;
