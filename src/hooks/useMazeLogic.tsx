import { useState } from "react";

function useMazeLogic() {
      const [cols, setCols] = useState(0);
      const [rows, setRows] = useState(0);
      const [start, setStart] = useState(false);
      const handleColChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target) setCols(+e.target.value);
      };
      const handleRowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target) setRows(+e.target.value);
      };

      const handleStartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (cols && rows) {
          setStart(true);
        }
      };
    return (
        {handleColChange,handleRowChange,handleStartClick,start,rows,cols}
    )
}

export default useMazeLogic
