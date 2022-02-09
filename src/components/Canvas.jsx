import PropTypes from 'prop-types';
import React, { memo, useCallback, useEffect, useState } from 'react';
import style from '../styles/Canvas.module.css';

function Canvas({ color }) {
  const [canvas, setCanvas] = useState({});
  // measured dom ref
  const canvasRef = useCallback((node) => {
    if (node !== null) {
      const { x, y } = node.getBoundingClientRect();
      const element = {
        self: node,
        ctx: node.getContext('2d'),
        pos: { x, y },
      };
      setCanvas(element);
    }
  }, []);

  useEffect(() => {
    function handleCanvasPos() {
      if (!canvas.self) return;
      const { x, y } = canvas.self.getBoundingClientRect();
      setCanvas((prev) => ({
        ...prev,
        pos: { x, y },
      }));
    }
    window.addEventListener('resize', handleCanvasPos);
    window.addEventListener('scroll', handleCanvasPos);
    return () => {
      window.removeEventListener('resize', handleCanvasPos);
      window.removeEventListener('scroll', handleCanvasPos);
    };
  }, [canvas]);

  // return mouse position
  const getMousePosition = useCallback((event, pos) => {
    const { clientX, clientY } = event;
    const { x, y } = pos;
    return {
      mx: Math.round(clientX - x),
      my: Math.round(clientY - y),
    };
  }, []);

  if (!color) return null;
  return (
    <>
      <canvas
        width={700}
        height={600}
        ref={canvasRef}
        id={style.canvas}
        onMouseDown={(e) => {
          const { pos, ctx } = canvas;
          const { mx, my } = getMousePosition(e, pos);
          ctx.strokeStyle = color;
          ctx.lineWidth = 2;
          ctx.linecap = 'round';
          ctx.beginPath();
          ctx.moveTo(mx, my);
          ctx.lineTo(mx - 1, my - 1);
          ctx.stroke();
        }}
        onMouseMove={(e) => {
          const { pos, ctx } = canvas;
          if (e.buttons === 1) {
            const { mx, my } = getMousePosition(e, pos);
            ctx.lineTo(mx, my);
            ctx.stroke();
          }
        }}
      />
      <button
        type="button"
        className={style.btn}
        onClick={() => {
          if (!canvas.ctx) return;
          const { ctx, self } = canvas;
          const { clientWidth, clientHeight } = self;
          ctx.clearRect(0, 0, clientWidth, clientHeight);
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
