import React, { useState } from 'react';

function Count() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}{' '}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <button
        onClick={() => setCount((prevCount) => prevCount - 1)}
        disabled={count <= 0}
      >
        -
      </button>
    </div>
  );
}

export default Count;
