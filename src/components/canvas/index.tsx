import React, { useEffect } from 'react';
import {manipulateCanvas} from "../../helpers/index";
import "./index.css";

interface Props {
  width: number;
  height: number;
  children?: React.ReactNode;
}

function Canvas({ children, width, height }: Props): JSX.Element {
  useEffect(() => {
   const {start} = manipulateCanvas();
   start(20,30);
  }, []);
  return (
    <canvas className="canvas" width={width} height={height}>
      {children}
    </canvas>
  );
}

export default Canvas;
