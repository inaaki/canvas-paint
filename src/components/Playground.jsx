import React, { useEffect, useState } from 'react';
import getRandomColor from '../utils/randomColor';

function Playground() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(null);

  useEffect(() => {
    setColor(getRandomColor());
  }, [count]);

  return (
    <div style={{ borderTop: `20px solid ${color}` }}>
      {count}{' '}
      <button
        type="button"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
      <button
        type="button"
        onClick={() => setCount((prevCount) => prevCount - 1)}
        disabled={count <= 0}
      >
        -
      </button>
    </div>
  );
}

export default Playground;
