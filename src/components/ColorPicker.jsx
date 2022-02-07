/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import React from 'react';
import style from '../styles/ColorPicker.module.css';

function ColorPicker({ color, activeColor, onActive }) {
  return (
    <div
      onClick={onActive}
      className={
        color === activeColor
          ? `${style.container} ${style.active}`
          : style.container
      }
      style={{ background: color }}
    />
  );
}

export default ColorPicker;

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  activeColor: PropTypes.string.isRequired,
  onActive: PropTypes.func.isRequired,
};
