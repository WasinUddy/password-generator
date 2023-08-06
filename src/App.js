import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [psk, setPsk] = useState('');
  const [refresh, setRefresh] = useState(false);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    switch (name) {
      case 'length':
        setLength(parseInt(event.target.value));
        break;
      case 'uppercase':
        setUppercase(checked);
        break;
      case 'lowercase':
        setLowercase(checked);
        break;
      case 'numbers':
        setNumbers(checked);
        break;
      case 'symbols':
        setSymbols(checked);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setPsk(generate_password({
      length: length,
      uppercase: uppercase,
      lowercase: lowercase,
      numbers: numbers,
      symbols: symbols,
      ambiguous: false
    }));
  }, [length, uppercase, lowercase, numbers, symbols, refresh]);


  return (
    <div className="App">
      <div className="GenPass">
        <h1>Password Generator</h1>
        <div className='password'>
          <h2>{psk}</h2>
          <button className='refresh' onClick={() => {setRefresh(!refresh)}}>R</button>
        </div>
      </div>
      <div className='config'>
        <div className='length-selector-container'>
          <input
            type='text'
            name='length'
            value={length}
            onChange={handleChange}
          />
          <input
            type='range'
            min='1'
            max='50'
            name='length'
            value={length}
            onChange={handleChange}
            className='slider'
          />
        </div>
        <div className='config-box'>
          <div className='checkbox-container'>
            <input
              type='checkbox'
              id='uppercase'
              name='uppercase'
              value='uppercase'
              checked={uppercase}
              onChange={handleChange}
            />
            <label className='prefix'>Uppercase</label>
          </div>
          <div className='checkbox-container'>
            <input
              type='checkbox'
              id='lowercase'
              name='lowercase'
              value='lowercase'
              checked={lowercase}
              onChange={handleChange}
            />
            <label className='prefix'>Lowercase</label>
          </div>
          <div className='checkbox-container'>
            <input
              type='checkbox'
              id='numbers'
              name='numbers'
              value='numbers'
              checked={numbers}
              onChange={handleChange}
            />
            <label className='prefix'>Numbers</label>
          </div>
          <div className='checkbox-container'>
            <input
              type='checkbox'
              id='symbols'
              name='symbols'
              value='symbols'
              checked={symbols}
              onChange={handleChange}
            />
            <label className='prefix'>Symbols</label>
          </div>
        </div>
      </div>
    </div>
  );
}

function generate_password(configs) {
  let characters_pool = "";
  let length = configs.length;

  if (configs.uppercase) {
      characters_pool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  
  if (configs.lowercase) {
      characters_pool += "abcdefghijklmnopqrstuvwxyz";
  }

  if (configs.numbers) {
      characters_pool += "0123456789";
  }

  if (configs.symbols) {
      characters_pool += "!@#$%?+";
  }
  let password = "";
  for (let i = 0; i < length; i++) {
      let random_index = Math.floor(Math.random() * characters_pool.length);
      password += characters_pool[random_index];
  }

  return password;
}


export default App;
