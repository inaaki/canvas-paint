import React, { useState } from 'react';
import Canvas from './components/Canvas';
import Paint from './components/Paint';
import style from './styles/App.module.css';
import getRandomColor from './utils/randomColor';

const INITIAL_COLOR = getRandomColor();

function App() {
  const [color, setColor] = useState(INITIAL_COLOR);

  return (
    <div className={style.container}>
      <Paint color={color} />

      <button
        className={style.colorBtn}
        type="button"
        onClick={() => {
          setColor(getRandomColor());
        }}
      >
        Generate Color
      </button>
      <Canvas />
    </div>
  );
}

export default App;
