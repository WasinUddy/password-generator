import React from 'react';
import './styles/config_box.css';

export default function ConfigBox(props) {
  return (
    <div className='config-box'>
        
        <div className='checkbox-container'>
            <input type='checkbox' id='uppercase' name='uppercase' value='uppercase' />
            <label className='prefix'>Uppercase</label>

            
        </div>

        <div className='checkbox-container'>
            <input type='checkbox' id='lowercase' name='lowercase' value='lowercase' />
            <label className='prefix'>Lowercase</label>

        </div>

        <div className='checkbox-container'>
            <input type='checkbox' id='numbers' name='numbers' value='numbers' />
            <label className='prefix'>Numbers</label>

        </div>

        <div className='checkbox-container'>
            <input type='checkbox' id='symbols' name='symbols' value='symbols' />
            <label className='prefix'>Symbols</label>

        </div>

    </div>
  );
}
