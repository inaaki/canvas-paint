import PropTypes from 'prop-types';
import React, { memo, useRef } from 'react';
import style from '../styles/Canvas.module.css';

function Canvas({ color }) {
  const canvasRef = useRef();
  const position = useRef({ mx: 0, my: 0 });
  const ctxRef = useRef();

  if (!color) return null;
  return (
    <>
      <canvas
        width={700}
        height={600}
        ref={canvasRef}
        id={style.canvas}
        onMouseDown={(e) => {
          const { clientX, clientY } = e;
          const { x, y } = canvasRef.current.getBoundingClientRect();
          position.current.mx = Math.round(clientX - x);
          position.current.my = Math.round(clientY - y);
          ctxRef.current = canvasRef.current.getContext('2d');
          const ctx = ctxRef.current;
          const { mx, my } = position.current;
          ctx.strokeStyle = color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(mx, my);
        }}
        onMouseMove={(e) => {
          if (e.buttons === 1) {
            const { clientX, clientY } = e;
            const { x, y } = canvasRef.current.getBoundingClientRect();
            position.current.mx = Math.round(clientX - x);
            position.current.my = Math.round(clientY - y);
            const ctx = ctxRef.current;
            const { mx, my } = position.current;
            ctx.lineTo(mx, my);
            ctx.stroke();
          }
        }}
      />
      <button
        type="button"
        className={style.btn}
        onClick={() => {
          if (!ctxRef.current) return;
          const { clientWidth, clientHeight } = canvasRef.current;
          ctxRef.current.clearRect(0, 0, clientWidth, clientHeight);
        }}
      >
        clear
      </button>
    </>
  );
}

export default memo(Canvas);

Canvas.propTypes = {
  color: PropTypes.string.isRequired,
};
