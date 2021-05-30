export default function manipulateCanvas() {
  function start(rows: number, cols: number): void {
    const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.strokeStyle = 'black';
        const cells: any = createCells(rows, cols, 20); // change any type.
        drawCells(ctx, cells);
      }
    }
  }

  function createCells(cols: number, rows: number, size: number): Object {
    const cells: Object[] = [];
    let x = 0;
    let y = rows * size;
    for (let row = 0; row < rows; row++) {
      x = 0;
      for (let col = 0; col < cols; col++) {
        cells.push(Cell(x, y, size));
        x += size;
      }
      y -= size;
    }
    return cells;
  }

  interface iCell {
    x: number;
    y: number;
    size: number;
  }

  function Cell(x: number, y: number, size: number): iCell {
    return {
      x,
      y,
      size,
    };
  }

  function drawCells(ctx: CanvasRenderingContext2D, cells: Array<iCell>) {
    let duration = 0;
    cells.reverse().forEach((cell) => {
      const { x, y, size } = cell;
      setTimeout(() => ctx.strokeRect(x, y, size, size), duration);
      duration += 5;
    });
  }
  return { start, createCells };
}
