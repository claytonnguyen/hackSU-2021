import './App.css';
import React, { useState } from 'react';
import Board from './Board';
import EndButton from './EndButton';
function App() {
  const [placing, setPlacing] = useState(true);
  const [editing, setEditing] = useState(true);

  const handleClick = () => {
    setPlacing(false);
    setEditing(!editing);
  }

  const flip = () => {
    setEditing(!editing);
  }

  return (
    <div className="App">
      <Board nrows={10} ncols={10} user={1} canEdit={editing} isPlacing={placing} flip={flip}/>
      <Board nrows={10} ncols={10} user={2} canEdit={!editing} isPlacing={false} flip={flip}/>
      {/* <EndButton b/> */}
      {placing && editing && <button onClick={handleClick}> SET POSITION </button>}
    </div>
  );
}

export default App;

