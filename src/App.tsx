import { useState } from 'react';
import './App.css';
import { Canvas } from './components';

function App() {
  const [cols,setCols] = useState(0)
  const [rows,setRows] = useState(0)
  const [start,setStart] = useState(false);
  const handleColChange = (e:React.ChangeEvent<HTMLInputElement>)=> {
    if(e.target) setCols(+e.target.value);
    
  }
  const handleRowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) setRows(+e.target.value);
  };

  const handleStartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(cols && rows) {
      setStart(true);
    }
  }

  

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
         />
         <Canvas.Input
           onChange={handleRowChange}
           placeholder="Enter row count"
         />
         <Canvas.Button onClick={handleStartClick}>Start</Canvas.Button>
       </Canvas.Box>
     </div>
   </div>
 );
}

export default App;
