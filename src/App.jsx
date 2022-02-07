import React, { useState } from 'react';
import Paint from './components/Paint';
import style from './styles/App.module.css';
import getRandomColor from './utils/randomColor';

const INITIAL_COLOR = getRandomColor();

function App() {
  const [color, setColor] = useState(INITIAL_COLOR);

  return (
    <div>
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
    </div>
  );
}

export default App;
