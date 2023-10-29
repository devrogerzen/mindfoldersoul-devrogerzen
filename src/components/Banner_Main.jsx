import React from 'react';
import KeyboardWelcome from './temp/welcome-keyboard.mp4';

const Banner_Main = () => {
  return (
    <div>
      <video loop autoPlay muted className='video'>
        <source src={KeyboardWelcome} type="video/mp4" />
      </video>
    </div>
  );
};

export default Banner_Main;
