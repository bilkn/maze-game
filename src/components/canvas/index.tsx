import React from 'react'

interface Props {
    width: number;
    height: number;
    children?: React.ReactNode;
}

function Canvas({children,width, height}:Props):JSX.Element {
    return (
        <canvas className="canvas" width={width} height={height}>{children}</canvas>
    )
}

export default Canvas
