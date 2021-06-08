import './App.css';
import { Canvas } from './components';
import { useMazeLogic } from './hooks';

function App() {
  const {
    cols,
    rows,
    handleColChange,
    handleRowChange,
    handleStartClick,
    start,
  } = useMazeLogic();

  return (
    <div>
      <div className="container">
        {cols && rows && start ? <Canvas cols={cols} rows={rows} /> : null}
      </div>
      <div className="container">
        <Canvas.Box>
          <Canvas.Input
            onChange={handleColChange}
            placeholder="Enter col count"
            disabled={start}
          />
          <Canvas.Input
            onChange={handleRowChange}
            placeholder="Enter row count"
            disabled={start}
          />
          <Canvas.Button onClick={handleStartClick}>Start</Canvas.Button>
        </Canvas.Box>
      </div>
    </div>
  );
}

export default App;
