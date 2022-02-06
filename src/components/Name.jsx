import React, { useState } from 'react';

function Name() {
  const [name, setName] = useState('');

  return (
    <input
      value={name}
      onChange={(e) => {
        setName(e.target.value);
      }}
      onClick={(e) => {
        e.target.setSelectionRange(0, name.length);
      }}
      placeholder="Untitled"
    />
  );
}

export default Name;
