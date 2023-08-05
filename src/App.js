import './App.css';
import React from 'react';

import ConfigBox from './config_box';
import LengthSelector from './lengthselector';

function App() {
  return (
    <div className="App">

      <div className='config'>
        <LengthSelector />
        <ConfigBox />
      </div>
      

    </div>
  );
}

export default App;
