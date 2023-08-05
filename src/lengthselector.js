import React, { useState } from 'react';
import './styles/lengthselector.css';

export default function LengthSelector(props) {
  const [length, setLength] = useState(8);

  const handleChange = (event) => {
    setLength(parseInt(event.target.value));
  };

  return (
    <div className='length-selector-container'>
        <input type='text' value={length} onChange={handleChange} />
        <input
            type='range'
            min='1'
            max='50'
            value={length}
            onChange={handleChange}
            className='slider'
        />
      
    </div>
  );
}
