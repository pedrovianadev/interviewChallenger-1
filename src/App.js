import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    console.log(e);
  }

  return (
    <div id='page' onClick={ handleClick }>
      <div className='dot' />
    </div>
  );
}

export default App;
