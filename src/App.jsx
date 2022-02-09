import React, { useEffect, useState } from 'react';
import Canvas from './components/Canvas';
import Paint from './components/Paint';
import WindowSize from './components/WindowSize';
import useColorSet from './hooks/useColorSet';
import style from './styles/App.module.css';
import getRandomColor from './utils/randomColor';

const INITIAL_COLOR = getRandomColor();

function App() {
  const [colorSet, setColorSet] = useColorSet(INITIAL_COLOR);
  const [activeColor, setActiveColor] = useState('');
  //
  useEffect(() => {
    if (colorSet.length) setActiveColor(colorSet[0]);
  }, [colorSet]);

  return (
    <div className={style.container}>
      <Paint
        colors={colorSet}
        activeColor={activeColor}
        handleActive={setActiveColor}
      />
      <button className={style.colorBtn} type="button" onClick={setColorSet}>
        Generate Color
      </button>
      <Canvas color={activeColor} />
      <WindowSize />
    </div>
  );
}

export default App;
