import React, { useEffect, useState } from 'react';
import { manipulateCanvas } from '../../helpers/index';
import './index.css';

interface CanvasProps {
  rows: number;
  cols: number;
}

interface Props {
  children?: JSX.Element | JSX.Element[] | string | null;
  [restProps: string]: any;
}

interface InputProps {
  [restProps: string]: any;
}

function Canvas({ rows, cols }: CanvasProps) {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const { start,findCellSize } = manipulateCanvas();
    const cellSize = findCellSize(cols,rows);
    setSize({ width: cols*cellSize, height: rows * cellSize });
    start(rows, cols,cellSize);
  }, [size.width,size.height, cols, rows]);
  return (
    <canvas className="canvas" width={size.width} height={size.height}></canvas>
  );
}

Canvas.Box = function CanvasBox({ children, ...rest }: Props) {
  return (
    <div className="canvas__box" {...rest}>
      {children}
    </div>
  );
};

Canvas.Button = function CanvasButton({ children, ...rest }: Props) {
  return (
    <button className="canvas__btn" {...rest}>
      {children}
    </button>
  );
};

Canvas.Input = function CanvasInput({type="text", ...rest }: InputProps) {
  return <input type={type} className="canvas__input" {...rest} />;
};

export default Canvas;
