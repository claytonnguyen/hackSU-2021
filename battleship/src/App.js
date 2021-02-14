import './App.css';
import React, { useState } from 'react';
import Board from './Board';
import EndButton from './EndButton';
function App() {
  const [editing, setEditing] = useState(true);

  const handleClick = () => {
    setEditing(false);
  }

  let machinePos = [];
  for (let y = 0; y < 10; y++){
    for (let x = 0; x < 10; x++){
      if (Math.random() < 0.25){
        machinePos.push([x,y])
      }
    }
  }
  console.log(machinePos);

  return (
    <div className="App">
      <Board nrows={10} ncols={10} user={1} canEdit={editing}/>
      <Board nrows={10} ncols={10} user={2} canEdit={!editing}/>
      {/* <EndButton b/> */}
      {editing && <button onClick={handleClick}> SET POSITION </button>}
    </div>
  );
}

export default App;

