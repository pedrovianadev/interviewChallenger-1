import { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [undid, setUndid] = useState([]);

  const handleClick = (e) => {
    
    const newDot = {
      clientX: e.clientX,
      clientY: e.clientY,
    }

    // console.log(newDot); - Here I am checking to see if I can get clientX and clientY

    setList((prev) => [...prev, newDot]);
  }

  const handleUndo = (e) => {
    e.stopPropagation();
    console.log('undo');
    // I used stopPropagation to stop the creation of the points on the button

    if(list.length === 0){
      return;
    }

    const undidDot = list[list.length - 1];
    setUndid((prev => [...prev, undidDot]));

    setList((prev) => {
      const newArray = [...prev].slice(0, -1);
      return newArray;
    })
  }

  const handleRedo = (e) => {
    e.stopPropagation();
    console.log('redo')

    if(undid.length === 0) {
      return;
    }

    const undidDot = undid[undid.length - 1];
    setUndid((prev) => {
      const newArray = [...prev].slice(0, -1);
      return newArray;
    })
    setList((prev) => [...prev, undidDot]);
  }

  return (
    <div id='page' onClick={ handleClick }>
      <button onClick={ handleUndo }> 
        Undo
      </button>
      <button onClick={ handleRedo }>
        Redo
      </button>
      {list.map((dot) => (
        <div className='dot' style={{ left: dot.clientX, top: dot.clientY }} />
      ))}
    </div>
  );
}

export default App;
