/* eslint-disable react/prop-types */
import React from 'react';
import style from '../styles/Paint.module.css';
import ColorPicker from './ColorPicker';

function Paint({ colors, activeColor, handleActive }) {

  return (
    <div className={style.container}>
      {colors?.map((item) => (
        <ColorPicker
          color={item}
          key={item}
          activeColor={activeColor}
          onActive={() => handleActive(item)}
        />
      ))}
    </div>
  );
}

export default Paint;
