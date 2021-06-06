export default function manipulateCanvas() {
  function start(rows: number, cols: number): void {
    const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const cells: any = createCells(rows, cols, 20);
        drawCells(ctx, cells);
        /*  drawWalls(ctx, cells); */
      }
    }
  }

  function createCells(rows: number, cols: number, size: number): Object {
    const cells: Object[] = [];
    let x = 0;
    let y = rows * size;
    for (let row = 0; row < rows; row++) {
      x = 0;
      const inner = [];
      for (let col = 0; col < cols; col++) {
        inner.push(Cell(x, y, size));
        x += size;
      }
      y -= size;
      cells.push(inner);
    }
    return cells;
  }

  interface iCell {
    x: number;
    y: number;
    size: number;
    walls: {
      top: boolean;
      bottom: boolean;
      left: boolean;
      right: boolean;
    };
  }

  function Cell(x: number, y: number, size: number): iCell {
    return {
      x,
      y,
      size,
      walls: {
        top: true,
        bottom: true,
        left: true,
        right: true,
      },
    };
  }

  function drawCells(
    ctx: CanvasRenderingContext2D,
    cells: Array<Array<iCell>>
  ) {
    let duration = 0;
    ctx.strokeStyle = 'black';
    cells.reverse().forEach((row) => {
      row.forEach((cell) => {
        const { x, y, size } = cell;
        const timeout = setTimeout(() => {
          clearTimeout(timeout);
          ctx.strokeRect(x, y, size, size);
        }, duration);
        duration += 1;
      });
    });
  }

  function drawWalls(
    ctx: CanvasRenderingContext2D,
    cells: Array<Array<iCell>>
  ) {
    let duration = 0;
    ctx.fillStyle = 'black';
    cells.reverse().forEach((row) => {
      row.forEach((cell) => {
        const { x, y, size } = cell;
        const { top, bottom, left, right } = cell.walls;
        let callback: Function | null | void = null;
        if (top) {
          callback = ctx.fillRect(x, y, size, 1);
        }
        if (bottom) {
          callback = ctx.fillRect(x, y - size + 1, size, 1);
        }
        if (left) {
          callback = ctx.fillRect(x, y, 1, size);
        }
        if (right) {
          callback = ctx.fillRect(x + size - 1, y, 1, size);
        }
        if (typeof callback === 'function') {
          setTimeout(callback, duration);
          duration += 5;
        }
      });
    });
  }

  return { start, createCells };
}
